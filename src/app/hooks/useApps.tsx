import { useCallback, useEffect, useState } from "react";
import useUserId from "./useUserId"
import { getAllApps } from "../applications/services/getAllApps";
import { ApplicationDetails } from "../applications/types/types";
import { demoApps } from "../applications/constants/constants";
import { useDemoMode } from "../constants";

export default function useApps () {
  const userId = useUserId();
  const [applications, setApplications] = useState<ApplicationDetails[]>(useDemoMode ? demoApps: [])
  const getApps = useCallback( async () => {
    if(typeof userId !== 'number' || useDemoMode) return
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