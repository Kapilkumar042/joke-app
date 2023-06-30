import { LinksFunction, redirect } from "@remix-run/node";
import { Button, notification } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import stylesUrl from "~/styles/updateProduct.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];
export default function CreateProduct() {
  let location = useLocation();
  const path = location.pathname.split("/")[3];
  console.log("path is url", path);
  const [title, setTitle] = useState("");
  const [price, setprice] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (event:any) => {
    const imageUrl = event.target.value;
    setImages((prevImages) => [...prevImages, imageUrl]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Perform the update request
      const formData = new FormData();
      formData.append("title", title);
      formData.append("price", price);
      formData.append("description", description);
      formData.append("categoryId", categoryId);
      images.forEach((image, index) => {
        formData.append(`image${index}`, image);
      });
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            price,
            description,
            categoryId,
            images,
          }),
        }
      );

      // Check if the request was successful
      if (response.ok) {
        const data = await response.json();
        notification.success({
          message: "Data Created",
          description: "The data has been successfully Created.",
          duration: 2,
        });
        window.location.replace("/product")
        console.log("updated data");
      } else {
        notification.error({
          message: "Data Not Updated",
          description: "The data has been not Created.",
          duration: 2,
        });
        console.log("Failed to update data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="update-product">
      <h3>Add a new product</h3>
      {/* {message && <p>{message}</p>} */}
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter your title"
          />
        </label>
        <br />
        <label>
          price:
          <input
            type="text"
            value={price}
            onChange={(e) => setprice(e.target.value)}
            placeholder="Enter your price"
          />
        </label>
        <br />
        <label>
          description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your description"
          />
        </label>
        <br />
        <label>
          categoryId:
          <input
            type="text"
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            placeholder="Enter your categoryId"
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            value={images}
            onChange={handleImageChange}
            placeholder="Enter your image URL"
          />
        </label>
        <br />
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
