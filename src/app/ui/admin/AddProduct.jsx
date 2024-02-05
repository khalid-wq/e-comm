"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function AddProduct() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDiscreption] = useState("");
  const [categories, setCategories] = useState([]);
  const [cat, setCat] = useState("");
  console.log(cat);
  useEffect(() => {
    const fetchedCategories = async () => {
      try {
        const data = await fetch("/api/categories");
        const res = await data.json();
        setCategories(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedCategories();
  }, []);

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/products", {
        body: JSON.stringify({
          title: title,
          image: image,
          price: price,
          content: description,
          categories: cat,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Product Submitted", res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-white">
      <div className="my-5 flex gap-5 items-center justify-between">
        <h1 className="font-semibold text-xl ">Add New Product</h1>
      </div>
      <div className="flex justify-between items-center ">
        <div className="flex flex-col w-[49%] ">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          <label htmlFor="category">Category</label>

          <select
            name="category"
            className="border-none bg-gray900 p-2 rounded-md text-white outline-none"
            value={cat.id} // Set the value
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title}
              </option>
            ))}
          </select>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            onChange={(e) => setDiscreption(e.target.value)}
          />
        </div>
        <div className=" min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
        <div className="w-[49%] flex flex-col  gap-5 justify-center items-stretch">
          <div className="w-[200px] h-[200px] relative self-center rounded-md overflow-hidden">
            <Image fill={true} src={image} alt={title}></Image>
          </div>

          <span>
            <strong className="text-gray-500">Title: </strong> {title}
          </span>
          <span>
            <strong className="text-gray-500">Price: </strong>
            {price} $
          </span>
          {/* <span>
            <strong className="text-gray-500">Category: </strong>
            {cat}
          </span> */}
          <span>
            <strong className="text-gray-500">description:</strong>
            <br />
            {description}
          </span>
        </div>
      </div>
      <button onClick={handleSubmit} className="bg-greenColor p-2 rounded-md">
        Submit
      </button>
    </div>
  );
}

export default AddProduct;
