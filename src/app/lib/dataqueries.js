'use server'

const { PrismaClient } = require('@prisma/client');

export async function loadDishes() {
  const prisma = new PrismaClient();
  try {
    const loadedDishes = await prisma.dish.findMany({});
    return loadedDishes;
  } catch (error) {
    console.error('Error fetching dishes from DB:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
  // return loadedDishes;
}