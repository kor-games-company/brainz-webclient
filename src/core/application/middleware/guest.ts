import { NextResponse } from 'next/server';
import { AppNextRequest } from '@/middleware';
import { dictionaryByLang } from '../../../shared/localization/dictionaries/dictionaryByLang';

export default async function guestMiddleware(req: AppNextRequest, res: NextResponse) {
  const guestName = req.cookies.get('guestName');

  if (guestName) {
    req.guestName = guestName.value;
    return;
  }

  const dictionary = dictionaryByLang[req.lang!];

  req.guestName = dictionary.auth.guest;
  res.cookies.set('guestName', dictionary.auth.guest);
}
