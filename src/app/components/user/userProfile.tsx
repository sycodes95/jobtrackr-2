'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


export default function UserProfile () {
  const { user, error, isLoading } = useUser();
  // const [picture, setPicture] = useState< string | StaticImport >('')

  // useEffect(() => {
  //   if(!error && !isLoading && user) {
  //     typeof user.picture === 'string' && setPicture(user.picture)
  //   }

  // },[user, error, isLoading])
  return (
    <div className=''>
      {
      !error && !isLoading && user && 
      <Popover>
        <PopoverTrigger>
          <img className='h-8 w-8 rounded-full' src={user.picture} alt=''/>
        </PopoverTrigger>
        <PopoverContent className='w-fit text-xs border border-zinc-300'>
          <a href='/api/auth/logout'>
            Log out
          </a>
        </PopoverContent>
      </Popover>
      }
    </div>
  )
}