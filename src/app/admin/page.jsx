import Dashboard from "@/components/admin/Dashboard";
import Sidebare from "@/components/admin/Sidebare";
import TopBare from "@/components/admin/TopBare";
import React from "react";

function page() {
  return (
    <div className="flex bg-backColor">
      <div className="basis-[15%] ">
        <Sidebare />
      </div>

      <div className="w-full basis-[85%]">
        <TopBare /> <Dashboard />
      </div>
    </div>
  );
}

export default page;
