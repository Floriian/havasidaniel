"use server";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { S3Client } from "@features/aws";

export async function getGalleryImages(
  type: "mixed" | "party" | "wedding" = "mixed",
) {
  const Prefix =
    type === "party"
      ? "images/party/"
      : type === "wedding"
        ? "images/wedding/"
        : "images/";

  const getObjectsCommand = new ListObjectsV2Command({
    Bucket: "havasidanidev",
    Prefix,
  });

  const { Contents } = await S3Client.send(getObjectsCommand);

  const imgs = Contents?.filter(
    (content) =>
      content?.Size > 0 &&
      (type === "mixed" || content.Key?.split("/")[1] === type),
  ).map((content) => "https://d218d58n4tyfby.cloudfront.net/" + content.Key);

  return imgs;
}
