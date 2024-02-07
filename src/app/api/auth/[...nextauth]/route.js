import NextAuth, { getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({
  errorFormat: "pretty",
});

//
export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        const user = await prisma.user.findUnique({ where: { email: email } });
        const passwordOk = user && bcrypt.compareSync(password, user.password);

        if (passwordOk) {
          return user;
        }

        return null;
      },
    }),
  ],
};
export async function isAdmin() {
  const session = await getServerSession(authOptions);
  // const userEmail = session?.user?.email;
  // if (!userEmail) {
  //   return false;
  // }
  // const userInfo = await prisma.user.findUnique({
  //   where: { email: userEmail },
  // });
  // if (!userInfo) {
  //   return false;
  // }
  // return userInfo.admin;
  console.log(session);
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
