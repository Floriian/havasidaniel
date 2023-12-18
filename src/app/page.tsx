import { ContactSection } from '@features/contact'
import { GallerySection } from '@features/gallery'
import { LandingSection } from '@features/landing'

export default function Home() {
    return (
        <main className="mx-auto p-0">
            <LandingSection />
            <GallerySection />
            <ContactSection />
        </main>
    )
}
