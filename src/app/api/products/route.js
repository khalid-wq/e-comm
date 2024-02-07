import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "pretty",
});

export async function POST(request) {
  try {
    const { title, image, price, content, categories, authorId } =
      await request.json();
    const post = await prisma.post.create({
      data: {
        title: title,
        image: image,
        price: price,
        content: content,
        categories: { connect: { id: categories } },
        authorId: authorId,
      },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}
export async function GET(request) {
  try {
    const products = await prisma.post.findMany({
      include: { categories: true },
    });
    return new NextResponse(JSON.stringify(products, { status: 200 }));
  } catch (error) {
    console.log(error);
  }
}
