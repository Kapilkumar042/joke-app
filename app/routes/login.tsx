import styles from "antd/dist/reset.css";
import { Space, DatePicker, Button } from "antd";
import { Form, Link, useSearchParams, useActionData } from "@remix-run/react";
// const style:React.CSSProperties={backgroundColor:"#1677ff"}

import styleUrl from "~/styles/login.css";
import {
  LinksFunction,
  ActionArgs,
  redirect,
  V2_MetaFunction,
} from "@remix-run/node";

import { db } from "~/utils/db.server";
import { badRequest } from "~/utils/request.server";
import { createUserSeccion, login, register } from "~/utils/session.server";
import { useState } from "react";

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styleUrl },
];

export const meta: V2_MetaFunction = () => {
  const description = "Login to submit your own jokes to Remix Jokes:";
  return [
    { name: "description", content: description },
    { name: "twitter:description", content: "description" },
    { title: "Remix Jokes | Login" },
  ];
};
//validationfunction
function validateUsername(username: string) {
  if (username.length < 3) {
    return "Usernames must be at least 3 characters long";
  }
}
// validate password
function validatePassword(password: string) {
  if (password.length < 6) {
    return "Passwords must be at least 6 characters Long";
  }
}

// validate url
function validateUrl(url: string) {
  const urls = ["/dashboardcontainerv1/newoverview", "/", "https://remix.run"];
  if (urls.includes(url)) {
    return url;
  }
  return "/dashboardcontainerv1/newoverview";
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  // const loginType = form.get("loginType");
  const password = form.get("password");
  const username = form.get("username");
  const redirectTo = validateUrl(
    (form.get("redirectTo") as string) || "/dashboardcontainerv1/newoverview"
  );
  if (
    // typeof loginType !== "string" ||
    typeof password !== "string" ||
    typeof username !== "string"
  ) {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly",
    });
  }

  const fields = { password, username };
  const fieldErrors = {
    password: validatePassword(password),
    username: validateUsername(username),
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    });
  }
  // switch (loginType) {
  // case "login": {
  const user = await login({ username, password });
  console.log({ user });
  if (!user) {
    return badRequest({
      fieldErrors: null,
      fields,
      formError: "Username/Password combination is incorrect",
    });
  }
  return createUserSeccion(user.id, redirectTo);
};

export default function Login() {
  const actionData = useActionData<typeof action>();
  const [SearchParams] = useSearchParams();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="bg-[#F9FAFB] h-screen">
        <div className="text-center">
          <h1 className="text-3xl pt-16 font-serif font-extrabold mb-2">
            Login in to your account
          </h1>
          <div className=" flex justify-center">
            <div className="mt-10 border-1 w-[33vw] rounded-xl shadow bg-[#FFFFFF]">
              <Form method="post" className="w-full">
                <input
                  type="hidden"
                  name="redirectTo"
                  value={SearchParams.get("redirectTo") ?? undefined}
                />
                <fieldset>
                  {/* <legend className="sr-only">Login Or Register</legend>
              <label>
                <input
                  type="radio"
                  name="loginType"
                  value="login"
                  defaultChecked={
                    !actionData?.fields?.loginType ||
                    actionData?.fields?.loginType === "login"
                  }
                />{" "}
                Login
              </label> */}
                  <label>
                    {/* <input
                  type="radio"
                  name="loginType"
                  value="register"
                  defaultChecked={actionData?.fields?.loginType === "register"}
                />{" "} */}
                    <div className="mt-6">
                      <Link to="/register">
                        Not a User?{" "}
                        <span className="text-[#4F46E5]">Register Here</span>
                      </Link>
                    </div>
                  </label>
                </fieldset>
                <div className="flex flex-col text-left px-12 py-6">
                  <label className="font-sans" htmlFor="username-input">
                    Username
                  </label>
                  <input
                  required
                    className="h-9 outline-gray-300 mt-2 px-3 py-1 border shadow border-gray-300 rounded-sm"
                    autoFocus
                    type="text"
                    name="username"
                    id="username-input"
                    defaultValue={actionData?.fields?.username}
                    aria-invalid={Boolean(actionData?.fieldErrors?.username)}
                    aria-errormessage={
                      actionData?.fieldErrors?.username
                        ? "username-error"
                        : undefined
                    }
                  />
                  {actionData?.fieldErrors?.username ? (
                    <p
                      className="form-validation-error"
                      role="alert"
                      id="username-error"
                    >
                      {actionData.fieldErrors.username}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col text-left px-12">
                  <label className="font-sans" htmlFor="password-input">
                    Password
                  </label>
                  <div className="h-9 flex items-center outline-gray-300 mt-2 px-3 py-1 border shadow border-gray-300 rounded-sm justify-between">
                    <input
                    required
                      className="w-full outline-none"
                      autoFocus
                      type={showPassword ? "text" : "password"}
                      id="password-input"
                      name="password"
                      defaultValue={actionData?.fields?.password}
                      aria-invalid={Boolean(actionData?.fieldErrors?.password)}
                      aria-errormessage={
                        actionData?.fieldErrors?.password
                          ? "password-error"
                          : undefined
                      }
                    />

                    <p onClick={toggleShowPassword} className="text-center cursor-pointer">
                      {showPassword ? (
                        <AiOutlineEye />
                      ) : (
                        <AiOutlineEyeInvisible />
                      )}
                    </p>
                  </div>

                  {actionData?.fieldErrors?.password ? (
                    <p
                      className="form-validation-error"
                      role="alert"
                      id="password-error"
                    >
                      {actionData.fieldErrors.password}
                    </p>
                  ) : null}
                </div>
                <div id="form-error-message">
                  {actionData?.formError ? (
                    <p className="form-validation-error" role="alert">
                      {actionData.formError}
                    </p>
                  ) : null}
                </div>
                <div className="text-right px-12 py-4 ">
                  <Link to="/forgetpassword" className="text-[#4F46E5]">
                    Forgot password?
                  </Link>
                </div>
                <div className="px-12">
                  <button
                    type="submit"
                    className="bg-[#4F46E5] mb-6 w-full py-2 rounded-md hover:bg-[#5850ee] text-white"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
          {/* <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jokes">Jokes</Link>
            </li>
          </ul>
        </div> */}
        </div>
      </div>
    </>
  );
}
