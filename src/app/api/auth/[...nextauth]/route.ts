import api from "@/services/api";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, _req) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );
        const user = await response.json();
        if (user && response.ok) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/sign-in'
  }
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST };
