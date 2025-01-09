import "server-only";
import { getUser } from "./DAL";
import { PrismaClient, User } from "@prisma/client";

function canSeeUsername(viewer: User) {
  return true;
}

function canSeePhoneNumber(viewer: User) {
  return viewer.role === "admin";
}

export async function getProfileDTO(userId: string) {
  const prisma = new PrismaClient();

  const data = await prisma.user.findMany({
    where: { id: userId },
    // Return specific columns here
    select: {
        id: true,
        // name: true,
        role: true,
        email: true,
    },
  });
  const user = data[0];

  const currentUser = await getUser();

  await prisma.$disconnect();

  // Or return only what's specific to the query here
  return {
    // username: canSeeUsername(currentUser) ? user.name : null,
    // phonenumber: canSeePhoneNumber(currentUser)
    //   ? user.phonenumber
    //   : null,
  };
}
