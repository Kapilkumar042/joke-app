import styleUrl from "~/styles/login.css";
import { LinksFunction, ActionArgs, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { badRequest } from "~/utils/request.server";
import { db } from "~/utils/db.server";
import { createUserSeccion, register } from "~/utils/session.server";
import Imgbg from "public/regbg.jpg"
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styleUrl },
  ];

  // validate url
function validateUrl(url: string) {
  const urls = ["/dashboardcontainerv1/newoverview", "/", "https://remix.run"];
  if (urls.includes(url)) {
    return url;
  }
  return "/dashboardcontainerv1/newoverview";
}
  //action function
  export const action = async({request}:ActionArgs)=>{
    const form = await request.formData();
    const username=form.get("username");
    const email=form.get("email");
    const password=form.get("password");
    const phone =form.get("phone");
    const passion=form.get("passion");
    const redirectTo = validateUrl(
      (form.get("redirectTo") as string) || "/dashboardcontainerv1/newoverview"
    );

    if(
      typeof username !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof phone !== "string" ||
      typeof passion !== "string"
    ){
      throw new Error("Error user not register");
    }

    const fields={username, email, password, phone, passion};
    const userExists=await db.user.findFirst({
      where:{username},
    });
    if(userExists){
      return "user already exists"
    }

    // create user
    const user = await register({ username, password,email,phone,passion });
     console.log("userinformation",user);
     
    if(!user){
      return "user not created please try agian"
     }
     return createUserSeccion(user.id, redirectTo);
    //  return redirect ("/login")
  }
export default function Register() {
  const actionData=useActionData<typeof action>();
  return (
    <div className="h-screen flex justify-center">
      <div className="">
        <img src={Imgbg} className="w-[50vw]" alt="" />
      </div>
        <div className="text-center" data-light="">
          {/* <h1 className="text-2xl pt-10 font-serif font-extrabold mb-2">Register as new </h1> */}
          <div className=" flex justify-center">
            <div className="mt-10 border-1 w-[33vw] rounded-xl shadow bg-[#FFFFFF]">
          <Form method="post" className="w-full">
          <fieldset>
          <label>
            <div className="pt-4 text-[#4F46E5]">
           <Link to="/login">Already have an account Login</Link>
            </div>
            </label>
            </fieldset>
            <div className="flex flex-col text-left px-12 py-6">
             <label className="font-sans" htmlFor="username-input">Username</label>
             <input type="text" name="username" 
             required
             className="h-9 outline-gray-300 mt-2 px-3 py-1 border shadow border-gray-300 rounded-sm"
             autoFocus
             id="username-input" 
             />
           </div>
           <div className="flex flex-col text-left px-12">
             <label htmlFor="email-input">Email</label>
             <input type="email" name="email" 
             required
             className="h-9 outline-gray-300 mt-2 px-3 py-1 border shadow border-gray-300 rounded-sm"
             autoFocus
             id="email-input" />
           </div>
           <div className="flex flex-col text-left px-12 pt-6">
             <label className="font-sans" htmlFor="password-input">Password</label>
             <input type="password" name="password" 
             required
             className="h-9 outline-gray-300 mt-2 px-3 py-1 border shadow border-gray-300 rounded-sm"
             autoFocus
             id="password-input" />
           </div>
           <div className="flex flex-col text-left px-12 pt-6">
             <label className="font-sans" htmlFor="phone-input">Phone No</label>
             <input type="number" name="phone" 
             required
             className="h-9 outline-gray-300 mt-2 px-3 py-1 border shadow border-gray-300 rounded-sm"
             autoFocus
             id="phone-input" />
           </div>
           <div className="flex flex-col text-left px-12 pt-6">
             <label className="font-sans" htmlFor="passion-input">Passion</label>
             <input type="text" name="passion" 
             required
             className="h-9 outline-gray-300 mt-2 px-3 py-1 border shadow border-gray-300 rounded-sm"
             autoFocus
             id="passion-input" />
           </div>
           <div className="px-12 pt-8">
                  <button
                    type="submit"
                    className="bg-[#007CFF] mb-6 w-full py-2 rounded-md hover:bg-[#2d88eb] text-white"
                  >
                    Submit
                  </button>
                </div>
          </Form>
          </div>
          </div>
          </div>
          </div>
  )
}
