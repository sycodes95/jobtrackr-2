import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import NextTopLoader from 'nextjs-toploader'
import Header from './components/header/header'
import { ThemeProvider } from './components/themeProvider'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect, usePathname } from 'next/navigation'
import LandingPage from './landingPage/page'
import CheckAuth from './hoc/checkAuth'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jobtrackr',
  description: 'Web app designed to help you keep track of job applications',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession();
  const user = session?.user;
  // const pathname = usePathname()
  // if(!user && pathname !== '/') redirect('/')
  return (
    <html lang="en" className={`${GeistMono.variable}`} suppressHydrationWarning>
      <UserProvider>
        <NextTopLoader showSpinner={true} color="#000000" />
        <body className={`${inter.className} h-full w-full bg-white flex-col flex items-center text-jet`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <CheckAuth 
            isAuthenticated={user ? true : false} 
            >
              {children}
            </CheckAuth>
            
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  )
}
