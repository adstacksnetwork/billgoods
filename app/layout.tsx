import type { Metadata } from 'next'
import { Space_Grotesk, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'BillGoods Invoice Generator',
  description: 'Create, send, and track invoices in minutes with BillGoods. Automated reminders, fast payments, and clean reporting for modern teams.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
