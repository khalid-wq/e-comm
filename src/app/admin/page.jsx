import React from "react";
import Users from "../ui/admin/dashboard/Insights";
import Insights2 from "../ui/admin/dashboard/Insights2";

async function page() {
  return (
    <div className="text-white flex justify-between  gap-4">
      <Users />
      <Insights2 />
    </div>
  );
}

export default page;
