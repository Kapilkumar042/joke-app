import { LinksFunction, redirect } from "@remix-run/node";
import { Button, notification } from "antd";
import { useState } from 'react';
import stylesUrl from "~/styles/updateProduct.css"

import { useLocation } from 'react-router-dom';

export const links:LinksFunction=()=>[
  {rel:"stylesheet",href:stylesUrl}
]

export function headers() {
  return {
    'Content-Type': 'application/json',
  };
}

// export function action() {
//   return {
//     message: 'Data updated successfully!',

//   };
// }

export default function UpdateData() {

  let location = useLocation();
  const path = (location.pathname.split("/")[3]);
  console.log("path is url", path);
  
  const [title, setTitle] = useState('');
  const [price, setprice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform the update request
      const response = await fetch('https://api.escuelajs.co/api/v1/products/'+path, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title,price,description }),
      });

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        notification.success({
          message: 'Data Updated',
          description: 'The data has been successfully Updated.',
          duration: 2,
        });
        window.location.replace(`/product`)

        console.log("updated data");
      } else {
        notification.error({
          message: 'Data Not Updated',
          description: 'The data has been not Updated.',
          duration: 2,
        });
        console.log('Failed to update data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="update-product">
      <h3>Update Product Details</h3>
      {/* {message && <p>{message}</p>} */}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter your title" />
        </label>
        <br />
        <label>
          price:
          <input type="text" value={price} onChange={(e) => setprice(e.target.value)} placeholder="Enter your price"/>
        </label>
        <br />
        <label>
          description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter your description"/>
        </label>
        <br />
        <Button type="primary" htmlType="submit">Update</Button>
      </form>
    </div>
  );
}
