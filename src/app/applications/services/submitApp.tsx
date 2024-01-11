import { ApplicationDetails } from "../types/types";

export const submitApp = async ( applicationDetails: ApplicationDetails ) => {
  try {
    const post = await fetch('/api/applications', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(applicationDetails)
    });

    if(!post.ok) return //create toast

  } catch (er) {
    console.error('trouble saving application', er)
    // create toast
  }
}