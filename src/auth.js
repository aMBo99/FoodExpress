// 'use server'

// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// import Credentials from 'next-auth/providers/credentials';
// import bcrypt from 'bcrypt';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function getUser(email) {
//   try {
//     const user = await prisma.user.findUnique({
//       where: {
//         email: email,
//       },
//     });
//     return user;
//   } catch (error) {
//     console.error('Failed to fetch user:', error);
//     throw new Error('Failed to fetch user.');
//   }
// }

// async function authenticateUser(email, passwd) {
//   const user = getUser(email);
//   if (!user) return null;

//   const isPasswordValid = await bcrypt.compare(passwd, user.passwd);
//   if (!isPasswordValid) return null;

//   return user;
// }

// export const { auth, signIn, signOut } = NextAuth({
//   ...authConfig,
//   providers: [Credentials({
//     async authorize() {
//       const authenticatedUser = await authenticateUser(email, passwd);

//       if (authenticatedUser) {
//         // Authentication successful
//         console.log('User authenticated:', authenticatedUser);
//       } else {
//         // Authentication failed
//         console.log('Invalid email or password');
//       }
//     }
//   })],
// });

// export default getUser;