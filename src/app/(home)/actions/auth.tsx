const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

import { loginUser } from "../lib/dataqueries";
import { cookies } from 'next/headers'

import { createSession, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
import { SignupFormSchema, FormState } from "../lib/definitions";

export async function signup(state: FormState, formData: FormData) {
  // 1. Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    // name: formData.get('name'),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Call the provider or db to create a user...

  // 2. Prepare data for insertion into database
  const { email, password } = validatedFields.data;
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // 3. Insert the user into the database or call an Auth Library's API
  const prisma = new PrismaClient();

  const newData = await prisma.user.create({
    data: { email: email, passwd: hashedPassword, role: "user" },
  });
  // .returning({ id: user.id })

  const user = newData[0];

  if (!user) {
    return {
      message: "An error occurred while creating your account.",
    };
  }

  // TODO:
  // 4. Create user session
  await createSession(user.id);
  // 5. Redirect user
  redirect("/");

  await prisma.$disconnect();
}

export async function logout() {
  deleteSession();
  redirect('/login');
}