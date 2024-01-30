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
    const interviews = applications.filter( app => {
      if(app.interview_date && new Date(app.interview_date) >= new Date()) return app
    })
    setUpcomingInterviews(interviews)
  },[applications])
  useEffect(() => {
    getAppsWithInterviews()
  },[applications, getAppsWithInterviews])

  useEffect(() => {
    console.log(upcomingInterviews);
  },[upcomingInterviews])
  return (
    <div className=" rounded-lg flex flex-col gap-4 p-4 w-1/2">
      <span className="font-bold w-full ">Upcoming Interviews</span>
      {
      upcomingInterviews.map((app) => (
        <Popover key={app.app_id}>
          <PopoverTrigger>
            <RowUpcoming app={app} />
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      ))
      }

    </div>
  )
}

// interview date 
// name
// fav
// fit 
