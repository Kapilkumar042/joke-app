import { LinksFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";
import React, { useState } from "react";
import { Pagination } from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
// import {data} from "~/components/analyticsData"
import { data } from "~/components/newdashboard/analyticsV2Data";
export default function AnalyticsRoute(props: any) {
  const [currentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== npage) {
      setcurrentPage(currentPage + 1);
    }
  };

  const changeCurrPage = (id: any) => {
    setcurrentPage(id);
  };

  return (
    <div className=" lg:block
     lg:ml-3 md:ml-0
     xs:ml-1 mr-1 bg-white ml-1
     sm:ml-3">
      <div className="mt-6 border-2 shadow  sm:ml-0 lg:ml-2 md:w-[700px] sm:w-full lg:w-auto xs:w-[365px]">
        <h3 className="p-4  py-4 text-[20px]">Analytics</h3>
        <div className=" h-[375px] flex flex-col justify-between">
          {/* h-[400px] sm:h-[480px] */}
          <table className="w-full table-auto ">
            <thead className="border-l-2 border-r-2 shadow">
              <tr className="bg-gray-600 lg:text-[18px] text-white ">
                <th
                  scope="col"
                  className="py-4 xs:py-2 text-center  lg:text-[18px] font-medium xs:hidden"
                ></th>
                <th
                  scope="col"
                  className="md:text-[18px]  py-4 xs:py-2 text-left font-medium text-[14px] sm:text-[18px] xs:text-[16px] lg:text-[16px]"
                >
                  CLIENT
                </th>
                <th
                  scope="col"
                  className="md:text-[18px] py-4 xs:py-2 text-center font-medium text-[14px] sm:text-[18px] lg:text-[16px] xs:text-[16px]"
                >
                  AMOUNT
                </th>
                <th
                  scope="col"
                  className="md:text-[18px] py-4 xs:py-2 text-center font-medium text-[14px] sm:text-[18px] lg:text-[16px] xs:text-[16px]"
                >
                  STATUS
                </th>
                <th
                  scope="col"
                  className="md:text-[18px] py-4 xs:py-2 text-center font-medium text-[14px]  sm:text-[18px]  lg:text-[16px] xs:text-[16px]"
                >
                  DATE
                </th>
              </tr>
            </thead>
            <tbody className="[&>*:nth-child(even)]:border-y-2 [&>*:nth-child(even)]:bg-[#F2F2F2]">
              {records.map((item: any) => (
                // <tr
                //   className="hover:bg-gray-300 sm:text-sm lg:text-[14px]"
                //   key={item.id}
                // >
                //   <td className="sm:px-4  sm:py-4 md:px- lg:py-4">
                //     <div className="flex items-center gap-8">
                //       <img
                //         className="h-[32px] w-[32px] rounded-full object-cover"
                //         src={item.avtar}
                //         alt="img"
                //       />
                //       <p>{item.name}</p>
                //     </div>
                //   </td>
                //   <td className="sm:px-4  sm:py-4 md:px-8 lg:py-4">
                //     {item.totalsale}
                //   </td>
                //   <td>
                //     <p
                //       className={
                //         item.status === "Approved"
                //           ? "rounded-full bg-[#DCFCE7] py-1 text-center text-[#15803D]"
                //           : item.status === "Denied"
                //           ? "rounded-full bg-[#FEE2E2] py-1 text-center text-red-500"
                //           : item.status === "Pending"
                //           ? "rounded-full bg-[#FEF9C3] py-1 text-center text-[#A1620D]"
                //           : " text-center"
                //       }
                //     >
                //       {item.status}
                //     </p>
                //   </td>
                //   <td className="sm:px-4 sm:py-4 md:px-8 lg:py-4">
                //     {item.date}
                //   </td>
                // </tr>

                <tr className=" border-b" key={item.id}>
                  <td className=" whitespace-nowrap px-2 xs:hidden py-4 text-sm font-medium text-gray-900">
                    <img
                      className="h-[32px] w-[32px] rounded-full object-cover "
                      src={item.avtar}
                      alt="img"
                    />
                  </td>
                  <td className="md:text-[16px] whitespace-nowrap py-4 text-left text-[12px] font-medium text-gray-900 sm:text-[16px] lg:text-[16px]">
                    {item.name}
                  </td>
                  <td className="md:text-[16px] whitespace-nowrap py-4 text-center text-[12px] font-light  text-gray-900 sm:text-[16px] lg:text-[16px]">
                    {item.totalsale}
                  </td>
                  <td className="md:text-[16px] whitespace-nowrap py-4 font-light text-[12px] text-gray-900  sm:text-[16px] lg:text-[16px]">
                    <p
                      className={
                        item.status === "Approved"
                          ? "rounded-full bg-[#DCFCE7] py-1 text-center text-[#15803D]"
                          : item.status === "Denied"
                          ? "rounded-full bg-[#FEE2E2] py-1 text-center text-red-500"
                          : item.status === "Pending"
                          ? "rounded-full bg-[#FEF9C3] py-1 text-center text-[#A1620D]"
                          : " text-center"
                      }
                    >
                      {item.status}
                    </p>
                  </td>
                  <td className="md:text-[16px] whitespace-nowrap py-4 text-center text-[12px] font-light  text-gray-900 sm:text-[16px]  lg:text-[16px]">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="justify-center sticky flex gap-2 py-2 ">
            <a
              className="flex h-10 w-10 items-center cursor-pointer justify-center rounded-full border border-blue-300 
        text-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={prePage}
            >
              &lt;&lt;
            </a>
            {numbers.map((n: any, i: any) => (
              <a
                key={i}
                className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-blue-300 
                    text-blue-500 hover:bg-blue-500 hover:text-white ${n === currentPage ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => changeCurrPage(n)}
              >
                {n}
              </a>
            ))}
                {/* <Pagination total={30} onClick={() => changeCurrPage(30)}/> */}
            <a
              className="flex h-10 w-10 items-center cursor-pointer justify-center rounded-full border border-blue-300 
             text-blue-500 hover:bg-blue-500 hover:text-white"
              onClick={nextPage}
            >
              &gt;&gt;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
