import type { LinksFunction } from "@remix-run/node"
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/index.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];
export default function IndexRoute(){
  return(
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>Jokes</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">Read Jokes</Link>
            </li>
            <li>
              <Link to="product">View our store</Link>
            </li>
            <li>
              <Link to="counterroute">go on react</Link>
            </li>
            <li>
              <Link to="/jokes.rss">rss</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}