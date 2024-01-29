import { config } from "@/config/config"
import { ApplicationDetails } from "../types/types";

export const getAllApps = async ( userId: number) => {
  try {
    const fetchGET = await fetch(`${config.PUBLIC_HOST}/api/applications?userId=${userId}`)
    const apps: ApplicationDetails[] = await fetchGET.json();
    console.log(typeof apps[0].apply_date);
    console.log(apps);
    return apps
  } catch (er) {
    console.error('Error getAllApps ', er);
    return []
  }
}