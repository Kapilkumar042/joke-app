import styleUrl from "~/styles/login.css";
import { LinksFunction, ActionArgs, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { badRequest } from "~/utils/request.server";
import { db } from "~/utils/db.server";
import { createUserSeccion, register } from "~/utils/session.server";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styleUrl },
  ];

  // validate url
function validateUrl(url: string) {
  const urls = ["/jokes", "/", "https://remix.run"];
  if (urls.includes(url)) {
    return url;
  }
  return "/jokes";
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
      (form.get("redirectTo") as string) || "/jokes"
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
    <div className="container">
        <div className="content" data-light="">
          <h1>Register</h1>
          <Form method="post">
          <fieldset>
          <label>
          <Link to="/login" className="register-comp">Already have an account Login</Link>
            </label>
            </fieldset>
            <div>
             <label htmlFor="username-input">Username</label>
             <input type="text" name="username" id="username-input" 
             />
           </div>
           <div>
             <label htmlFor="email-input">Email</label>
             <input type="email" name="email" id="email-input" />
           </div>
           <div>
             <label htmlFor="password-input">Password</label>
             <input type="password" name="password" id="password-input" />
           </div>
           <div>
             <label htmlFor="phone-input">Phone No</label>
             <input type="number" name="phone" id="phone-input" />
           </div>
           <div>
             <label htmlFor="passion-input">Passion</label>
             <input type="text" name="passion" id="passion-input" />
           </div>
           <button type="submit" className="button">
              Register
            </button>
          </Form>
          </div>
          </div>
  )
}
