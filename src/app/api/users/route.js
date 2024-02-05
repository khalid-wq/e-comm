import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  errorFormat: "pretty",
});

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    return new NextResponse(JSON.stringify(users, { Message: 200 }));
  } catch (error) {
    console.log(error);
  }
}
