import { ContactForm } from '@features/contact'
import { GalleryImages } from '@features/gallery'
import { LandingSection } from '@features/landing'

export default function Home() {
  return (
      <main className="flex min-h-screen items-center justify-between scroll-smooth flex-col">
          <LandingSection/>
          <hr className="h-px my-8 bg-zinc-400 w-[calc(100vw-10rem)] border-0 w-9/12 margin-0 auto"/>
          <article id="gallery" className='w-4/5'>
              <h1 className="text-3xl uppercase font-bold text-center mb-4">Galéria</h1>
          </article>
          <GalleryImages/>
          <article id="contact">
              <h1 className="text-3xl">Contact</h1>
              <ContactForm/>
          </article>
      </main>
  )
}
