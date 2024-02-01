import React from "react";
import Dash from "../icons/Dash";
import Product from "../icons/Product";
import Order from "../icons/Order";
import User from "../icons/User";
import Payment from "../icons/Payment";
import Setting from "../icons/Setting";

function Sidebare() {
  return (
    <div className="text-white border-r-2 border-greenColor  h-screen p-5 flex flex-col justify-between ">
      <div className="text-center">
        <h1 className=" font-semibold">LOGO</h1>
        <span className="font-xs">Welcome, khalid.</span>
      </div>

      <ul className="flex flex-col gap-10 font-semibold">
        <li>
          <Dash /> Dasboard
        </li>
        <li>
          <Product /> Products
        </li>
        <li>
          <Order /> Orders
        </li>
        <li>
          <User /> Clients
        </li>
        <li>
          <Payment /> Payments
        </li>
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
