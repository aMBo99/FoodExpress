'use server'

// import type { NextAuthConfig } from 'next-auth';
// import Providers from 'next-auth/providers';
import CredentialsProvider from "next-auth/providers/credentials"
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnFoodMenu = nextUrl.pathname.startsWith('/dish-dash');
      if (isOnFoodMenu) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dish-dash', nextUrl));
      }
      return true;
    },
  },
  providers: [
    // Providers.Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        })

        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()

        return user
      },
    }),
  ], // Add providers with an empty array for now
// } satisfies NextAuthConfig;
};