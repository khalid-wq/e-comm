"use client";
import Delete from "../icons/Delete";
import Edite from "../icons/Edite";
import Link from "next/link";

function Products({ id, categories, title, price }) {
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
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr key={id} className="border-b border-gray900 ">
              <td className="  py-3 "> {title}</td>
              <td className="  py-3 ">{price} $</td>
              {categories.map((cat, i) => (
                <td className="  py-3 " key={i}>
                  {cat}
                </td>
              ))}
              <td
                align="right"
                className="flex gap-2 items-center justify-end   py-3  "
              >
                <div className="flex gap-2 justify-center items-center ">
                  <Link href={`/admin/products/${id}`}>
                    <button>
                      <Edite />
                    </button>
                  </Link>
                  |
                  <button>
                    <Delete />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
