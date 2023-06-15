import { Link, Outlet, useLoaderData } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesUrl from "~/styles/jokes.css"
import { json } from "@remix-run/node";
import {db} from "~/utils/db.server"

import { EditOutlined} from '@ant-design/icons';
export const links: LinksFunction=()=>[
    {rel:"stylesheet",href:stylesUrl}
]

// loader
export const loader = async()=>{
    return json({
        jokeListItem:await db.joke.findMany({
            orderBy:{createdAt:"desc"},
            select:{id:true,name:true},
            take:5,
        }),
    });
};

export default function JokesRoute(){
    const data=useLoaderData<typeof loader>();
    return(
    <>
        <div className="jokes-layout">
            <header className="jokes-header">
                <div className="container">
                <h1 className="home-link">
                    <Link to="/"
                    title="Remix Jokes"
                    aria-label="Remix-jokes"
                    >
                        <span className="logo">🤪</span>
                        <span className="logo-medium">J🤪KES</span>
                    </Link>
                </h1>
                </div>
            </header>
            
            <main className="jokes-main">
                <div className="container">
                    <div className="jokes-list">
                        <Link to=".">Get a random joke</Link>
                        <p>Here are a few more jokes to check out:</p>
                        <ul>
                           {
                            data.jokeListItem.map(({id, name})=>(
                                <li key={id}>
                                    <Link to={id}>{name} </Link>
                                    <Link to={`/jokes/update`}><EditOutlined /></Link>
                                </li>
                            ))
                           }
                        </ul>
                        <Link to="new" className="button">
                            Add your own
                        </Link>
                    </div>
                    <div className="jokws-outlet">
                            <Outlet/>
                    </div>
                </div>
            </main>
        </div>
        </>
    )
}