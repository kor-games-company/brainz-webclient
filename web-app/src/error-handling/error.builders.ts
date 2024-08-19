import { Language } from '@/app/_components/localization/types';
import { AppError, AppErrorType } from './AppError';
import { FALLBACK_LANGUAGE } from '@/localization/constants';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { ErrorCode } from './ErrorCode';
import interpolate from '@/utils/strings/interpolate';

export type CreateErrorConfig = {
  errorCode: ErrorCode;
  type: AppErrorType;
  args?: { [key: string]: string };
  lang?: Language;
  httpStatus?: number;
};

export function createError({
  errorCode,
  type,
  args = {},
  lang = FALLBACK_LANGUAGE,
  httpStatus,
}: CreateErrorConfig): AppError {
  const dictionary = dictionaryByLang[lang];
  const localizedErrorMessage = dictionary.errors[errorCode];
  const filledErrorMessage = interpolate(localizedErrorMessage, args);

  return {
    errorCode,
    args,
    type,
    localizedMessage: filledErrorMessage,
    httpStatus: httpStatus,
  };
}
