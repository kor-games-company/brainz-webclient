import bcrypt from 'bcrypt';
import { prisma } from '@/prisma';
import { Result, errorResult, successResult } from '@/utils/schema/Result';
import jwt from 'jsonwebtoken';
import { AppError } from '@/error-handling/AppError';
import { createError } from '@/error-handling/error.builders';
import { ERROR_CODES } from '@/error-handling/constants';
import { getLangFromCookies } from '@/utils/cookies/cookies.utils';

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
}): Promise<Result<AuthTokens, AppError>> {
  const lang = getLangFromCookies();

  const secret = process.env.AUTH_SECRET;
  if (!secret)
    return errorResult(
      createError({
        errorCode: ERROR_CODES.server.missingConfig,
        type: 'Server',
        args: { configName: 'Auth' },
        lang,
        httpStatus: 500,
      }),
    );

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (user)
    return errorResult(
      createError({
        errorCode: ERROR_CODES.auth.existingUser,
        type: 'Client',
        lang,
        httpStatus: 409,
      }),
    );

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const createdUser = await prisma.user.create({
      data: { email, passwordHash },
    });
    const accessToken = jwt.sign({ userId: createdUser.id }, secret, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: createdUser.id }, secret, { expiresIn: '7d' });

    await prisma.refreshToken.create({
      data: { token: refreshToken, userId: createdUser.id },
    });

    return successResult({ accessToken, refreshToken });
  } catch (err) {
    console.error(err);
    return errorResult(
      createError({
        errorCode: ERROR_CODES.external.database,
        type: 'External',
        lang,
        httpStatus: 500,
      }),
    );
  }
}

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<Result<AuthTokens, AppError>> {
  const lang = getLangFromCookies();

  const secret = process.env.AUTH_SECRET;
  if (!secret)
    return errorResult(
      createError({
        errorCode: ERROR_CODES.server.missingConfig,
        type: 'Server',
        args: { configName: 'Auth' },
        lang,
        httpStatus: 500,
      }),
    );

  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user)
    return errorResult(
      createError({
        errorCode: ERROR_CODES.auth.nonExistingUser,
        type: 'Client',
        lang,
        httpStatus: 401,
      }),
    );

  const passwordsMatch = await bcrypt.compare(password, user.passwordHash);
  if (!passwordsMatch)
    return errorResult(
      createError({
        errorCode: ERROR_CODES.auth.invalidPassword,
        type: 'Client',
        lang,
        httpStatus: 401,
      }),
    );

  const accessToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId: user.id }, secret, { expiresIn: '7d' });

  try {
    await prisma.refreshToken.create({
      data: { token: refreshToken, userId: user.id },
    });
  } catch (err) {
    console.error(err);
    return errorResult(
      createError({
        errorCode: ERROR_CODES.external.database,
        type: 'External',
        lang,
        httpStatus: 500,
      }),
    );
  }

  return successResult({ accessToken, refreshToken });
}

export async function refresh(refreshToken: string): Promise<Result<AuthTokens, AppError>> {
  const lang = getLangFromCookies();

  const secret = process.env.AUTH_SECRET;
  if (!secret)
    return errorResult(
      createError({
        errorCode: ERROR_CODES.server.missingConfig,
        type: 'Server',
        args: { configName: 'Auth' },
        lang,
        httpStatus: 500,
      }),
    );

  try {
    const existingToken = await prisma.refreshToken.findFirst({
      where: {
        token: refreshToken,
      },
      include: {
        user: true,
      },
    });

    if (!existingToken || existingToken.isRevoked)
      return errorResult(
        createError({
          errorCode: ERROR_CODES.auth.invalidRefreshToken,
          type: 'Client',
          lang,
          httpStatus: 401,
        }),
      );

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
  } catch (err) {
    console.error(err);
    return errorResult(
      createError({
        errorCode: ERROR_CODES.external.database,
        type: 'External',
        lang,
        httpStatus: 500,
      }),
    );
  }
}
