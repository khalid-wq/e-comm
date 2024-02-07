"use client";
import React from "react";
import { HiChartPie } from "react-icons/hi2";
import { HiMiniRectangleGroup } from "react-icons/hi2";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { HiIdentification } from "react-icons/hi2";
import { HiBanknotes } from "react-icons/hi2";
import { HiMiniCog8Tooth } from "react-icons/hi2";

import Link from "next/link";
import { useSession } from "next-auth/react";
function Sidebare() {
  const session = useSession();
  const name = session.data?.user?.name;
  return (
    <div className="text-white border-r border-greenColor  h-screen p-5 flex flex-col justify-between sticky top-0">
      <div className="text-center">
        <h1 className=" font-semibold">LOGO</h1>
        <span className="font-xs">Welcome, {name}.</span>
      </div>

      <ul className="flex flex-col gap-10 font-semibold ">
        <Link href="/admin">
          <li>
            <HiChartPie className="w-6 h-6" /> Dasboard
          </li>
        </Link>

        <Link href="/admin/products">
          <li>
            <HiMiniRectangleGroup className="w-6 h-6" /> Products
          </li>
        </Link>
        <Link href="/admin/orders">
          <li>
            <HiMiniSquares2X2 className="w-6 h-6" /> Orders
          </li>
        </Link>

        <Link href="/admin/clients">
          <li>
            <HiIdentification className="w-6 h-6" /> Clients
          </li>
        </Link>

        <Link href="/admin/payments">
          <li>
            <HiBanknotes className="w-6 h-6" /> Payments
          </li>
        </Link>
        <li></li>
      </ul>

      <button className="w-fit flex font-semibold gap-5">
        <HiMiniCog8Tooth className="w-6 h-6" /> Settings
      </button>
    </div>
  );
}

export default Sidebare;
