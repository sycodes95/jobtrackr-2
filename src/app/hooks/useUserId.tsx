
'use client'

import { useEffect, useState } from "react"
import { UserType } from "../api/users/route"
import { useUser } from "@auth0/nextjs-auth0/client";
import { getUser } from "../services/getUser";

export default function useUserId () {
  const { user, error, isLoading } = useUser();
  const [sub, setSub] = useState<string>('')
  const [pgUser, setPGUser] = useState<UserType | null>(null)

  useEffect(() => {  
    if(user && user.sub && !error && !isLoading) setSub(user.sub)
  },[user, error, isLoading])

  useEffect(()=> {
    if(sub) {
      getUser(sub).then(user => setPGUser(user))
    }     
  },[sub]) 

  if(pgUser) return pgUser
  return null
}