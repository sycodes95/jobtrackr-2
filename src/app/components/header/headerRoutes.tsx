"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HeaderRoutes () { 

  const path = usePathname()
  const routes = {
    'Applications' : '/applications',
    'Insights' : '/insights',

  }

  return (
    <div className="flex items-center gap-6">
      {
      Object.entries(routes).map(([key, value]) => (
        <Link className={`${path === value ? 'text-jet' : 'text-zinc-500'} w-fit text-sm font-inter-tight font-semibold`} href={value} key={key}>
          {key}
        </Link>
      ))
      }
    </div>
  )
}