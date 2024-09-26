import { ErrorCode } from '@/core/application/error-handling/ErrorCode';

export type ErrorsDictionary = Record<ErrorCode, string> & {
  error: string;
};
