import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import React from 'react'
import { getProductById } from '~/utils/fetchData';


type Product={
    title:string;
    description:string;
    id:string;
    images:string[];
    price:string;
}
export const loader= async ()=>{
    // const response=await fetch("https://api.escuelajs.co/api/v1/products");
    const response=await getProductById();
    const datainfo:Product[]=await response.json()
    console.log("data from id", datainfo);
    // const res=await getAllCategories();
    // const catData:Cats[]=await response.json()
    // console.log("categories", res);
    return json({datainfo})
}
export default function ProductById() {
    const {datainfo}=useLoaderData<typeof loader>();
  return (
    <><div>ProductById</div>
    <p>{datainfo&&datainfo.map((item)=>(
        <p>{item.title}</p>
    ))}</p>
    </>
  )
}
