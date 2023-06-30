import axios from 'axios'
import { LinksFunction, json } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import styleUrl from "~/styles/product.css"
import CatsComponents from "~/routes/product.allcats"

import { Badge, Button, Card, Image, List, Rate, Typography } from 'antd';
import { getAllProduct, getAllCategories } from '~/utils/fetchData';

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styleUrl },
];
const { Meta } = Card;

type Product={
    title:string;
    description:string;
    id:string;
    images:string[];
    price:string;
}
type Cats={
  name:string;
  image:string;
}
export const loader= async ()=>{
    // const response=await fetch("https://api.escuelajs.co/api/v1/products");
    const response=await getAllProduct();
    const datainfo:Product[]=await response.json()
    // console.log("data from api", response);
    // const res=await getAllCategories();
    // const catData:Cats[]=await response.json()
    // console.log("categories", res);
    return json({datainfo})
}



export default  function Home() { 
    const {datainfo}=useLoaderData<typeof loader>();
  return (
    <>
    {/* <CatsComponents /> */}
    <div className='ant-spin-container'>
      <List grid={{ gutter: 16, column: 4 }} itemLayout="horizontal">
        {datainfo.map((item) => (
          <>
          {/* title={<a href={item.href}>{item.title}</a>} */}
            <Badge.Ribbon text="New" color='pink' className='itemCardBadge'>
              <Card style={{ width: "300px" }} title={<Link to={`/product/${item.id}`}>{item.title}</Link>} key={item.id}
                cover={<Image alt='example' src={item.images[0]} />} actions={[
                  <Rate allowHalf disabled defaultValue={3.9} />,
                  <AddToCartButton />
                ]}>
                <Meta
                  title={<Typography.Paragraph>Price ${item.price}
                  </Typography.Paragraph>}
                  description={<Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: "more" }}>{item.description}</Typography.Paragraph>} />
              </Card>
            </Badge.Ribbon>
          </>
        ))}
      </List>
    </div>
    </>
  )
}

function AddToCartButton(){
  return <Button type='link'>Add to Cart</Button>
}