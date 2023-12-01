import { S3Client as AWSS3Client } from "@aws-sdk/client-s3";
export const S3Client = new AWSS3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET!,
  },
  region: "eu-central-1",
});
