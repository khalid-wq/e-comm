import React from "react";
import Users from "../ui/admin/dashboard/Users";
import prisma from "../lib/prisma";

async function page() {
  const users = await prisma.user.deleteMany();
  console.log(users);

  return (
    <div className="text-white">
      <Users />
    </div>
  );
}

export default page;
