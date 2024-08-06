import { ErrorCode } from '@/error-handling/ErrorCode';

export type ErrorsDictionary = Record<ErrorCode, string> & {
  error: string;
};
