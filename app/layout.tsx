import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Start Your Sunday With Qigong | Qigong Infused Yoga',
  description: 'A free weekly nervous system healing class to help you release anxiety, soften chronic tension, and feel like yourself again.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

