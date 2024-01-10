"use client"
import { useEffect, useState } from "react"
import EditNoteIcon from '@mui/icons-material/EditNote';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import FormItem from "./formItem";

import Rating from '@mui/material/Rating';

interface ApplicationDetails {
  company_name: FieldDetails<string>;
  company_website: FieldDetails<string>;
  favorite: FieldDetails<boolean>;
  apply_date: FieldDetails<Date | null>;
  apply_method: FieldDetails<'Company Website' | 'Job Board' | 'Recruiter' | 'Referral' | 'Email' | 'Other' | ''>;
  apply_URL: FieldDetails<string>;
  position: FieldDetails<string>;
  fit_rating: FieldDetails<number | null>;
  location: FieldDetails<'On Site' | 'Remote' | 'Hybrid' | 'Optional' | ''>;
  interview_date: FieldDetails<Date | null>;
  offer: FieldDetails<boolean>;
  offer_amount: FieldDetails<number | null>;
  offer_accepted: FieldDetails<boolean>;
  rejected: FieldDetails<'From Response' | 'After Interview' | 'After Offer' | 'Other' | ''>;
  contact_name: FieldDetails<string>;
  contact_email: FieldDetails<string>;
  contact_phone: FieldDetails<string>;
  notes: FieldDetails<string>;
}

interface FieldDetails<T> {
  value: T;
  label: string;
  type: FieldType;
}

type FieldType =
  | 'inputText'
  | 'checkbox'
  | 'date'
  | 'select'
  | 'rating'
  | 'inputNumber'
  | 'textArea'



export default function ApplicationForm () {

  //input text
  //input number
  //check box
  //date selector
  //selector
  //textarea 
  //rating

  const defaultApplicationDetails: ApplicationDetails = {
    company_name: { value: '', label: 'Company Name *', type: 'inputText' },
    company_website: { value: '', label: 'Company Website', type: 'inputText' },
    favorite: { value: false, label: 'Favorite', type: 'checkbox' },
    apply_date: { value: null, label: 'Apply Date', type: 'date' },
    apply_method: { value: '', label: 'Apply Method', type: 'select' },
    apply_URL: { value: '', label: 'Apply URL', type: 'inputText' },
    position: { value: '', label: 'Position', type: 'inputText' },
    fit_rating: { value: null, label: 'Position', type: 'rating' },
    location: { value: '', label: 'Location', type: 'select' },
    interview_date: { value: null, label: 'Interview Date', type: 'date' },
    offer: { value: false, label: 'Offer', type: 'checkbox' },
    offer_amount: { value: null, label: 'Offer Amount', type: 'inputNumber' },
    offer_accepted: { value: false, label: 'Offer Accepted', type: 'checkbox' },
    rejected: { value: '', label: 'Rejected', type: 'select' },
    contact_name: { value: '', label: 'Contact Name', type: 'inputText' },
    contact_email: { value: '', label: 'Contact Email', type: 'inputText' },
    contact_phone: { value: '', label: 'Company Phone', type: 'inputText' },
    notes: { value: '', label: 'Company Name *', type: 'textArea' },
  }

  const [applicationDetails, setApplicationDetails] = useState<ApplicationDetails>(defaultApplicationDetails);

  const resetApplicationDetails = () => {
    setApplicationDetails(defaultApplicationDetails)
  }

  const handleInputChange = <T extends keyof ApplicationDetails>(
    key: T,
    value: ApplicationDetails[T]['value']
  ) => {
    setApplicationDetails((prev) => { return { ...prev, [key]: {...prev[key], value: value }}})
  }

  useEffect(() => {
    
    
  },[applicationDetails])

  const createInput = <T extends keyof ApplicationDetails>(
    key: T,
    details: ApplicationDetails[T]
  ) => {
    
    switch(details.type) {
      case 'inputText': 
        return (
          <FormItem key={key}>
            <Label>{details.label}</Label>
            <Input className="border border-border" name="company_name" 
            value={typeof details.value !== 'string' ? '' : details.value} placeholder="..." required
            onChange={(e) => handleInputChange(key, e.target.value)}></Input>
          </FormItem>
        )
    }
  }

  return (
    <div className="relative flex flex-col flex-wrap w-full text-primary z-[60]">
      <div className="top-0 sticky bg-coral/50 left-1/2 -translate-x-1/2 h-4 rounded-lg w-1/2"></div>
      <SheetHeader className="p-4 flex items-center border-b border-t border-t-coral/50 border-b-border justify-start w-full">
        <SheetTitle className="flex items-center justify-start w-full">
          <EditNoteIcon className="text-2xl" fontSize="inherit" />
          <span className="font-inter-tight-display text-xl p-2 flex items-center"> Add / Edit Application Details</span>
        </SheetTitle>
      </SheetHeader>

      <form className="grid grid-cols-3 gap-4 p-4">

        {
        Object.entries(applicationDetails).map(([key, details]) => (
          createInput(key as keyof ApplicationDetails, details)
        ))
        }
        {/* <FormItem>
          <Label>Company Name *</Label>
          <Input className="border border-border" name="company_name" 
          value={applicationDetails.company_name} placeholder="..." required
          onChange={(e) => handleInputChange(e.target.name, e.target.value)}></Input>
        </FormItem> */}
        
      </form>
    </div>
  )
}