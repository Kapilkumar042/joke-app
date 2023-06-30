import { ActionArgs, LinksFunction, LoaderArgs, json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { Button, Card, Image, List, Rate, Typography, notification } from "antd";
import React, { useState } from "react";
import { getProductById } from "~/utils/fetchData";
import styleUrl from "~/styles/product.css"
import { HeartOutlined } from "@ant-design/icons";
import axios from "axios";

export const links: LinksFunction=()=>[
  { rel: "stylesheet", href: styleUrl },
]

type Product = {
  title: string;
  description: string;
  id: Number;
  images: string[];
  price: string;
};
const { Meta } = Card;
export const loader = async ({request,params}:LoaderArgs) => {
  const { productid } = params;
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productid}`);
  // const response=await getProductById();
  const datainfo: Product[] = await response.json();
  console.log("data from id", datainfo);
  // console.log("id",params);
  return json({ datainfo });

};

export const action = async ({ params,request }: ActionArgs) => {
  const form = await request.formData();
  const {productid}=params;
//  console.log("params",params);

if(form.get("intent")!=="delete"){
  try {
    // Send the DELETE request using Axios
    const response = await axios.delete(` https://api.escuelajs.co/api/v1/products/${productid}`);

    // Handle the response
    if (response.status === 200) {
      // Data successfully deleted
      // return json({ message: 'Data deleted successfully',redirect("") });
      return redirect("/product")
    } else {
      // Failed to delete data
      return json({ error: 'Failed to delete data' }, { status: response.status });
    }
  } catch (error) {
    console.error('Error:', error);
    return json({ error: 'An error occurred' }, { status: 500 });
  }
}
}

export default function ProductById() {
  const handleDelete = () => {
    // Perform the delete action here
  
    // Show the notification
    notification.success({
      message: 'Data Deleted',
      description: 'The data has been successfully deleted.',
      duration: 2,
    });
  };
  const { datainfo } = useLoaderData<typeof loader>();
  console.log("data by id", datainfo);
  const [visible, setVisible] = useState(false);
  const desc=["Rating"]
  return (
    <>
      <div style={{display:"flex"}}>
        <Card style={{width:"500px",height:"500px"}}
        cover={
        
        // <p>{datainfo.title}</p>
        <>
              <Image
                preview={{ visible: false }}
                style={{width:"500px",height:"500px", padding:"30px",alignItems:"center"}}
                src={datainfo.images[0]}
                onClick={() => setVisible(true)} /><div style={{ display: "none" }}>
                <Image.PreviewGroup
                  preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
                >
                  <Image src={datainfo.images[0]} />
                  <Image src={datainfo.images[1]} />
                  <Image src={datainfo.images[2]} />
                </Image.PreviewGroup>
              </div>
              </>
              }
        >
        </Card>
        <List>
          <List.Item>
            <Card style={{width:"500px"}} title={datainfo.title} 
            actions={[
              <Rate allowHalf disabled defaultValue={3.9} />,
              <AddToCartButton />
            ]}
            >
               <Meta title={<Typography.Paragraph>Price ${datainfo.price}
                  </Typography.Paragraph>}
                  description={<Typography.Paragraph>{datainfo.description}</Typography.Paragraph>} />
            </Card>
          </List.Item>
        </List>
      </div>
      <div style={{display:"flex"}}>
        <Link style={{marginLeft:"40px"}} to={`/product/update/${datainfo.id}`}><Button type="primary">Update product</Button></Link>
        <Link style={{marginLeft:"40px"}} to={`/product/new`}><Button type="primary">Create product</Button></Link>
        <Form method="post">
        <Button style={{marginLeft:"40px"}} onClick={handleDelete} name="intent" type="primary" htmlType="submit">delete product</Button>
        </Form>
       </div>
    </>
  );
}

function AddToCartButton(){
  return <Button type='link'>Add to Cart</Button>
}