import styleUrl from "~/styles/login.css";
import { LinksFunction, ActionArgs, redirect, ActionFunction } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { requireUserId } from "~/utils/session.server";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styleUrl },
  ];

  export const action = async ({ request }:ActionArgs) => {
    const form = await request.formData();
    const email = form.get("email");
    const passwordHash = form.get("passwordHash");
    // const confirmPassword=form.get("confirmpassword")
    // Check if the email exists in the database
    const user = await db.user.findUnique({
      where: { email },
    });
    console.log("forgot user",user);
    
  
    if (!user) {
      // Email does not exist, redirect back to the forgot password page
      return ("/forgot-password?error=email-not-found");
    }
    
  const fields={passwordHash}
  const userId=await requireUserId(request);
    // Update the user record in the database with the new password
    const usernew=await db.user.update({
      where: {
        email
      },
      data:{passwordHash} ,
    });
    console.log("usernew", usernew);
    
    return redirect("/login")
  }
export default function forgetpassword() {
  return (
    <div className="container">
        <div className="content" data-light="">
          <h3>Forgot Password</h3>
          <Form method="post">
           <div>
             <label htmlFor="email">Email</label>
             <input type="email" name="email" id="email" />
           </div>
           <div>
             <label htmlFor="password">Password</label>
             <input type="password" name="passwordHash" id="password" />
           </div>
           {/* <div>
             <label htmlFor="confirm-password">Confirm password</label>
             <input type="password" name="confirmpassword" id="confirm-password" />
           </div> */}
           <fieldset>
          <label>
          <Link to="/login" className="register-comp">Do you want to login</Link>
            </label>
            </fieldset>
           <button type="submit" className="button">
              Submit
            </button>
          </Form>
          </div>
          </div>
  )
}
