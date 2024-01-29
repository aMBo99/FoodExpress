"use server";

// server actions

const bcrypt = require('bcrypt');
const { PrismaClient } = require("@prisma/client");

export async function loadDishes() {
  const prisma = new PrismaClient();
  try {
    const loadedDishes = await prisma.dish.findMany({});
    return loadedDishes;
  } catch (error) {
    console.error("Error fetching dishes from DB:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchUser(email, passwd, login) {
  const prisma = new PrismaClient();
  try {
    const fetchedUser = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!fetchedUser) return null;

    const match = await bcrypt.compare(passwd, fetchedUser.passwd);
    if (!match) return null;

    return fetchedUser;
  } catch (error) {
    console.error("Error fetching user from DB: ", error);
    // Consider logging the error to a centralized error tracking system
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function loginUser(email, passwd) {
  const prisma = new PrismaClient();
  try {
    const fetchedUser = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!fetchedUser) return null;

    const match = await bcrypt.compare(passwd, fetchedUser.passwd);
    if (!match) return null;

    console.log(`User with email "${email}" logged in.`);
    return fetchedUser;
  } catch (error) {
    console.error("Error fetching user from DB: ", error);
    // Consider logging the error to a centralized error tracking system
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function registerUser(email, passwd) {
  const prisma = new PrismaClient();
  try {
    const fetchedUser = await prisma.user.findUnique({ where: { email: email.toLowerCase() } });
    if (!fetchedUser) {
      const salt = await bcrypt.genSalt();
      const hashedPasswd = await bcrypt.hash(passwd, salt);
      await prisma.user.create({ data: { email: email, passwd: hashedPasswd, role: "user" } });
      console.log(`Registered user with email "${email}".`);
    }
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}