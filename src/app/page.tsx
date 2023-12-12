import { useAppStore } from '@features/app';
import { ContactForm } from '@features/contact'
import { GalleryImages } from '@features/gallery'
import { LandingContainer, LandingSection } from '@features/landing'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'

export default function Home() {

  return (
    <main className="flex min-h-screen items-center justify-between scroll-smooth flex-col">
      <LandingSection />
      <hr className="h-px my-8 bg-zinc-400 border-0 w-[calc(100vw-2rem)]" />
      <article id="gallery" className='w-4/5'>
        <h1 className="text-3xl uppercase font-bold text-center mb-4">Galéria</h1>
        <GalleryImages />
      </article>
      <hr className="h-px my-8 bg-zinc-400 border-0 w-[calc(100vw-2rem)]" />
      <article id="contact">
        <h1 className="text-3xl">Contact</h1>
        <ContactForm />
      </article>
    </main>
  )
}
