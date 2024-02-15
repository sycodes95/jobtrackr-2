'use client'
import { ApplicationDetails } from "@/app/applications/types/types";
import useApps from "@/app/hooks/useApps"
import { useCallback, useEffect, useState } from "react";

import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

import RowUpcoming from "./rowUpcoming";

export default function UpcomingInterviews () {

  const { applications } = useApps();
  const [upcomingInterviews, setUpcomingInterviews] = useState<ApplicationDetails[]>([])
  const getAppsWithInterviews = useCallback(() => {
    const currentDate = new Date();
    currentDate.setHours(0,0,0,0)
    const interviews = applications.filter( app => {
      if(app.interview_date && (new Date(app.interview_date) >= currentDate) && app.offer_amount === null) return app
    })
    setUpcomingInterviews(interviews)
  },[applications])
  useEffect(() => {
    getAppsWithInterviews()
  },[applications, getAppsWithInterviews])

  return (
    <div className=" rounded-lg flex flex-col gap-4 lg:w-1/2 h-full text-primary">
      <div className="flex items-center gap-2 font-inter-tight-display">
        <RecordVoiceOverIcon fontSize="small" />
        <span className="font-bold w-full ">Upcoming Interviews</span>
      </div>

      <div className="flex flex-col gap-2">
      {
      <div className="border border-border bg-card rounded-lg w-full h-full overflow-x-auto">
        <table className="w-full h-full md:table-fixed">
          <thead className="">
            <tr className="text-xs text-left text-zinc-500">
              <th className="p-4">Date</th>
              <th className=" p-4">Company</th>
              <th className=" p-4">Fav</th>
              <th className=" p-4">Fit</th>
              <th className=" p-4">Misc</th>

            </tr>
          </thead>
          <tbody>
            {
            upcomingInterviews.length > 0 ?
            upcomingInterviews.map((application) => (
              <RowUpcoming key={application.app_id} app={application} />
            ))
            :
            <RowUpcoming noRows={true} />

            }
          </tbody>
        
        </table>
      </div>
      

      }

      </div>

    </div>
  )
}

// interview date 
// name
// fav
// fit 
