import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { getAllCategories } from '~/utils/fetchData';

type Cats={
  name:string;
  image:string;
}
export const loader= async ()=>{
  // const response=await fetch("https://api.escuelajs.co/api/v1/categories");
  const response=await getAllCategories();
  const catData:Cats[]=await response.json()
  console.log("categories", response);
  return json({catData})
}
export default function allCats() {
  const {catData}=useLoaderData<typeof loader>();
  console.log("catdata",catData);
  
    return (
      <div>
        <h1>hello hi welcome</h1>
        {catData&&catData.map((item)=>(
          <><p>{item.name}</p><img src={item.image} alt="" /></>
        ))}
      </div>
    )
}
