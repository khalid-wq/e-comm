import React from "react";
import Delete from "../icons/Delete";

function Orders() {
  const ordersT = [
    {
      id: 1,
      user: "jhone",
      order: "apple watch",
      quantity: 2,
      price: 549,
      status: true,
    },
    {
      id: 2,
      user: "jhone",
      order: "apple watch",
      quantity: 2,
      price: 549,
      status: true,
    },
    {
      id: 3,
      user: "jhone",
      order: "apple watch",
      quantity: 2,
      price: 549,
      status: true,
    },
  ];

  return (
    <div className="text-white ">
      <div className="my-5 flex gap-5 items-center justify-between">
        <h1 className="text-xl font-semibold">Orders</h1>
      </div>
      <div className="flex flex-col gap-2 ">
        <table className="table-auto">
          <thead>
            <tr align="left" className="border-b-2 border-gray900 ">
              <th className="py-2">Client</th>
              <th className="py-2">Order</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Price</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersT.map((p, i) => (
              <tr key={i} className="border-b border-gray900 ">
                <td className="  py-3 "> {p.user}</td>
                <td className="  py-3 ">{p.order} $</td>
                <td className="  py-3 ">{p.quantity}</td>
                <td>{p.price}</td>
                <td>{p.status == true ? "Payed" : "Not payed"}</td>
                <td className="flex gap-2 items-center justify-center   py-3 ">
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

export default Orders;
