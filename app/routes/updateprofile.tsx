import stylesUrl from "~/styles/updateProfile.css"
import { LinksFunction, LoaderArgs, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/session.server";

export const links: LinksFunction=()=>[
    {rel:"stylesheet",href:stylesUrl}
]

export const loader = async({request}:LoaderArgs)=>{
    const user = await getUser(request);
    // const userInfo= await getUserData();
    console.log("userinfo", user);
    
    return json({user})
  }
export default function updateProfile() {
    const data= useLoaderData<typeof loader>()
  return (
    <>
    
     <div className="update">
      <h2>Update Profile data</h2>
      <div className="info">
      <p>username: {data.user?.username}</p>
      <p>Id: {data.user?.id}</p>
      <p>Email:</p>
      <p>Passion:</p>
      <p>Phone No:</p>

      {/* <p>email: {data.user?.email}</p>
      <p>phone No: {data.user?.phone}</p>
      <p>Passion: {data.user?.passion}</p> */}
      </div>
      
    </div>
    {/* <div className="jokes-outlet">
          <Outlet />
    </div> */}
    <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jokes">Jokes</Link>
            </li>
          </ul>
        </div>
    </>
  )
}
