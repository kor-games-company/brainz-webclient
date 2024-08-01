import { prisma } from '@/prisma';
import { User } from '@prisma/client';

export async function getUser(email: string) {
  return await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
}

export async function createUser(user: Partial<User>) {
  return await prisma.user.create({
    data: { ...user },
  });
}
