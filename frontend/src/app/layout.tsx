import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ReactNode } from 'react'
import { Toaster } from 'sonner'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Desafio Gustavo',
  description: 'Desafio Gustavo Campos',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          montserrat.className,
          'relative h-full bg-background text-text-primary antialiased',
        )}
      >
        <Toaster />
        {children}
      </body>
    </html>
  )
}
