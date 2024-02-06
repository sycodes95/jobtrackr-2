"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import GridViewIcon from '@mui/icons-material/GridView';

export default function HeaderRoutes () { 

  const path = usePathname();
  const routes = {
    'Dashboard' : '/',
    'Applications' : '/applications',
    'Insights' : '/insights',
  };

  return (
    <div className="flex items-center gap-6">
      {
      Object.entries(routes).map(([key, value]) => (
        <Link className={`${path === value ? 'text-primary' : 'text-zinc-500'} w-fit text-sm font-inter-tight font-semibold`} href={value} key={key}>
          {
          key !== 'Dashboard' ? 
          key
          :
          <GridViewIcon className="text-lg" />
          }
        </Link>
      ))
      }
    </div>
  )
}