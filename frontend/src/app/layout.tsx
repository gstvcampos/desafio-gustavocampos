import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body
        className={cn(
          'relative h-full font-sans antialiased bg-background text-text-primary',
          montserrat.className,
        )}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
