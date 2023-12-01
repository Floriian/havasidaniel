import { ListBucketsCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { S3Client } from '@features/aws'
import { ContactForm } from '@features/contact'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

export async function getImagesFromCloudFront() {
  const getObjectsCommand = new ListObjectsV2Command({
    Bucket: 'havasidanidev',
  });

  const { Contents } = await S3Client.send(getObjectsCommand);

  const imgs = Contents?.map((c) => "https://d218d58n4tyfby.cloudfront.net/" + c.Key)

  return { imgs }
}

export default async function Home() {
  const { imgs } = await getImagesFromCloudFront()

  return (
    <section className="flex min-h-screen items-center justify-between p-24 scroll-smooth flex-col">
      <div id="landing">
        <h1 className="text-4xl">LANDING</h1>

      </div>
      <div id="works">
        <h1 className="text-4xl">WORKS</h1>
        {imgs?.map((src) => <Image alt='src' src={`${src}`} key={src} width={1920} height={1080} />)}
      </div>
      <div id="contact">
        <h1 className="text-4xl">Contact</h1>
      </div>
      <ContactForm />
    </section>
  )
}
