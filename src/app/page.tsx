import Image from 'next/image'
import Dashboard from './dashboard/dashboard'
import { getSession } from '@auth0/nextjs-auth0'
import LandingPage from './landingPage/landingPage'

export default async function Home() {
  const session = await getSession();
  const user = session?.user;
  return (
    <Dashboard />
  )
}
