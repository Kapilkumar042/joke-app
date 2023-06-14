import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const loader = async ({ params }: LoaderArgs) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId },
  });
  if (!joke) {
    throw new Error("Joke not found");
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

  const fields = { content, name };

  const joke = await db.joke.update({
    where: { id: params.jokeId },
    data: fields,
  });

  return redirect(`/jokes/`);
};


export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      {/* <p>{data.joke.content}</p> */}
      <form method="post">
      <textarea  autoFocus name="content" id="" value={data.joke.content} rows={5} cols={50}></textarea>
      {/* <Link to=".">"{data.joke.name}"</Link> */}
      <input type="text" name="name" value={data.joke.name} id="" />
      <button type="submit" className="button">
                        Update
      </button>
      </form>
    </div>
  );
}
