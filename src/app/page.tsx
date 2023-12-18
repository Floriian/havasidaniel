import { ContactForm } from '@features/contact'
import { GalleryImages } from '@features/gallery'
import { LandingSection } from '@features/landing'

export default function Home() {
    return (
        <main className="mx-auto p-0">
            <LandingSection />


            <article id="gallery" className="sm:px-2 md:px-24">
                <GalleryImages />
            </article>

            <article id="contact" className='sm:px-2 md:px-24'>
                <ContactForm />
            </article>
        </main>
    )
}
