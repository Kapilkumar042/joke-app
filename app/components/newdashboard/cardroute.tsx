export default function CardRoute(props: any) {
    return (
      // sm:flex sm:justify-center sm:items-center
      <div className="
      lg:block lg:ml-2
      xs:ml-0 xs:flex xs:flex-col xs:justify-center xs:items-center xs:mt-12
      sm:ml-0 sm:mt-12 
      md:mt-12
      grid grid-cols-1 place-items-center ml-1 mr-1 mt-12">
      <div className="
      lg:grid lg:grid-cols-4 lg:gap-3 lg:pl-2
      sm:mr-1 sm:ml-4 sm:grid sm:grid-cols-2 sm:gap-8 sm:place-items-center
      md:flex  md:flex-wrap md:gap-6 md:justify-center md:items-center
      bg-[#fff]">
        {props.data.map((item:any) => (
          <>
            <div className="mt-5 lg:w-[300px] sm:w-[45vw] xs:w-[340px] md:w-[343px] w-[97vw] border-2 p-6 shadow-sm">
              <h3>{item.name}</h3>
              <span>{item.svgIcon}</span>
              <div className="mt-1">
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-sm text-[#1C4E80]">{item.compare}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      </div>
    );
  }
  