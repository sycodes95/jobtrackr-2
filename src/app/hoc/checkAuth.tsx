"use client"

import { GetServerSideProps } from "next";
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "../components/header/header";
import LandingPage from "../landingPage/landingPage";
import { Toaster } from "sonner";
import { ThemeProvider } from "../components/themeProvider";

interface CheckAuthProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

export default function CheckAuth ( { isAuthenticated, children } : CheckAuthProps ) {

  const path = usePathname()
  useEffect(() => {
    if(path !== '/' && !isAuthenticated) redirect('/')
  },[path, isAuthenticated])

  return (
    <>
      {
      isAuthenticated ?
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        disableTransitionOnChange
      >
        <Header  isAuthenticated={isAuthenticated}/>
        {children}
      </ThemeProvider>
      :
      <ThemeProvider
        attribute="class"
        forcedTheme="light"
        disableTransitionOnChange
      >
        <Header  isAuthenticated={isAuthenticated}/>
        <LandingPage />
      </ThemeProvider>
      }
      <Toaster />
    </>
  )
}

