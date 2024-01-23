import { config } from "@/config/config"

export const getAllApps = async ( userId: number) => {
  try {
    const fetchGET = await fetch(`${config.PUBLIC_HOST}/api/applications?userId=${userId}`)
    const apps = await fetchGET.json();
    console.log(apps);
    return apps
  } catch (er) {
    console.error('Error getAllApps ', er);
    return []
  }
}