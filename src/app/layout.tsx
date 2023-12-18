import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@components/layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Havasi Dániel Edvin',
  description: 'Havasi Dániel Edvin, aki nem csak esküvői fotósként, de party fotósként és portréfotósként is kiválóan teljesít. Professzionális szolgáltatásai közé tartozik az esküvői fotózás, party fotózás és portréfotózás. Havasi Dániel Edvin a legjobb választás minden fotózási igényre.',
  keywords: ['Havasi', 'Dániel', 'Edvin', 'Fotó', "Party", "Portréfotó", "Esküvői fotózás", "Havasi Dániel Edvin", "HED Photography", "Rendezvény fotózás", "Rendezvény", "Fotózás"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={inter.className + " text-white bg-zinc-950 w-full bg-main bg-no-repeat object-fit bg-cover"}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
