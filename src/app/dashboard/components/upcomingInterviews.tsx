'use client'
import { ApplicationDetails } from "@/app/applications/types/types";
import useApps from "@/app/hooks/useApps"
import { useCallback, useEffect, useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import RowUpcoming from "./rowUpcoming";

export default function UpcomingInterviews () {

  const { applications, setApplications } = useApps();
  const [upcomingInterviews, setUpcomingInterviews] = useState<ApplicationDetails[]>([])
  const getAppsWithInterviews = useCallback(() => {
    const currentDate = new Date();
    currentDate.setHours(0,0,0,0)

    const interviews = applications.filter( app => {
      if(app.interview_date && (new Date(app.interview_date) >= currentDate)) return app
    })
    console.log(interviews);
    setUpcomingInterviews(interviews)
  },[applications])
  useEffect(() => {
    getAppsWithInterviews()
  },[applications, getAppsWithInterviews])

  useEffect(() => {
    console.log(upcomingInterviews);
  },[upcomingInterviews])
  return (
    <div className=" rounded-lg flex flex-col gap-4 p-4 w-1/2 h-full ">
      <span className="font-bold w-full ">Upcoming Interviews</span>

      <div className="flex flex-col gap-2">

      {
      upcomingInterviews.length > 0 ?
      upcomingInterviews.map((app) => (
        
        <RowUpcoming key={app.app_id} app={app} />
          
      ))
      :
      <span className="p-2">n/a</span>
      }
      </div>

    </div>
  )
}

// interview date 
// name
// fav
// fit 
