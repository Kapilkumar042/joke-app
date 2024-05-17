import { FaDollarSign } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FiCreditCard } from 'react-icons/fi';
import { CiWavePulse1 }  from "react-icons/ci"
export const revenueData=[
    {
        name:"Total Revenue",
        value:"$45,231.89",
        svgIcon:FaDollarSign,
        compare:"+20.1% from last month"
    },
    {
        name:"Subscriptions",
        value:"+2350",
        svgIcon:FaUser,
        compare:"+180.1% from last month"
    },
    {
        name:"Sales",
        value:"+12,234",
        svgIcon:FiCreditCard,
        compare:"+19% from last month"
    },
    {
           name:"Active Now",
            value:"+573",
            svgIcon:CiWavePulse1,
            compare:"+201 since last hour",
    }
]