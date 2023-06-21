import stylesUrl from "~/styles/updateProfile.css"
import { ActionArgs, LinksFunction, LoaderArgs, json, redirect } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import { getUser, requireUserId, } from "~/utils/session.server";
import avatarImg from "~/assets/images/avatar.png"
import { db } from "~/utils/db.server";
export const links: LinksFunction=()=>[
    {rel:"stylesheet",href:stylesUrl}
]

export const loader = async({request}:LoaderArgs)=>{
    const user = await getUser(request);
    console.log("userinfo", user);
    const userId=await requireUserId(request);
    console.log("user ki id ye ha", userId);
    
    return json({user})
  }

  export const action= async ({params,request}:ActionArgs)=>{
    const form = await request.formData();
    const username=form.get("username");
    const email=form.get("email");
    const phone =form.get("phone");
    const passion=form.get("passion");
    if(
      typeof username !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof passion !== "string"
    ){
      throw new Error("Error user not update");
    }

      const fields = { username, email, passion,phone };
     const userId=await requireUserId(request);
     console.log("user ki id ye ha", userId);
    //  await updateUser(userkiid, {fields});

     const joke = await db.user.update({
    where: { id:userId} ,
    data: fields,
  });
     
     return redirect(`/jokes`);
     
  }
export default function updateProfile() {
    const data= useLoaderData<typeof loader>()
  return (
    <>
    <div className="links">
          <ul className="update-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jokes">Jokes</Link>
            </li>
          </ul>
        </div>
    <div className="updateProfile">
      <div className="picData">
        <img src={avatarImg} alt="" />
        <div className="update-profile-text">
        <label htmlFor="avatar-img">Update profile pic</label>
        <input  type="file" name="avatar" id="avatar-img" />
        </div>
      </div>
     <div className="update">
      <h2>Update Profile data</h2>
      <div className="update-info">
        <Form method="post">
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" value={data.user?.username}/>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" value={data.user?.email}/>
          <label htmlFor="passion">Passion:</label>
          <input type="text" name="passion" id="passion" value={data.user?.passion}/>
          <label htmlFor="phone">phone No:</label>
          <input type="text" name="phone" id="phone" value={data.user?.phone}/>
          <button type="submit" style={{marginTop:"20px"}} className="button">Update</button>
        </Form>
      </div>
      </div>
    </div>
    {/* <div className="jokes-outlet">
          <Outlet />
    </div> */}
    </>
  )
}
