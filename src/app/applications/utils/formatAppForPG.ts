import { ApplicationType } from "@/app/api/applications/route";
import { ApplicationDetails } from "../types/types";

export const formatAppForPG = ( appDetails : ApplicationDetails, user_id: number) => {
  const pgAppDetails: any = { user_id } 
  
  Object.entries(appDetails).forEach(([key, fieldDetails]) => {
    pgAppDetails[key] = fieldDetails.value;
  })

  return pgAppDetails;
  
}