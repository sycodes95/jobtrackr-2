'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import ApplicationForm from "./applicationForm"

export default function AppModal () {
  return (
    <Sheet>
      <SheetTrigger className="w-full flex justify-start">
        <span className="p-2 border font-bold rounded-lg border-primary text-sm text-primary">Create New +</span>
      </SheetTrigger>
      <SheetContent side={'bottom'} className="min-h-[69%] max-w-7xl w-full border-2 border-primary/50 p-4 rounded-lg ">
        <ApplicationForm />
      </SheetContent>
    </Sheet>
  )
}