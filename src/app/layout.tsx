import type { Metadata } from 'next'
import { Montserrat_Alternates, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const $font_primary = Montserrat_Alternates({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

const $font_secundary = JetBrains_Mono({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${$font_primary.className} ${$font_secundary}`}>
        {children}
      </body>
    </html>
  )
}
