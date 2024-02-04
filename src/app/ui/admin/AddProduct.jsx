"use client";
import prisma from "@/app/lib/prisma";
import Image from "next/image";
import React, { useState } from "react";

function AddProduct() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDiscreption] = useState("");

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
            name="peice"
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            onChange={(e) => setDiscreption(e.target.value)}
          />
        </div>
        <div className=" min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>
        <div className="w-[49%] flex flex-col  gap-5 justify-center items-stretch">
          <div className="w-[200px] h-[200px] relative self-center rounded-md overflow-hidden">
            <Image fill src={image} alt={title}></Image>
          </div>

          <span>
            <strong>Title: </strong> {title}
          </span>
          <span>
            <strong>Price: </strong>
            {price} $
          </span>
          <span>
            <strong>description:</strong>
            <br />
            {description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
