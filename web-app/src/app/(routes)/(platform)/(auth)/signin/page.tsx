import { signIn } from '@/auth/auth';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { getLangFromCookies } from '@/utils/cookies/cookies.utils';

export default function SignIn() {
  const lang = getLangFromCookies();
  const dictionary = dictionaryByLang[lang].auth;

  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('resend', { email: formData.get('email'), redirectTo: '/' });
      }}
      className="my-8 flex flex-col items-center rounded-md"
    >
      <div className="flex flex-col">
        <label>{dictionary.email}</label>
        <input name="email" type="email" className="rounded-md bg-secondary p-2 text-opposite" />
      </div>
      <button type="submit">{dictionary.signin}</button>
    </form>
  );
}
