import { NextResponse } from "next/server";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      async authorize(credentials, req) {
        console.log(credentials);
        const user = {
          id: credentials.id,
          name: credentials.name,
          username: credentials.username,
          email: credentials.email,
          accessToken: credentials.accessToken
        }
        console.log(user);
        if (user) {
          return user

        } else {
          return null
        }
      }
    }),

    // ...add more providers here
  ],
  callbacks: {
    async jwt({token, user}) {
      // if (trigger === "update") {
      //   return {...token, ...session.user}
      // }
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  }
}
export default NextAuth(authOptions)