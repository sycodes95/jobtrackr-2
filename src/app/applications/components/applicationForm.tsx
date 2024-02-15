"use client"
import { FormEvent, useEffect, useState } from "react"
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Oval } from 'react-loader-spinner'

import {
  Sheet,
  SheetClose,
  SheetHeader,
  SheetTitle,
  SheetContent
} from "@/components/ui/sheet"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import FormItem from "./formItem";

import Rating from '@mui/material/Rating';
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

import { Textarea } from "@/components/ui/textarea"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Calendar as CalendarIcon } from "lucide-react"
import { formatDate } from "@/utils/formatDate";
import { isDate, parseISO } from "date-fns";
import { applicationDetailsFormAttr, defaultApplicationDetails, selectOptions } from "../constants/constants";
import { ApplicationDetails } from "../types/types";
import { submitApp } from "../services/submitApp";
import useUserId from "@/app/hooks/useUserId";
import { usePathname } from 'next/navigation';
import { appLabelIcons } from "../constants/appLabelIcons";

interface ApplicationFormProps {
  appDetails?: ApplicationDetails;
  mode?: 'edit' | 'create'
}
export default function ApplicationForm ( 
  { 
    appDetails,
    mode = 'create' 
  } 
  : ApplicationFormProps 
) {
  const userId = useUserId()
  const [applicationDetails, setApplicationDetails] = useState<ApplicationDetails>(appDetails ? appDetails : defaultApplicationDetails);
  const [submitIsLoading, setSubmitIsLoading] = useState(false)

  const handleInputChange = <T extends keyof ApplicationDetails>(
    key: T,
    value: ApplicationDetails[T]
  ) => {
    setApplicationDetails((prev) => ({ ...prev, [key]: value}))
  }

  const resetApplicationDetails = () => {
    setApplicationDetails(defaultApplicationDetails)
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitIsLoading(true)
    if(userId) {
      await submitApp(applicationDetails, userId);
      window.location.reload();
    }
    setSubmitIsLoading(false)
  }
  
  const createInput = <T extends keyof ApplicationDetails & keyof typeof applicationDetailsFormAttr>(
    key: T,
    value: ApplicationDetails[T]
  ) => {

    switch(applicationDetailsFormAttr[key].type) {
      case 'inputText': 
        return (
          <FormItem key={key}>
            <Label className="flex items-center gap-2">
              {appLabelIcons[key]}
              <span>{applicationDetailsFormAttr[key].label}</span>
            </Label>
            <Input id={key} className="border border-border" name="company_name" type="text" 
            value={typeof value !== 'string' ? '' : value} placeholder="..." 
            required={key === 'company_name' ? true: false}
            onChange={(e) => handleInputChange(key, e.target.value as ApplicationDetails[T])}></Input>
          </FormItem>
        )
      case 'inputNumber': 
        return (
          <FormItem key={key}>
            <Label className="flex items-center gap-2">
              {appLabelIcons[key]}
              <span>{applicationDetailsFormAttr[key].label}</span>
            </Label>
            <Input id={key} className="border border-border" name="company_name" type="number"  
            value={typeof value !== 'number' ? undefined : value} placeholder="..."
            onChange={(e) => handleInputChange(key, e.target.value ? e.target.value as ApplicationDetails[T] : null as ApplicationDetails[T])}></Input>
          </FormItem>
        )
      case 'checkbox': 
        return (
          <FormItem key={key}>
            <Label className="flex items-center gap-2">
              {appLabelIcons[key]}
              <span>{applicationDetailsFormAttr[key].label}</span>
            </Label>
            <div className="flex h-full items-center">

              <Checkbox id={key}
              checked={typeof value !== 'boolean' ? false : value} 
              onCheckedChange={(value) => handleInputChange(key, value as ApplicationDetails[T])}
              />
            </div>
          </FormItem>
        )
      case 'date':
        let date = undefined;
        if(value && typeof value === 'string') {
          date = parseISO(value);
          date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

        } else if(value instanceof Date) {
          date = value
        }
        return (
          <div className="flex flex-col gap-2" key={key}>
            <Label className="flex items-center gap-2">
              {appLabelIcons[key]}
              <span>{applicationDetailsFormAttr[key].label}</span>
            </Label>
            <Popover>
              <PopoverTrigger id={key} >
                <Button
                  id={`${key + '_button'}`}
                  variant={"outline"}
                  type="button"
                  className={
                  ` w-full justify-start text-left font-normal border border-border",
                    ${!value && "text-muted-foreground pl-2 pr-2" }`
                  }
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? formatDate(date , "PPP") : <span>...</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={value === 'string' || value instanceof Date ? new Date(value) : undefined}
                  onSelect={(value) => handleInputChange(key, value as ApplicationDetails[T])}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

          </div>
        
        )
      case 'select':
        //creates string type of key in order to get select options using the key
        const keystring: string = key;
        return (
          <div className="flex flex-col gap-2" key={key}>
            <Label className="flex items-center gap-2">
              {appLabelIcons[key]}
              <span>{applicationDetailsFormAttr[key].label}</span>
            </Label>
            <Select onValueChange={(newValue) => handleInputChange(key, newValue as ApplicationDetails[T])}>
              <SelectTrigger className="w-full border border-border">
                <SelectValue placeholder="..." />
              </SelectTrigger>
              <SelectContent>
                
                {
                selectOptions[keystring].map((option) => (
                  <SelectItem id={key} className="hover:cursor-pointer focus:bg-foreground/15" key={option} value={option}>
                    {option}
                  </SelectItem>
                ))
                }
              </SelectContent>
            </Select>
          </div>
        )
      case 'rating':
        return (
          <div className="flex flex-col gap-2" key={key}>
            <Label className="flex items-center gap-2">
              {appLabelIcons[key]}
              <span>{applicationDetailsFormAttr[key].label}</span>
            </Label>
            <div className="h-full flex items-center">
              <Rating
                id="rating"
                className="w-fit text-emerald-400"
                name="simple-controlled"
                value={typeof value !== 'number' ? null : value}
                onChange={(event, newValue) => {
                  handleInputChange(key, newValue as ApplicationDetails[T])
                }}
              />
            </div>
          </div>
        )

      case 'textArea':
        return (
          <div className="flex flex-col gap-2" key={key}>
            <Label className="flex items-center gap-2">
              {appLabelIcons[key]}
              <span>{applicationDetailsFormAttr[key].label}</span>
            </Label>
            <Textarea 
            data-testid='text-area'
            id="text-area"
            value={typeof value === 'string' ? value : ''} 
            onChange={(e)=> handleInputChange(key, e.target.value as ApplicationDetails[T])}
            />
          </div>
        )

        
    }
  }

  return (
    <Sheet>
      <div className="relative flex flex-col flex-wrap w-full text-primary z-[60]">
        
        <SheetHeader className="p-4 flex items-center border-b border-b-border justify-start w-full">
          <SheetTitle className="flex items-center justify-start w-full">
            <EditNoteIcon className="text-2xl" fontSize="inherit" />
            <span className="font-inter-tight-display text-xl p-2 flex items-center"> Add / Edit Application Details</span>
          </SheetTitle>
        </SheetHeader>
        
        <form className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-y-auto" onSubmit={handleFormSubmit}>
          {
          Object.entries(applicationDetails).map(([key, details]) => {
            if(key !== 'user_id' && key !== 'app_id') {
              return createInput(key as keyof ApplicationDetails & keyof typeof applicationDetailsFormAttr, details)
            }
          })
          }
          <div className="w-full flex justify-end col-span-full items-center gap-4">
            <SheetClose className="w-16 bg-primary h-10 p-2 rounded-md text-secondary text-sm">
              <span className="" >Close</span>
            </SheetClose>
            <Button className="flex items-center justify-center bg-emerald-500 text-background w-24 h-10" variant={`outline`} type="submit">
              {
              submitIsLoading ? 
              <Oval
              visible={true}
              height="25"
              width="25"
              color="#000000"
              secondaryColor="#808080"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
              />
              :
              <span>Submit</span>
              }

            </Button>
          </div>
        </form>
      </div>
    </Sheet>
  )
}