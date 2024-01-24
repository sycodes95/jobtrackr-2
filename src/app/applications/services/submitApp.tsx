import { ApplicationDetails } from "../types/types";
import { formatAppForPG } from "../utils/formatAppForPG";

export const submitApp = async ( applicationDetails: ApplicationDetails, user_id: number ) => {
  try {

    // const pgAppDetails: ApplicationType  = {
    //   company_name: '',
    //   company_website: '',
    //   favorite: false,
    //   apply_date: undefined,
    //   apply_method: undefined,
    //   apply_url: '',
    //   position: '',
    //   fit_rating: null,
    //   location: undefined,
    //   interview_date: undefined,
    //   offer: false,
    //   offer_amount: undefined,
    //   offer_accepted: false,
    //   rejected: undefined,
    //   contact_name: '',
    //   contact_email: '',
    //   contact_phone: '',
    //   notes: '',

    // } 
    // const formattedAppDetails = formatAppForPG(applicationDetails, user_id)

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
    const savedRow = await fetchPUT.json();

    if(!fetchPUT.ok) return //create toast

    

  } catch (er) {
    console.error('trouble saving application', er)
    // create toast
  }
}