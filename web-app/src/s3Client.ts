import { S3Client } from '@aws-sdk/client-s3';

const globalForS3 = global as unknown as { s3Client: S3Client };

export const s3Client =
  globalForS3.s3Client ??
  new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY as string,
    },
  });

if (process.env.NODE_ENV !== 'production') globalForS3.s3Client = s3Client;
