import "server-only";

import { cookies } from "next/headers";
import { decrypt } from "./session";
import { cache } from "react";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect("/login");
  }

  return { isAuth: true, userId: session.userId };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) return null;

  const prisma = new PrismaClient();

  try {
    const data = await prisma.user.findMany({
      where: { id: String(session.userId) },
      // Explicitly return the columns you need rather than the whole user object
      select: {
        id: true,
        // name: true,
        role: true,
        email: true,
      },
    });

    const user = data[0];

    return user;
  } catch (error) {
    console.log("Failed to fetch user");
    return null;
  } finally {
    await prisma.$disconnect();
  }
});
