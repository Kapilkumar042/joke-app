import styleUrl from "~/styles/login.css";
import { LinksFunction, ActionArgs, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styleUrl },
  ];

export default function register() {
  return (
    <div className="container">
        <div className="content" data-light="">
          <h1>Register</h1>
          <Form>
          <fieldset>
          <label>
          <Link to="/login" className="register-comp">Already have an account Login</Link>
            </label>
            </fieldset>
            <div>
             <label htmlFor="username-input">Username</label>
             <input type="text" name="username" id="username-input" />
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
