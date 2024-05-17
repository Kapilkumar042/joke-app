import { Link, useLoaderData } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import ProImg from "public/pic.jpg"
import ProfileIndex from "~/components/newdashboard/profile";
import Sidebar from "./sidebar";
import {RxCross2} from "react-icons/rx"
import {FiMenu} from "react-icons/fi";
import { LoaderArgs, json } from "@remix-run/node";
import { getUser } from "~/utils/session.server";

// loader

export const loader = async ({request}:LoaderArgs)=>{
  const user= await getUser(request);
  console.log("user",user);
  return json({user})
}

export default function Header() {
  const data=useLoaderData<typeof loader>();        

  const [openProfile, setOpenProfile] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef=useRef();
  
  useEffect(()=>{
    const outSideHandler=(e:any)=>{
      if (!sidebarRef?.current.contains(e.target)){
        setOpenSidebar(false)
        setOpenProfile(false)
        console.log(sidebarRef.current);
      }
    }
    document.addEventListener("mousedown", outSideHandler)
    return()=>{
      document.removeEventListener("mousedown", outSideHandler);
    }
  })

  const handleMenuClick = () => {
    setOpenProfile(!openProfile);
};

const handleSidebar=()=>{
  setOpenSidebar(!openSidebar)
}

  return (
    //pl-8 pt-3 flex gap-4 bg-[#1E40AF] items-center pb-2
    <div>
      <div className="
      flex justify-between bg-[#1E40AF] py-2  z-50 fixed w-full
      sm:top-0 sm:fixed sm:w-full
      xs:w-[384px] xs:fixed 
      md:fixed md:w-full">
      <div className="flex gap-4 text-white items-center md:pl-5 pl-2 lg:pl-10 sm:pl-3 xs:pl-2">
        {
          openSidebar ? (
            <RxCross2 onClick={handleSidebar} className="text-white h-6 w-6 relative lg:hidden"/>
          )
          :(
            <FiMenu className="h-6 w-6 relative lg:hidden"
            onClick={handleSidebar}/>
          )
        }
        {
          openSidebar&&
          <div ref={sidebarRef} className="absolute top-[50px] sm:w-[46%] md:w-[30%] left-0">
            <Sidebar/>
          </div>
        }
        <span className="lg:text-2xl lg:text-white lg:block sm:block sm:text-2xl hidden md:block md:text-2xl xs:hidden  lg:pl-6">Vikasit.</span>
      </div>
        <div className="flex items-center ">
          <input
            className="w-[40vw] h-8 sm:w-[40vw] xs:w-[100px] lg:w-[350px] md:w-[300px] rounded-l-xl px-4 py-2 outline-none items-center"
            type="text"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-8 rounded-r-lg pr-2 w-6  bg-white text-[#a7a5a5]
            "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          
        </div>
        <div className="pr-2 lg:pr-10 md:pr-5 sm:pr-4 xs:pr-6">
          <img
          onClick={handleMenuClick}
            className=" relative w-[35px] rounded-full object-cover cursor-pointer"
            src={ProImg}
            alt="profile Image"
          />
          {
            openProfile&&
              <div ref={sidebarRef} className=" mt-2 right-5 absolute z-50">
                <ProfileIndex  myname={data.user}/>
              </div>
                
            
          }
          
        </div>
      </div>
    </div>
  );
}
