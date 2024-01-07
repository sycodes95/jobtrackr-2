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

  const isAuthenticated = user ? true : false;
  // const pathname = usePathname()
  // if(!user && pathname !== '/') redirect('/')
  return (
    <html lang="en" className={`${GeistMono.variable} flex h-full w-full`} suppressHydrationWarning>
      <UserProvider>
        <body className={` min-h-screen h-full w-full bg-background flex-col flex items-center text-jet`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader showSpinner={true} color="#000000" />
            <Header  isAuthenticated={isAuthenticated}/>
            <CheckAuth 
            isAuthenticated={isAuthenticated} 
            >
              {children}
            </CheckAuth>
            
          </ThemeProvider>
        </body>
      </UserProvider>
    </html>
  )
}
