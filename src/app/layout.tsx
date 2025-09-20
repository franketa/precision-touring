import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Precision Touring - Professional Tour Planning',
  description: 'The complete solution for tour managers and coordinators. Plan routes, calculate costs, ensure compliance, and generate professional budget plans with precision.',
  keywords: ['tour management', 'entertainment', 'logistics', 'route planning', 'budget management'],
  authors: [{ name: 'Precision Touring Team' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}
