import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useParams,
useRouteError, isRouteErrorResponse} from "@remix-run/react";
import { findJoke, deleteJoke } from "~/model/joke.server";
import { DeleteOutlined} from '@ant-design/icons';

import { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { db } from "~/utils/db.server";

export const meta:V2_MetaFunction<typeof loader>=({
  data,
})=>{
  const {description,title} =data?{
    description:`Enjoy the "${data.joke.name}" joke and much more`,
    title:`"${data.joke.name}" joke`
  }:
  { description:"No joke found", title:"No joke"};
  return[
    {name:"description", content:description},
    {name:"twitter:descrition", content:"description"},
    {title},
  ];
};
export const loader = async ({ params }: LoaderArgs) => {
  // const joke = await db.joke.findUnique({
  //   where: { id: params.jokeId },
  // });
  const joke = await findJoke(params.jokeId)
  if (!joke) {
    throw new Response("Joke not found",{
      status:404,
    });
  }
  console.log("joke",joke);
  
  return json({ joke });
};

export const action = async ({ params,request }: ActionArgs) => {
  const form = await request.formData();
 if(form.get("intent")!=="delete"){
      throw new Response(`the intent ${form.get("intent")} is not valid`,
      {status:400})
   }
   const jokes = await findJoke(params.jokeId)
  if (!jokes) {
    throw new Error("Joke not found");
  }


  // if (typeof content !== "string" || typeof name !== "string") {
  //   throw new Error("Form not updated correctly");
  // }

  // const fields = { content, name };

  // const joke = await db.joke.update({
  //   where: { id: params.jokeId },
  //   data: fields,
  // });
await deleteJoke(params.jokeId);
console.log("delete success");

  return redirect(`/jokes/`);
};


export default function JokeRoute() {
  const data = useLoaderData<typeof loader>();
console.log("data values", data);

  return (
    <div>
      <p>Here's your hilarious joke:</p>
      <p>{data.joke.content}</p>
      <Link to=".">"{data.joke.name}"</Link>
      <form method="post">
      <button name="intent" value="delete" type="submit" className="button">
       delete <DeleteOutlined />
      </button>
      </form>
    </div>
  );
}

export function ErrorBoundaru(){
  const {jokeId}=useParams();
  const error = useRouteError();
  if(isRouteErrorResponse(error)&&error.status===404){
    return(
      <div className="error-container">
        Huh? What the heck is "{jokeId}"?
      </div>
    )
  }
  return(
    <div className="error-container">
      There was an error loading joke by the id "${jokeId}".
      Sorry.
    </div>
  )
}