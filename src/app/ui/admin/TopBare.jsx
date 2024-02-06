"use client";
import React from "react";
import Out from "../../../icons/Out";
import { signOut } from "next-auth/react";

function TopBare() {
  return (
    <div className="text-white border-b border-greenColor  p-3  flex justify-between sticky top-0 bg-backColor">
      <div className="w-full">
        <input
          className=" outline-none bg-gray900 p-1 rounded-md   w-[40%] "
          type="search"
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-6">
        {/* {" "}
        <div className="flex gap-2 items-center ">
          <div className="w-7 h-7 bg-slate-500 flex items-center justify-center rounded-full">
            <div className="w-6 h-6 bg-yellow-500 rounded-full cursor-pointer"></div>
          </div>

          <div className="w-7 h-7 bg-slate-500 flex items-center justify-center rounded-full">
            <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
          </div>
          <div className="w-7 h-7 bg-slate-500 flex items-center justify-center rounded-full">
            <div className="w-6 h-6 rounded-full bg-pink-400 cursor-pointer"></div>
          </div>
        </div> */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-fit flex font-semibold gap-2 bg-greenColor p-2 rounded-md hover:-translate-x-5 duration-75"
        >
          Logout
          <Out />
        </button>
      </div>
    </div>
  );
}

export default TopBare;
