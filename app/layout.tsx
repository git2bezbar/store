import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans';

import './globals.css'

import Header from './header';
import Footer from './footer';

export const metadata: Metadata = {
  title: 'AD Store | La seule et unique boutique de l\'AD Verse',
  description: 'AD Store propose produits artisanaux de haute qualité. ' +
    'Produits dérivés inspirés par l\'AD Verse.',
}

export default function RootLayout({
  children,
}: React.ComponentPropsWithRef<any>) {
  return (
    <html lang="fr">
      <body className={`${GeistSans.className} bg-zinc-950 text-white`}>
        <Header/>
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
