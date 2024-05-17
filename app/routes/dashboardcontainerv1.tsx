import { Outlet, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { revenueData } from "~/components/newdashboard/cardData";
import CardRoute from "~/components/newdashboard/cardroute";
// import Header from "~/components/newdashboard/header";
// import Header from "~/components/newdashboard/header";
// import Profile from "~/components/newdashboard/profile";
import RecentSales from "~/components/newdashboard/recentsales";
import Sidebar from "~/components/newdashboard/sidebar";
import Headerv2 from "~/components/newdashboard/headerv2"
import { data } from "~/components/newdashboard/recentsaledata";
// import NewOverview from "~/components/newdashboard/newoverview";
// import { data } from "~/components/newdashboard/recentsaledata";

import { LoaderArgs, json } from "@remix-run/node";
import { getUser } from "~/utils/session.server";
import { Button } from "~/components/ui/button";
import {Calendar} from "~/components/ui/calendar"
// loader

export const loader = async ({request}:LoaderArgs)=>{
  const user= await getUser(request);
  console.log("user",user);
  return json({user})
}

export default function DashboradContainerv1() {
  const [date, setDate] =useState<Date | undefined>(new Date())
  const userData=useLoaderData<typeof loader>();  
  return (
    <div>
      {/* <div className="flex">
        <div className="sm:w-9 lg:w-[14%]">
          <Sidebar />
        </div>
        <div className="flex-1 bg-[#faf8f8]">
          <Header /> */}
      {/* <Profile/> */}
      {/* <Chart/> */}
      {/* <CardRoute data={revenueData} />
          <div className="sm:grid-cols-1 lg:grid lg:grid-cols-2"> */}
      {/* <NewOverview data={data}/> */}
      {/* <Outlet />
            <RecentSales data={sales} />
          </div>
        </div>
      </div> */}

      <div className="">
        <Headerv2 />
        <div className="flex">
          <div className="sm:hidden md:hidden xs:hidden lg:mt-10 lg:block lg:w-[14%] hidden">
            <Sidebar />
          </div>
          <div className="">
            {/* <p>{userData.user?.username}kgljkdf</p> */}
            <CardRoute data={revenueData}/>
            <div className="sm:grid-cols-1 lg:grid lg:grid-cols-2 md:flex md:flex-col md:justify-center md:items-center">
              <Outlet />
              <RecentSales data={data} />
              {/* <NewOverview data={data}/> */}
            </div>
            {/* <Button variant="destructive">Click me</Button>
              <Calendar  mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border w-[18vw]"></Calendar> */}
          </div>
        </div>
      </div>
    </div>
  );
}
