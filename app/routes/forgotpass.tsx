import { Form, Link } from "@remix-run/react";
import styleUrl from "~/styles/login.css";
import { ActionArgs, LinksFunction, redirect  } from "@remix-run/node";
import { resetPassword,sendResetEmail } from "~/utils/sendMail";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styleUrl },
  ];

  export const action = async ({request}:ActionArgs)=>{
    const form = await request.formData();
    const email=form.get("email");
    await sendResetEmail(email);
    return redirect("/varificationcode")
  }
export default function forgotpass() {
  return (
    <div className="container">
        <div className="content" data-light="">
          <h3>Forgot Password</h3>
          <Form method="post">
           <div>
             <label htmlFor="email">Email</label>
             <input type="email" name="email" id="email" />
           </div>
           <fieldset>
          <label>
          <Link to="/login" className="register-comp">Have an account? login</Link>
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
