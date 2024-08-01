import bcrypt from 'bcrypt';
import { prisma } from '@/prisma';
import { AuthSchema } from './auth.schema';
import { Result, errorResult, successResult } from '@/utils/types/Result';
import jwt from 'jsonwebtoken';

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Result<AuthTokens, string>> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error('Auth secret is not provided');

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (user) return errorResult('There is already a user with this email');

  const passwordHash = await bcrypt.hash(password, 10);

  const createdUser = await prisma.user.create({
    data: { email, passwordHash },
  });

  const accessToken = jwt.sign({ userId: createdUser.id }, secret, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId: createdUser.id }, secret, { expiresIn: '7d' });

  await prisma.refreshToken.create({
    data: { token: refreshToken, userId: createdUser.id },
  });

  return successResult({ accessToken, refreshToken });
}

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Result<AuthTokens, string>> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error('Auth secret is not provided');

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  // TODO: Add errors translation
  if (!user) return errorResult('There is no user with this email');

  const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
  if (!passwordsMatch) return errorResult('Password is incorrect, please try again');

  const accessToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '7d' });

  await prisma.refreshToken.create({
    data: { token: refreshToken, userId: user.id },
  });

  return successResult({ accessToken, refreshToken });
}

export async function refresh(refreshToken: string): Promise<Result<AuthTokens, string>> {
  const secret = process.env.AUTH_SECRET;
  if (!secret) throw new Error('Auth secret is not provided');

  const existingToken = await prisma.refreshToken.findFirst({
    where: {
      token: refreshToken,
    },
    include: {
      user: true,
    },
  });

  if (!existingToken) return errorResult('Refresh token is not valid');
  if (existingToken.isRevoked) return errorResult('Refresh token is already revoked');

  const user = existingToken.user;

  const accessToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '15m' });
  const newRefreshToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '7d' });

  await prisma.$transaction([
    prisma.refreshToken.update({
      where: {
        id: existingToken.id,
      },
      data: {
        isRevoked: true,
      },
    }),
    prisma.refreshToken.create({
      data: { token: newRefreshToken, userId: user.id },
    }),
  ]);

  return successResult({ accessToken, refreshToken: newRefreshToken });
}
