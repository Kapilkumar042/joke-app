import { LoaderArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/session.server";
import {FaCamera} from "react-icons/fa"
import {CgLogOut} from 'react-icons/cg'
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

//loader

// export const loader = async ({ request }: LoaderArgs) => {
//   const user = await getUser(request);
//   console.log("userinfo profile", user);

//   return json({ user });
// };
export default function Profile(props: any) {
  // const data = useLoaderData<typeof loader>();

  return (
    <div className="border border-gray-400 px-4 py-2 bg-white w-[20vw]  z-50">
      {
        <>
          <div className=" flex flex-col justify-center items-center gap-4 overflow-hidden">
            <label
              className=" relative items-center text-center cursor-pointer w-[54px] h-[54px] text-4xl px-4 py-1 rounded-full text-white bg-slate-400 border-2"
              htmlFor="profile-pic"
            >
              {
                <p className="uppercase text-center items-center">
                  {props.myname.username.charAt(0)}
                </p>
              }
              <Badge variant="secondary" className="absolute text-[#1E40AF] text-xl top-4 left-8 items-center text-center"><FaCamera/> </Badge>
            </label>
            <input
              className="hidden"
              type="file"
              name="profilePic"
              id="profile-pic"
              capture="environment"
            />
            <div className="text-center">
              <p>{props.myname.username}</p>
              <p className="text-[#afadad]">{props.myname.email}</p>
            </div>
          </div>
          <div className="text-left mt-2 flex flex-col gap-2">
            <p >{props.myname.passion}</p>
            <p >{props.myname.phone}</p>
          </div>
          <div className=" text-white font-mono text-sm mt-4">
            <Form action="/logout" method="post">
              <Button variant="default" className="">
                <CgLogOut className="mx-1"/>Logout
              </Button>
            </Form>
          </div>
        </>
      }
    </div>
  );
}
