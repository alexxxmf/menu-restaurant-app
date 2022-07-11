import { Prisma, User } from "@prisma/client";
import { prisma } from "../db";
import { scryptSync } from "crypto";
import { config } from "../config";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Prisma.Prisma__UserClient<User>> => {
  console.log(":::UserService|register:::");
  try {
    const encryptedPassword = scryptSync(
      password,
      config.salt,
      config.keyLength
    ).toString("hex");

    const user = await prisma.user.findFirstOrThrow({ where: { email } });

    if (user.password !== encryptedPassword) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (e) {
    throw new Error(e);
  }
};

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Prisma.Prisma__UserClient<User>> => {
  try {
    const encryptedPassword = scryptSync(
      password,
      config.salt,
      config.keyLength
    ).toString("hex");

    return await prisma.user.create({
      data: { email, password: encryptedPassword },
    });
  } catch (e) {
    throw new Error(e);
  }
};
