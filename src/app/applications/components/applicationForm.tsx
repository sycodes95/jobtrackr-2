"use client"
import { useState } from "react"
import EditNoteIcon from '@mui/icons-material/EditNote';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

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

interface ApplicationDetails {
  company_name: string;
  company_website: string;
  favorite: boolean;
  apply_date: null | Date;
  apply_method: 'Company Website' | 'Job Board' | 'Recruiter' | 'Referral' | 'Email' | 'Other' | '';
  apply_URL: string;
  position: string;
  fit_rating: null | number;
  location: 'On Site' | 'Remote' | 'Hybrid' | 'Optional' | '';
  interview_date: null | Date;
  offer: boolean;
  offer_amount: null | number;
  offer_accepted: boolean;
  rejected: 'From Response' | 'After Interview' | 'After Offer' | 'Other' | '';
  contact_name: string;
  contact_email: string;
  contact_phone: string;
  notes: string;
}


export default function ApplicationForm () {

  const defaultApplicationDetails: ApplicationDetails = {
    company_name: '',
    company_website: '',
    favorite: false,
    apply_date: null,
    apply_method: '',
    apply_URL: '',
    position: '',
    fit_rating: null,
    location: '',
    interview_date: null,
    offer: false,
    offer_amount: null,
    offer_accepted: false,
    rejected: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    notes: '',
  }

  const [applicationDetails, setApplicationDetails] = useState<ApplicationDetails>(defaultApplicationDetails);

  const resetApplicationDetails = () => {
    setApplicationDetails(defaultApplicationDetails)
  }

  const handleInputChange = (value) => {

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
        <FormItem>
          <Label>Company Name</Label>
          <Input className="border border-border" name="company_name" 
          value={applicationDetails.company_name} placeholder="..." 
          onChange={(e) => handleInputChange(e.target.value)}></Input>
        </FormItem>
        
      </form>
    </div>
  )
}