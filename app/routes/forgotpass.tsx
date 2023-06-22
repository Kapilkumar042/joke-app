import { Form, Link } from "@remix-run/react";
import styleUrl from "~/styles/login.css";
import { LinksFunction  } from "@remix-run/node";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styleUrl },
  ];
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
           {/* <div>
             <label htmlFor="password">Password</label>
             <input type="password" name="passwordHash" id="password" />
           </div> */}
           {/* <div>
             <label htmlFor="confirm-password">Confirm password</label>
             <input type="password" name="confirmpassword" id="confirm-password" />
           </div> */}
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
