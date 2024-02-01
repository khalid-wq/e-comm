import React from "react";
import Dash from "../icons/Dash";
import Product from "../icons/Product";
import Order from "../icons/Order";
import User from "../icons/User";
import Payment from "../icons/Payment";
import Setting from "../icons/Setting";
import Link from "next/link";

function Sidebare() {
  return (
    <div className="text-white border-r border-greenColor  h-screen p-5 flex flex-col justify-between sticky top-0">
      <div className="text-center">
        <h1 className=" font-semibold">LOGO</h1>
        <span className="font-xs">Welcome, khalid.</span>
      </div>

      <ul className="flex flex-col gap-10 font-semibold ">
        <Link href="/admin">
          <li>
            <Dash /> Dasboard
          </li>
        </Link>

        <Link href="/admin/products">
          <li>
            <Product /> Products
          </li>
        </Link>
        <Link href="/admin/orders">
          <li>
            <Order /> Orders
          </li>
        </Link>

        <Link href="/admin/clients">
          <li>
            <User /> Clients
          </li>
        </Link>

        <Link href="/admin/payments">
          <li>
            <Payment /> Payments
          </li>
        </Link>
        <li></li>
      </ul>

      <button className="w-fit flex font-semibold gap-5">
        <Setting />
        Settings
      </button>
    </div>
  );
}

export default Sidebare;
