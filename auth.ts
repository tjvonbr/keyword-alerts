import { PrismaAdapter } from "@next-auth/prisma-adapter"
import Postmark from "next-auth/providers/postmark"
import NextAuth from "next-auth"
import { prisma } from "./lib/prisma"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Postmark({
      apiKey: process.env.POSTMARK_API_TOKEN,
      from: process.env.EMAIL_FROM,
    })
  ],
})
