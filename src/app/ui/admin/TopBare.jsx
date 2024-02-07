"use client";
import React from "react";
import Out from "../../../icons/Out";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
function TopBare() {
  const session = useSession();
  const image = session.data?.user?.image;

  return (
    <div className="text-white border-b border-greenColor  p-3  flex justify-between sticky top-0 bg-backColor">
      <div className="w-full">
        <input
          className=" outline-none bg-gray900 p-1 rounded-md   w-[40%] "
          type="search"
          placeholder="Search..."
        />
      </div>
      <div className="flex gap-3 hover:-translate-x-5 duration-75">
        <div className="w-[30px] h-[30px] relative self-center rounded-full overflow-hidden  shadow-lg cursor-pointer">
          {image && <Image fill={true} src={image} alt={image}></Image>}
        </div>{" "}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-fit flex font-semibold gap-2 bg-greenColor p-2 rounded-md "
        >
          Logout
          <Out />
        </button>
      </div>
    </div>
  );
}

export default TopBare;
