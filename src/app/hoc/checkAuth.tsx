"use client"

import { GetServerSideProps } from "next";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/header/header";
import LandingPage from "../landingPage/page";

interface CheckAuthProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export default function CheckAuth ( { isAuthenticated, children } : CheckAuthProps ) {

  const path = usePathname()
  useEffect(() => {
    if(path !== '/') redirect('/')
  },[path])

  return (
    <>
      {
      isAuthenticated ?
      {children}
      :
      <LandingPage />
      }
    </>
  )
}

