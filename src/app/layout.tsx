import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import NextTopLoader from 'nextjs-toploader'
import Header from './components/header/header'
import { ThemeProvider } from './components/themeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jobtrackr',
  description: 'Web app designed to help you keep track of job applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistMono.variable}`} suppressHydrationWarning>
      <NextTopLoader showSpinner={true} color="#000000" />
      <body className={`${inter.className} h-full w-full bg-white flex-col flex items-center text-jet`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className='w-full h-full bg-white max-w-7xl border border-gray-400'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
