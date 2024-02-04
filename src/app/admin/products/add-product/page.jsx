import prisma from "@/app/lib/prisma";
import AddProduct from "@/app/ui/admin/AddProduct";
import React from "react";
async function addPost() {
  const post = await prisma.post.create();
}
export default function page() {
  return (
    <div>
      <AddProduct />
    </div>
  );
}
