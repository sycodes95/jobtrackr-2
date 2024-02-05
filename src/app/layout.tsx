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
import Footer from './components/footer/footer'
import { getUser } from './services/getUser'
import { create } from 'domain'
import { createUser } from './services/createUser'
import { UserType } from './api/users/route'
import { createUserObj } from '@/lib/createUserObj'
import { Toaster } from '@/components/ui/sonner'


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

  //if auth0 user has session
  if(user){
    //get sub from auth0 user object
    const sub: string = user['sub'];
    // get user using sub 
    const userObj: UserType | null = await getUser(sub);
    //if user doesn't exist in PG, create user.
    !userObj && createUser(createUserObj(user))
  }
  // const pathname = usePathname()
  // if(!user && pathname !== '/') redirect('/')
  return (
    <html lang="en" className={`${GeistMono.variable} flex h-full w-full`} suppressHydrationWarning>
      <UserProvider>
        <body className={` min-h-screen h-full w-full bg-background flex-col flex items-center text-jet`}>
          {/* <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
          > */}
            <NextTopLoader showSpinner={true} color="#000000" />
            {/* <Header  isAuthenticated={isAuthenticated}/> */}
            <CheckAuth 
            isAuthenticated={isAuthenticated} 
            >
              {children}
            </CheckAuth>

            
          {/* </ThemeProvider> */}
        </body>
      </UserProvider>
    </html>
  )
}
