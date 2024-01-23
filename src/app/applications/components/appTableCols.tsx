"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ApplicationDetails } from "../types/types"
import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { copyToClip } from "@/app/utils/copyToClip"

import ContentPasteIcon from '@mui/icons-material/ContentPaste';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

export const columns: ColumnDef<ApplicationDetails>[] = [
  {
    accessorKey: "apply_date",
    header: "Apply Date",
  },
  {
    accessorKey: "company_name",
    header: () => <div className="text-left max-w-20">Company Name</div>,
    cell: ({ row }) => {
      return <div className="text-left font-medium max-w-20 overflow-hidden text-ellipsis ">{row.getValue('company_name')}</div>
    },
  },
  {
    accessorKey: "company_website",
    header: "Company Site",
    cell: ({ row }) => {
      return <Button className="text-left font-medium max-w-20 bg-background hover:text-zinc-400 hover:bg-accent text-foreground overflow-hidden text-ellipsis " onClick={()=> copyToClip(row.getValue('company_website'))}>{<ContentPasteIcon/>}</Button>
    },
  },
  {
    accessorKey: "favorite",
    header: "Favorite",
  },
  {
    accessorKey: "apply_method",
    header: "Apply Method",
  },
  {
    accessorKey: "apply_url",
    header: "Apply URL",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "fit_rating",
    header: "Fit Rating",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "interview_date",
    header: "Interview Date",
  },
  {
    accessorKey: "offer",
    header: "Offer",
  },
  {
    accessorKey: "offer_amount",
    header: "Offer Amount",
  },
  {
    accessorKey: "rejected",
    header: "Rejected",
  },
  {
    id: "contact_info",
    accessorKey: "contact_info",
    header: () => <div className="text-left max-w-20">Contact</div>,
    cell: ({ row }) => {
      const contactName: string = row.getValue('contact_name')
      const contactEmail: string = row.getValue('contact_email')
      const contactPhone: string = row.getValue('contact_phone')

      return (
        <Popover>
          <PopoverTrigger>
            <Button className="text-left text-xs w-12 h-8 overflow-hidden text-ellipsis bg-foreground text-background" variant={'outline'}>View</Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2">
            <span className="text-xs font-bold p-2 border-b border-border">Contact Info</span>
            <div className="p-2 text-xs flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="">Company Name:</span>
                <span>{contactName}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="">Company Email:</span>
                <span>{contactEmail}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="">Company Phone:</span>
                <span>{contactPhone}</span>
              </div>

            </div>

          </PopoverContent>
        </Popover>
      )
    },
  },
  {
    accessorKey: "notes",
    header: () => {
      return <div>Notes</div>
    },
    cell: ({ row }) => {

      return (
        <Popover>
          <PopoverTrigger>
            <Button className="text-left text-xs w-12 h-8 overflow-hidden text-ellipsis bg-foreground text-background" variant={'outline'}>View</Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col gap-2">
            <span className="text-xs font-bold p-2 border-b border-border">Notes</span>
            <div className="p-2 text-xs flex flex-col gap-2">
              {row.getValue("notes")}
            </div>

          </PopoverContent>
        </Popover>
      )
    }
  },

  //Hidden cols
  {
    id: "contact_name",
    accessorKey: "contact_name",
    header: () => {
      return
    },
    cell: () => {
      return
    }

  },
  {
    id: "contact_email",
    accessorKey: "contact_email",
    header: () => {
      return
    },
    cell: () => {
      return
    }

  },
  {
    id: "contact_phone",
    accessorKey: "contact_phone",
    header: () => {
      return 
    },
    cell: () => {
      return
    }

  },
  
]
