"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import GridViewIcon from '@mui/icons-material/GridView';
import { Header } from "next/dist/lib/load-custom-routes";
import { appRoutes } from "@/app/constants";

interface HeaderRoutesProps {
  className?: string;
}

export default function HeaderRoutes ({ className } : HeaderRoutesProps) { 

  const path = usePathname();
  // const routes = {
  //   'Dashboard' : '/',
  //   'Applications' : '/applications',
  //   'Insights' : '/insights',
  // };

  return (
    <div className={`${className} `}>
      {
      Object.entries(appRoutes).map(([key, value]) => (
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