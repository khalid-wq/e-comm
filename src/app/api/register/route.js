import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypte from "bcrypt";
import { data } from "autoprefixer";
const prisma = new PrismaClient({
  errorFormat: "pretty",
});
export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);
    const nothashedPass = body.password;
    const salt = bcrypte.genSaltSync(10);
    const hachedPass = bcrypte.hashSync(nothashedPass, salt);
    body.password = hachedPass;
    const user = await prisma.user.create({
      data: { name: body.name, email: body.email, password: body.password },
    });
    console.log(user);
    return new NextResponse(JSON.stringify(user, { status: 200 }));
  } catch (error) {
    console.log(error);
  }
}
