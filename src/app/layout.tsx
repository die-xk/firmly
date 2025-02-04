import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import ExitIntentPopup from '@/components/ExitIntentPopup'
import CookieBanner from '@/components/CookieBanner'

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Firmly',
  description: 'Firmly is a SaaS churn prevention platform that helps you identify and retain your most valuable customers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${lato.variable} font-sans`}>
          {children}
          <ExitIntentPopup />
          <CookieBanner />
        </body>
      </html>
    </ClerkProvider>
  )
}
