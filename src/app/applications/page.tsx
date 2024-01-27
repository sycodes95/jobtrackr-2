
'use client'

import PageContainer from "../components/pageContainer";
import PageHeader from "../components/pageHeader";
import FeedIcon from '@mui/icons-material/Feed';
import AppModal from "./components/appModal";
import AppTable from "./components/appTable";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import ApplicationForm from "./components/applicationForm";
import { Button } from "@/components/ui/button";


export default function Applications () {
  return (
    <PageContainer>
      <div className="flex flex-col gap-8 w-full">
        <PageHeader title="Applications">
          <FeedIcon />
        </PageHeader>
        <Sheet>
          <SheetTrigger className="w-fit flex justify-start">
            <Button className="p-0" variant={`ghost`}>
              <span className="p-2 border font-bold rounded-lg border-primary text-sm text-primary">Create New +</span>
            </Button>
          </SheetTrigger>
          <SheetContent side={'bottom'} className="min-h-[69%] max-w-7xl w-full border-2 border-border p-4 rounded-lg ">
            <ApplicationForm />
          </SheetContent>
        </Sheet>
        <AppTable />
      </div>
    </PageContainer>
  )
}
