"use server";

// server actions

const bcrypt = require("bcrypt");
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

export async function loadDish(id: any) {
  const prisma = new PrismaClient();
  try {
    const fetchedDish = await prisma.dish.findUnique({ where: { id: id } });
    return fetchedDish;
  } catch (error) {
    console.log("Error fetching dish: ", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function updateDish(dishid: any, name: any, description: any, imageURL: any) {
  const prisma = new PrismaClient();
  try {
    const updatedDish = await prisma.dish.update({
      where: { id: dishid },
      data: { title: name, descript: description, imgUrl: imageURL },
    });
    if (!updatedDish) {
      throw Error;
    }
    console.log("Dish updated successfuly!");
    return updatedDish;
  } catch (error) {
    console.log("Error updating dish: ", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function createDish(name: string, description: any, imageURL: any) {
  const prisma = new PrismaClient();
  try {
    const fetchedDish = await prisma.dish.findUnique({
      where: { title: name.toLowerCase() },
    });
    if (!fetchedDish) {
      const createdDish = await prisma.dish.create({
        data: { title: name, descript: description, imgUrl: imageURL },
      });
      if (!createdDish) {
        throw Error;
      }
      console.log(`Added dish "${name}" successfully.`);
    } else {
      console.log("Dish is already present on the menu!");
    }
  } catch (error) {
    console.error("Error creating dish: ", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteDish(dishid: any) {
  const prisma = new PrismaClient();
  try {
    const deletedDish = await prisma.dish.delete({ where: { id: dishid } })
    if (!deletedDish) {
      throw Error;
    }
    console.log("Dish deleted successfully!");
    return deleteDish;
  } catch (error) {
    console.log("Error deleting dish: ", error);
  } finally {
    await prisma.$disconnect();
  }
}

export async function fetchUser(email: string, passwd: any) {
  const prisma = new PrismaClient();
  try {
    const fetchedUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!fetchedUser) return null;

    const match = await bcrypt.compare(passwd, fetchedUser.passwd);
    if (!match) return null;

    return fetchedUser;
  } catch (error) {
    console.error("Error fetching user from DB: ", error);
    // Consider logging the error to a centralized error tracking system
  } finally {
    await prisma.$disconnect();
  }
}

export async function loginUser(email: string, passwd: any) {
  const prisma = new PrismaClient();
  try {
    const fetchedUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!fetchedUser) return null;

    const match = await bcrypt.compare(passwd, fetchedUser.passwd);
    if (!match) return null;

    console.log(`User with email "${email}" logged in.`);
    return fetchedUser;
  } catch (error) {
    console.error("Error fetching user from DB: ", error);
    // Consider logging the error to a centralized error tracking system
  } finally {
    await prisma.$disconnect();
  }
}

export async function registerUser(email: string, passwd: any) {
  const prisma = new PrismaClient();
  try {
    const fetchedUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    if (!fetchedUser) {
      const salt = await bcrypt.genSalt();
      const hashedPasswd = await bcrypt.hash(passwd, salt);
      const registeredUser = await prisma.user.create({
        data: { email: email, passwd: hashedPasswd, role: "user" },
      });
      if (!registeredUser) {
        throw Error;
      }
      console.log(`Registered user with email "${email}".`);
    }
    else {
      console.log(`User already exists!`);
    }
  } catch (error) {
    console.error("Error creating user: ", error);
  } finally {
    await prisma.$disconnect();
  }
}
