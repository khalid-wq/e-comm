import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "pretty",
});
import { NextResponse } from "next/server";
export async function GET(request) {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (error) {
    console.log(error);
  }
}
