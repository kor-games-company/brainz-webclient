import { ErrorCode } from './ErrorCode';

export type AppErrorType = 'Client' | 'Server' | 'External';

export type AppError = {
  errorCode: ErrorCode;
  args: { [key: string]: string };
  localizedMessage: string;
  type: AppErrorType;
  httpStatus?: number;
};
