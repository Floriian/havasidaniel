import { ContactForm } from '@features/contact'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex min-h-screen items-center justify-between p-24 scroll-smooth flex-col">
      <ContactForm />
      <Link href="#landing" scroll={true}>Landing</Link>
      <Link href="#works" scroll={true}>Works</Link>
      <Link href="#contact" scroll={true}>contact</Link>

      <div id="landing">
        <h1 className="text-4xl">LANDING</h1>
      </div>
      <div id="works">
        <h1 className="text-4xl">WORKS</h1>
      </div>
      <div id="contact">
        <h1 className="text-4xl">Contact</h1>
      </div>
    </section>
  )
}
