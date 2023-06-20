import styleUrl from "~/styles/login.css";
import { LinksFunction, ActionArgs, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styleUrl },
  ];

export default function forgetpassword() {
  return (
    <div className="container">
        <div className="content" data-light="">
          <h1>Forget Password</h1>
          <Form>
          <fieldset>
          <label>
          <Link to="/login" className="register-comp">Login</Link>
            </label>
            </fieldset>
           <div>
             <label htmlFor="email-input">Email</label>
             <input type="email" name="email" id="email-input" />
           </div>
           <div>
             <label htmlFor="password-forget">Password</label>
             <input type="password" name="password" id="password-forget" />
           </div>
           <div>
             <label htmlFor="retype-password">re-Type Password</label>
             <input type="password" name="retypepassword" id="retype-password" />
           </div>
           
           <button type="submit" className="button">
              forget
            </button>
          </Form>
          </div>
          </div>
  )
}
