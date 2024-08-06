import { signUp } from '@/auth/auth';
import { getAuthSchema } from '@/auth/auth.schema';
import { getLangFromCookies, setRefreshTokenCookie } from '@/utils/cookies/cookies.utils';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const lang = getLangFromCookies();

  const creds = { email: formData.get('email'), password: formData.get('password') };
  const parsedCreds = getAuthSchema(lang).safeParse(creds);
  if (!parsedCreds.success)
    return Response.json(parsedCreds.error.flatten().fieldErrors, { status: 400 });

  const result = await signUp(parsedCreds.data);
  if (result.isSuccess) {
    const { accessToken, refreshToken } = result.data;
    setRefreshTokenCookie(refreshToken);
    return Response.json({ accessToken }, { status: 200 });
  }

  return Response.json(
    { global: result.error.localizedMessage },
    { status: result.error.httpStatus ?? 500 },
  );
}
