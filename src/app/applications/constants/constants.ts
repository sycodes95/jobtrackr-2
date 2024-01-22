import { ApplicationDetails } from "../types/types"

export const defaultApplicationDetails: ApplicationDetails  = {
  company_name: { value: '', label: 'Company Name *', type: 'inputText' },
  company_website: { value: '', label: 'Company Website', type: 'inputText' },
  favorite: { value: false, label: 'Favorite', type: 'checkbox' },
  apply_date: { value: undefined, label: 'Apply Date', type: 'date' },
  apply_method: { value: '', label: 'Apply Method', type: 'select' },
  apply_url: { value: '', label: 'Apply URL', type: 'inputText' },
  position: { value: '', label: 'Position', type: 'inputText' },
  fit_rating: { value: null, label: 'Fit Rating', type: 'rating' },
  location: { value: '', label: 'Location', type: 'select' },
  interview_date: { value: undefined, label: 'Interview Date', type: 'date' },
  offer: { value: false, label: 'Offer', type: 'checkbox' },
  offer_amount: { value: undefined, label: 'Offer Amount', type: 'inputNumber' },
  offer_accepted: { value: false, label: 'Offer Accepted', type: 'checkbox' },
  rejected: { value: '', label: 'Rejected', type: 'select' },
  contact_name: { value: '', label: 'Contact Name', type: 'inputText' },
  contact_email: { value: '', label: 'Contact Email', type: 'inputText' },
  contact_phone: { value: '', label: 'Company Phone', type: 'inputText' },
  notes: { value: '', label: 'Notes', type: 'textArea' },
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