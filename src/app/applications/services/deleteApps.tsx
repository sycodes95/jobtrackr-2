import { config } from "@/config/config"
import { toast } from "sonner";

export const deleteApplications = async (appIdArray: number[], user_id: number | null) => {

  if(appIdArray.length < 1 || user_id === null) {
    return toast(`Sorry! There was a problem deleting applications. Don't worry, it's not your fault. Try again later!`);
  }
  
  try {
    const fetchDELETE = await fetch(`${config.PUBLIC_HOST}/api/applications`, {
      method: 'DELETE',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({
        appIdArray,
        user_id
      })
    });

    if(fetchDELETE.ok) {
      return toast(`${appIdArray.length} Application(s) successfully deleted`);
    }
    return toast(`Sorry! There was a problem deleting applications. Don't worry, it's not your fault. Try again later!`);

  } catch (er) {
    console.error('Error deleting applications', er);
    return toast(`Sorry! There was a problem deleting applications. Don't worry, it's not your fault. Try again later!`);
    
  }
}