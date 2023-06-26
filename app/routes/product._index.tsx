import axios from 'axios'
import { LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Card, List, Typography } from 'antd';
const { Meta } = Card;

type Product={
    title:string;
    description:string;
    id:string;
    images:string;
    price:string;
}
export const loader= async (args:LoaderArgs)=>{
    const response=await fetch("https://api.escuelajs.co/api/v1/products");
    const datainfo:Product[]=await response.json()
    console.log("data from api", response);
    
    return json({datainfo})
}



export default  function Home() { 
    const {datainfo}=useLoaderData<typeof loader>();
  return (
    <div>
        <List grid={{ gutter: 16, column: 4 }} itemLayout="horizontal">
    {
        datainfo.map((item)=>(
         <>
           <Card style={{width:"300px"}} title={item.title} key={item.id}
           cover={<img alt='example' src={item.images[0]}/>}>
            <Meta
            title={<Typography.Paragraph>Price ${item.price}</Typography.Paragraph>}
            description={item.description}/>
           </Card>
         </>
        ))
    }
    </List>
    </div>
  )
}