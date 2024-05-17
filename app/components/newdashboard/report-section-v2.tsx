import React from 'react'

export default function ReportSectionRoute(props:any) {
  return (
    <div className="lg:block
     bg-white mr-1 ml-1
      md:ml-0 md:mr-0 
      xs:ml-1 xs:mr-1 
      sm:flex sm:justify-center sm:items-center sm:ml-3">
    <div className='lg:ml-2 sm:ml-0 mt-6  border-2 shadow md:w-[705px] xs:w-[365px] sm:w-full lg:w-auto'>
      <h3 className='p-4 sm:p-2 text-[20px]'>Report</h3>
      <div className="hover:overflow-y-auto h-[389px] overflow-hidden">
      <table className="table-auto w-full  ">
  <thead>
    <tr className='text-[16px] sm:text-[14px] bg-gray-600 text-white uppercase'>
      <th className='md:text-[18px] lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] text-[14px] text-left px-2 sm:text-[18px] py-4'>NAME</th>
      <th className='md:text-[18px] lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] text-[14px] sm:text-[18px]'>quantity</th>
      <th className='md:text-[18px] lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] text-[14px] sm:text-[18px]'>totalsale</th>
      <th className='md:text-[18px] lg:pr-10 sm:text-sm md:pr-14 sm:pr-4 lg:text-[16px] text-[14px] sm:text-[18px]'>profite</th>
    </tr>
  </thead>
  <tbody className='[&>*:nth-child(even)]:border-2 [&>*:nth-child(even)]:bg-[#F2F2F2]'>
      {props.data.map((item:any)=>(
      <tr className='hover:bg-gray-300 sm:text-sm lg:text-[14px]' key={item.id}>
        <td className='sm:text-[16px] md:text-[16px] lg:text-[16px] xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 text-[12px] px-2 md:py-4 py-4'>{item.name}</td>
        <td className='sm:text-[16px] md:text-[16px] lg:text-[16px] xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 text-[12px] text-center md:py-4 py-4'>{item.quantity}</td>
        <td className='sm:text-[16px] md:text-[16px] lg:text-[16px] xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 text-[12px] text-center md:py-4 py-4'>{item.totalsale}</td>
        <td className='sm:text-[16px] md:text-[16px] lg:text-[16px] xs:py-4 lg:py-4 lg:px-8 sm:py-4 sm:px-4 md:px-8 text-[12px] text-center md:py-4 py-4'>{item.profite}</td>
      </tr>
      ))}
  </tbody>
  </table>
  </div>
    </div>
    </div>
  )
}
