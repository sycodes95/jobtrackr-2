'use client'

import { redirect, usePathname } from "next/navigation"
import { useEffect } from "react"

export default function Redirect () {
  const path = usePathname()
  useEffect(()=> {
    if(path !== '/') redirect('/')
  },[path])

  
}