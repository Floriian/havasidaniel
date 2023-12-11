import { ListBucketsCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { S3Client } from '@features/aws'
import { ContactForm } from '@features/contact'
import { GalleryImages } from '@features/gallery'
import dynamic from 'next/dynamic'
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {

  return (
    <section className="flex min-h-screen items-center justify-between p-24 scroll-smooth flex-col">
      <div id="landing">
        <h1 className="text-4xl">LANDING</h1>

      </div>
      <div id="gallery">
        <h1 className="text-4xl">WORKS</h1>
        <GalleryImages />
      </div>
      <div id="contact">
        <h1 className="text-4xl">Contact</h1>
      </div>
      <ContactForm />
    </section>
  )
}
