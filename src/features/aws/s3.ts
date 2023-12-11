import { S3Client as AWSS3Client } from "@aws-sdk/client-s3";
export const S3Client = new AWSS3Client({
  credentials: {
    accessKeyId: process.env.HED_AWS_ACCESS_KEY!,
    secretAccessKey: process.env.HED_AWS_SECRET!,
  },
  region: "eu-central-1",
});
