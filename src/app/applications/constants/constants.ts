import { ApplicationDetails } from "../types/types"


export const defaultApplicationDetails: ApplicationDetails  = {
  company_name: '', 
  company_website: '', 
  favorite: false, 
  apply_date: undefined, 
  apply_method: '', 
  apply_url: '', 
  position: '', 
  fit_rating: null, 
  location: '', 
  interview_date: undefined, 
  offer_amount: undefined, 
  rejected: '', 
  contact_name: '', 
  contact_email: '', 
  contact_phone: '', 
  notes: '', 
}

export const applicationDetailsFormAttr  = {
  company_name: {  label: 'Company Name *', type: 'inputText' },
  company_website: {  label: 'Company Website', type: 'inputText' },
  favorite: {  label: 'Favorite', type: 'checkbox' },
  apply_date: {  label: 'Apply Date', type: 'date' },
  apply_method: {  label: 'Apply Method', type: 'select' },
  apply_url: {  label: 'Apply URL', type: 'inputText' },
  position: {  label: 'Position', type: 'inputText' },
  fit_rating: { label: 'Fit Rating', type: 'rating' },
  location: {  label: 'Location', type: 'select' },
  interview_date: {  label: 'Interview Date', type: 'date' },
  offer_amount: {  label: 'Offer Amount', type: 'inputNumber' },
  rejected: {  label: 'Rejected', type: 'select' },
  contact_name: {  label: 'Contact Name', type: 'inputText' },
  contact_email: {  label: 'Contact Email', type: 'inputText' },
  contact_phone: {  label: 'Company Phone', type: 'inputText' },
  notes: {  label: 'Notes', type: 'textArea' },
}


export const selectOptions: {[key: string] : string[]} = {
  apply_method: [
    'Company Website', 'Job Board', 'Recruiter', 'Referral', 'Email', 'Other'
  ],
  location: [
    'On Site', 'Remote', 'Hybrid', 'Optional'
  ],
  rejected: [
    'From Response', 'After Interview', 'After Offer', 'Other'
  ]
}