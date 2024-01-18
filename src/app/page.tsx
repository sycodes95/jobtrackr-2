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


// {
  // nickname: 'ergosproductsla',
  // name: 'ergosproductsla@gmail.com',
  // picture: 'https://s.gravatar.com/avatar/e007aa5cb8a06fb38858a9743e35f9ab?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fer.png',
  // updated_at: '2024-01-18T06:57:10.005Z',
  // email: 'ergosproductsla@gmail.com',
  // email_verified: false,
  // sub: 'auth0|65a8cbc560b595aa7daf2df8',
  // sid: 'GtFeSjqU-nVadhbOnByjywzNtRvZoHaY'
// }
// 

  // nickname: 'sycodes95',
  // name: 'kevin kim',
  // picture: 'https://lh3.googleusercontent.com/a/ACg8ocKJean0weqCYdFMxUwk8sdKQrOpcubBhJiuXyLkRkVA=s96-c',
  // updated_at: '2024-01-18T06:58:57.544Z',
  // email: 'sycodes95@gmail.com',
  // email_verified: true,
  // sub: 'google-oauth2|118079549852150521550',
  // sid: 'l9mqJl2LU9405vkgm9TicPN1PeiWHLUH'
// 