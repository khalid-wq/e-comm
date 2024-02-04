import prisma from "@/app/lib/prisma";
import Products from "@/app/ui/admin/Products";

import React from "react";

async function getPosts() {
  const posts = await prisma.post.findMany({
    include: {
      categories: true,
    },
  });
  return posts;
}
export default async function page() {
  const posts = await getPosts();
  return (
    <div>
      {posts.map((post) => (
        <Products
          key={post.id}
          id={post.id}
          title={post.title}
          price={post.price}
          categories={post.categories.map((category) => category.title)}
        />
      ))}
    </div>
  );
}
