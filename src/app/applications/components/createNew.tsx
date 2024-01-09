"use client"

import { useState } from "react"

interface JobAppDetails {
  companyName: string;
  companyWebsite: string;
  favorite: boolean;
  applyDate: null | Date;
  applyMethod: 'Company Website' | 'Job Board' | 'Recruiter' | 'Referral' | 'Email' | 'Other' | '';
  applyURL: string;
  position: string;
  fitRating: null | number;
  location: 'On Site' | 'Remote' | 'Hybrid' | 'Optional' | '';
  interviewDate: null | Date;
  offer: boolean;
  offerAmount: null | number;
  offerAccepted: boolean;
  rejected: 'From Response' | 'After Interview' | 'After Offer' | 'Other' | '';
}


export default function CreateNew () {


  const [jobAppDetails, setJobAppDetails] = useState<JobAppDetails>({
    companyName: '',
    companyWebsite: '',
    favorite: false,
    applyDate: null,
    applyMethod: '',
    applyURL: '',
    position: '',
    fitRating: null,
    location: '',
    interviewDate: null,
    offer: false,
    offerAmount: null,
    offerAccepted: false,
    rejected: ''

  });

  return (
    <div className="">
      
    </div>
  )
}