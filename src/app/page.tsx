import Image from 'next/image'
import Dashboard from './dashboard/page'
import { getSession } from '@auth0/nextjs-auth0'
import LandingPage from './landingPage/page'

export default async function Home() {
  const session = await getSession();
  const user = session?.user;
  return (
    <>
    {
    user ? 
    <Dashboard />
    :
    <LandingPage />
    }
    </>
  )
}
