import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  alternates: {
    canonical: `https://www.utlandsfest.nu`,
  },
  title: 'Utlandsfest',
  description:
    'Utlandsfest.nu är din ultimata guide för att hitta nästa stora utlandsfest. Upptäck event, datum och platser för de bästa festerna utomlands',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'overflow-y-scroll')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
