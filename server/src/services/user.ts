import { Prisma, User } from "@prisma/client";
import { prisma } from "../db";
import { scryptSync } from "crypto";
import { config } from "../config";
import { logger } from "../utils";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Prisma.Prisma__UserClient<User["id"]>> => {
  logger.info(":::UserService|login:::");
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

    return user.id;
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
}) => {
  logger.info(":::UserService|register:::");
  try {
    const encryptedPassword = scryptSync(
      password,
      config.salt,
      config.keyLength
    ).toString("hex");

    const user = await prisma.user.create({
      data: { email, password: encryptedPassword },
      select: { password: false },
    });

    return user;
  } catch (e) {
    throw new Error(e);
  }
};
