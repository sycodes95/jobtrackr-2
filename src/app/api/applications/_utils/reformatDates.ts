import { ApplicationDetails } from "@/app/applications/types/types";
import { ApplicationType } from "../route";

export const reformatDates = ( apps : ApplicationDetails[]) => {
  if(!apps.some(app => app.apply_date)) return apps
  const dateFormattedApps = apps.map(app => {
    const newApp = {
      ...app
    }
    if(app.apply_date && typeof app.apply_date === 'string') {
      newApp.apply_date = new Date(app.apply_date)
    }

    if(app.interview_date && typeof app.interview_date === 'string') {
      newApp.interview_date = new Date(app.interview_date)
    }

    return newApp
  })

  return dateFormattedApps
}