import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { DarkModeProvider, Navbar } from '@features/app'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Havasi Dániel Edvin',
  description: 'Havasi Dániel Edvin esküvői fotós, party fotós, portréfotós',
  keywords: ['Havasi', 'Dániel', 'Edvin', 'Fotó', "Party", "Portréfotó", "Esküvői fotózás", "Havasi Dániel Edvin", "HED Photography", "Rendezvény fotózás", "Rendezvény", "Fotózás"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-zinc-950 text-white"}>
        <DarkModeProvider>
          <header>
            <Navbar />
          </header>
          {children}
        </DarkModeProvider>
      </body>
    </html>
  )
}
