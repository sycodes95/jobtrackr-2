"use client"
import { useEffect, useState } from "react"
import EditNoteIcon from '@mui/icons-material/EditNote';

import {
  SheetClose,
  SheetHeader,
  SheetTitle,
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
import { isDate } from "date-fns";
import { defaultApplicationDetails, selectOptions } from "../constants/constants";
import { ApplicationDetails } from "../types/types";

export default function ApplicationForm () {

  const [applicationDetails, setApplicationDetails] = useState<ApplicationDetails>(defaultApplicationDetails);

  const handleInputChange = <T extends keyof ApplicationDetails>(
    key: T,
    value: ApplicationDetails[T]['value']
  ) => {
    setApplicationDetails((prev) => { return { ...prev, [key]: {...prev[key], value: value }}})
  }

  const resetApplicationDetails = () => {
    setApplicationDetails(defaultApplicationDetails)
  }
  
  const createInput = <T extends keyof ApplicationDetails>(
    key: T,
    details: ApplicationDetails[T]
  ) => {
    
    switch(details.type) {
      case 'inputText': 
        return (
          <FormItem key={key}>
            <Label>{details.label}</Label>
            <Input className="border border-border" name="company_name" type="text" 
            value={typeof details.value !== 'string' ? '' : details.value} placeholder="..." 
            required={key === 'company_name' ? true: false}
            onChange={(e) => handleInputChange(key, e.target.value)}></Input>
          </FormItem>
        )
      case 'inputNumber': 
        return (
          <FormItem key={key}>
            <Label>{details.label}</Label>
            <Input className="border border-border" name="company_name" type="number" 
            value={typeof details.value !== 'number' ? undefined : details.value} placeholder="..."
            onChange={(e) => handleInputChange(key, e.target.value)}></Input>
          </FormItem>
        )
      case 'checkbox': 
        return (
          <FormItem key={key}>
            <Label>{details.label}</Label>
            <div className="flex h-full items-center">

              <Checkbox 
              checked={typeof details.value !== 'boolean' ? false : details.value} 
              onCheckedChange={(value) => handleInputChange(key, value)}
              />
            </div>
          </FormItem>
        )
      case 'date':
        return (
          <div className="flex flex-col gap-2">
            <Label>{details.label}</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={
                  ` w-full justify-start text-left font-normal border border-border",
                    ${!details.value && "text-muted-foreground pl-2 pr-2" }`
                  }
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {isDate(details.value) ? formatDate(details.value , "PPP") : <span>...</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={isDate(details.value) ? details.value : undefined}
                  onSelect={(value) => handleInputChange(key, value)}
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
          <div className="flex flex-col gap-2">
            <Label>{details.label}</Label>
            <Select>
              <SelectTrigger className="w-full border border-border">
                <SelectValue placeholder="..." />
              </SelectTrigger>
              <SelectContent>
                
                {
                selectOptions[keystring].map((option) => (
                  <SelectItem className="hover:cursor-pointer focus:bg-foreground/15" key={option} value={option}>
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
          <div className="flex flex-col gap-2">
            <Label>{details.label}</Label>
            <div className="h-full flex items-center">
              <Rating
                className="w-fit text-emerald-400"
                name="simple-controlled"
                value={typeof details.value !== 'number' ? null : details.value}
                onChange={(event, newValue) => {
                  handleInputChange(key, newValue)
                }}
              />
            </div>
          </div>
        )

      case 'textArea':
        return (
          <div className="flex flex-col gap-2">
            <Label>{details.label}</Label>
            <Textarea 
            value={typeof details.value === 'string' ? details.value : ''} 
            onChange={(e)=> handleInputChange(key, e.target.value)}
            />
          </div>
        )

        
    }
  }

  return (
    <div className="relative flex flex-col flex-wrap w-full text-primary z-[60]">
      <div className="top-0 sticky bg-foreground/90 h-6 rounded-t-lg w-full"></div>
      <SheetHeader className="p-4 flex items-center border-b border-b-border justify-start w-full">
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
        <div className="w-full flex justify-end col-span-full items-center gap-4">
          <SheetClose>
            <Button className="bg-accent hover:bg-accent" type="submit">Close</Button>
          </SheetClose>
          <Button className="" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  )
}