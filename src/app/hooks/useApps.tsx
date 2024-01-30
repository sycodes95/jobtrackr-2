import { useCallback, useEffect, useState } from "react";
import useUserId from "./useUserId"
import { getAllApps } from "../applications/services/getAllApps";
import { ApplicationDetails } from "../applications/types/types";

export default function useApps () {

  const userId = useUserId();
  const [applications, setApplications] = useState<ApplicationDetails[]>([])
  const getApps = useCallback( async () => {
    if(typeof userId !== 'number') return
    try {
      const apps = await getAllApps(userId);
      setApplications(apps)
    } catch (error) {
      console.log('Error in getApps useApps hook', error);
      setApplications([])
    }
  },[userId])

  useEffect(() => {
    getApps()
  },[userId, getApps])

  return {
    applications, 
    setApplications
  };
};