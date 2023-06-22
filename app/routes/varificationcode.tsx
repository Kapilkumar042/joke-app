import { Form, Link } from "@remix-run/react";
import styleUrl from "~/styles/login.css";
import { LinksFunction  } from "@remix-run/node";
export const links: LinksFunction = () => [
    { rel: "stylesheet", href: styleUrl },
  ];
export default function varification() {
  return (
    <div className="container">
        <div className="content" data-light="">
          <h3>Enter your code</h3>
          <Form method="post">
           <div>
             <label htmlFor="code">Verification code</label>
             <input type="number" name="code" id="code" placeholder="XXXX" />
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
              Verify
            </button>
          </Form>
          </div>
          </div>
  )
}
