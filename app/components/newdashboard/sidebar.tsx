import { NavLink } from "@remix-run/react";

export default function Sidebar() {
  return (
    <div className="h-[94.3vh] bg-[#1E40AF] lg:mt-0 text-[16px] text-[#ffffff] z-50 lg:block">
      {/* <div className="pl-8 pt-3 flex gap-4 bg-[#1E40AF] items-center pb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <span className="text-2xl text-white">Vikasit.</span>
      </div> */}
      <div className="">
        <ul className="pt-0">
          <li className=" pl-8 pt-5  hover:text-[#bbbbbb] ">
            
            <NavLink className="flex gap-2"
             style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                backgroundColor: isActive ? "white" : "",
                padding: isActive ? "6px" : "",
                borderRadius: isActive? "5px 0 0 5px":""
              };
            }}
            to="/dashboardcontainerv1/newoverview">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
              Dashboard</NavLink>
          </li>
          <li className=" pl-8 pt-5  hover:text-[#bbbbbb]">
           
            <NavLink className="flex gap-2" to="/dashboardcontainerv1/analyticsv2"
             style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                backgroundColor: isActive ? "white" : "",
                padding: isActive ? "6px" : "",
                borderRadius: isActive? "5px 0 0 5px":""
              };
            }}
            >
               <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
              Analytics</NavLink>
          </li>
          <li className=" pl-8 pt-5 hover:text-[#bbbbbb] ">
            <NavLink className="flex gap-2" to="/dashboardcontainerv1/reportsectionv2"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                backgroundColor: isActive ? "white" : "",
                padding: isActive ? "6px" : "",
                borderRadius: isActive? "5px 0 0 5px":""
              };
            }}
            >
               <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
              Reports</NavLink>
          </li>
          <li className="pl-8 pt-5 hover:text-[#bbbbbb] ">
            
            <NavLink className="flex gap-2" to="/dashboardcontainerv1/notificationv2"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                backgroundColor: isActive ? "white" : "",
                padding: isActive ? "6px" : "",
                borderRadius: isActive? "5px 0 0 5px":""
              };
            }}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
              Notifications</NavLink>
          </li>
          <li className="pl-8 pt-5 hover:text-[#bbbbbb] ">
            
            <NavLink to="/dashboardcontainerv1/users" className="flex gap-2"
            style={({ isActive }) => {
              return {
                color: isActive ? "black" : "",
                backgroundColor: isActive ? "white" : "",
                padding: isActive ? "6px" : "",
                borderRadius: isActive? "5px 0 0 5px":""
              };
            }}
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
              Accounts</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
