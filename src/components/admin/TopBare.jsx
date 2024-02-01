import React from "react";
import Out from "../icons/Out";

function TopBare() {
  return (
    <div className="text-white border-b-2 border-greenColor  p-5  flex justify-between">
      <div className="w-full">
        <input
          className=" outline-none bg-transparent p-1  border-b border-blue-900 w-[40%] "
          type="search"
          placeholder="Search..."
        />
      </div>
      <div>
        <button className="w-fit flex font-semibold gap-5">
          Logout
          <Out />
        </button>
      </div>
    </div>
  );
}

export default TopBare;
