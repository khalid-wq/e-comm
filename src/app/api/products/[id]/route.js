import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "pretty",
});

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    await prisma.post.delete({ where: { id: id } });
    return new NextResponse(JSON.stringify("this product is deleted", id));
  } catch (error) {
    return new NextResponse(JSON.stringify("server error", error));
  }
}
