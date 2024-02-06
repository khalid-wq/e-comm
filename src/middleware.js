import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!session) {
    const signinUrl = new URL("/login", req.url);
    return NextResponse.redirect(signinUrl);
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/admin/:path*", "/"],
};
