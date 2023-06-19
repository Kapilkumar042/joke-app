import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { findJoke, updateJoke } from "~/model/joke.server";

export const loader = async ({ params }: LoaderArgs) => {
//   const joke = await db.joke.findUnique({
//     where: { id: params.jokeId },
//   });
//   if (!joke) {
//     throw new Error("Joke not found");
//   }
//   return json({ joke });params.slug as string
const joke = await findJoke(params.jokeId );
if (!joke) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ joke });
};

export const action = async ({ params,request }: ActionArgs) => {
  const form = await request.formData();
  const content = form.get("content");
  const name = form.get("name");

  if (typeof content !== "string" || typeof name !== "string") {
    throw new Error("Form not updated correctly");
  }

  // const fields = { content, name };

  // const joke = await db.joke.update({
  //   where: { id: params.jokeId },
  //   data: fields,
  // });
  const joke=await updateJoke(params.jokeId, name, content)

  return redirect(`/jokes/${joke.id}`);
};


export default function JokeUpdate() {
  const data = useLoaderData<typeof loader>();
  // console.log("data values",data);
  

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      {/* <p>{data.joke.content}</p> */}
      {/* <Link to=".">"{data.joke.name}"</Link> */}
      <form method="post">
      <input type="text" name="name" value={data.joke.name} id="" />
      <textarea  autoFocus name="content" id="" value={data.joke.content} rows={5} cols={50}></textarea>
      <button type="submit" className="button">
                        Update
      </button>
      </form>
    </div>
  );
}
