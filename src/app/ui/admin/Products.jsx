"use client";
import React, { useEffect, useState } from "react";
import Delete from "../icons/Delete";
import Edite from "../icons/Edite";
import Link from "next/link";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className=" text-white ">
      <div className="my-5 flex gap-5 items-center justify-between">
        <h1 className=" text-xl font-semibold">Products</h1>
        <Link href="/admin/products/add-product">
          <button className="bg-greenColor p-2  rounded-md">
            Add Products
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-2 ">
        <table className="table-auto">
          <thead>
            <tr align="left" className="border-b-2 border-gray900 ">
              <th className="p-2">Name</th>
              <th>Price</th>
              <th>Brand</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {" "}
            {products.map((p, i) => (
              <tr key={i} className="border-b border-gray900 ">
                <td className="  py-3 "> {p.title}</td>
                <td className="  py-3 ">{p.price} $</td>
                <td className="  py-3 ">{p.brand}</td>
                <td className="flex gap-2 items-center justify-center   py-3 ">
                  <Link href={`/admin/products/${p.id}`}>
                    <button>
                      <Edite />
                    </button>
                  </Link>
                  |
                  <button>
                    <Delete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
