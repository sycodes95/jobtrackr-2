import { toast } from "sonner";
import { ApplicationDetails } from "../types/types";
import { formatAppForPG } from "../utils/formatAppForPG";

export const submitApp = async ( applicationDetails: ApplicationDetails, user_id: number ) => {
  try {

    const fetchPUT = await fetch('/api/applications', {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        appDetails: applicationDetails,
        user_id
      })
    });
    if(fetchPUT.ok) {
      toast("Application Saved Successfully")
    }//create toast

  } catch (er) {
    console.error('trouble saving application', er)
    toast("Error Saving Application", {
      description: 'Don\'t worry it\'s not your fault, try again later!'
    })
    // create toast
  }
}