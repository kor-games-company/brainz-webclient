import Button from '@/app/_ui/buttons/Button';
import { Input } from '@/app/_ui/input/Input';
import { signIn } from '@/auth/auth';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { getLangFromCookies } from '@/utils/cookies/cookies.utils';
import Link from 'next/link';

export default function SignIn() {
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang].auth;

  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('resend', { email: formData.get('email'), redirectTo: '/' });
      }}
      className="flex flex-col items-center gap-6 rounded-md bg-primary p-8"
    >
      <h1 className="text-xl font-bold">{dictionary.signin}</h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label>{dictionary.email}</label>
          <Input name="email" type="email" />
        </div>
        <Button className="uppercase">{dictionary.signin}</Button>
      </div>
      <div>
        <Link href={'/'}>
          <span className="text-sm text-oppositeSecondary underline hover:text-opposite">
            {dictionary.continueWithoutSigning}
          </span>
        </Link>
      </div>
    </form>
  );
}
