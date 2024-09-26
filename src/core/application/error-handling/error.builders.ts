import { AppError, AppErrorType } from './AppError';
import { dictionaryByLang } from '@/shared/localization/dictionaries/dictionaryByLang';
import { ErrorCode } from './ErrorCode';
import interpolate from '@/shared/utils/strings/interpolate';
import { LanguageEnum, FALLBACK_LANGUAGE } from '@/core/domain/value-objects/Language';

export type CreateErrorConfig = {
  errorCode: ErrorCode;
  type: AppErrorType;
  args?: { [key: string]: string };
  lang?: LanguageEnum;
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
