import { ListBucketsCommand, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { S3Client } from '@features/aws'
import { ContactForm } from '@features/contact'
import { GalleryImages } from '@features/gallery'
import dynamic from 'next/dynamic'
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {

  return (
    <main className="flex min-h-screen items-center justify-between scroll-smooth flex-col">
      <article id="landing">
        <h1 className="text-4xl">LANDING</h1>

      </article>
      <hr className="h-px my-8 bg-gray-200 border-0 w-[calc(100vw-2rem)]" />
      <article id="gallery" className='w-4/5'>
        <h1 className="text-3xl uppercase font-bold text-center mb-4">Galéria</h1>
        <GalleryImages />
      </article>
      <article id="contact">
        <h1 className="text-3xl">Contact</h1>
        <ContactForm />
      </article>
    </main>
  )
}
