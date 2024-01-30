import { config } from "@/config/config"
import { ApplicationDetails } from "../types/types";

export const getAllApps = async ( userId: number) => {
  try {
    const fetchGET = await fetch(`${config.PUBLIC_HOST}/api/applications?userId=${userId}`)
    const apps: ApplicationDetails[] = await fetchGET.json();
    return apps
  } catch (er) {
    console.error('Error getAllApps ', er);
    return []
  }
}