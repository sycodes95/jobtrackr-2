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

import LoyaltyIcon from '@mui/icons-material/Loyalty';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { formatDateToReadable } from "@/utils/formatDateToReadable"
import { ArrowUpDown } from "lucide-react"
import { caseInsensitiveSort } from "../utils/caseInsensitiveSort"
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
    header: ({ column }) => {
      return (
        <Button
          className="text-xs"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown fontSize={'small'} className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({row}) => {
      const date: string = row.getValue('apply_date');
      return <span className="w-full text-center">{date ? formatDateToReadable(date) : 'n/a'}</span>
    }
  },
  {
    accessorKey: "company_name",
    header: ({ column }) => {
      return (
        <Button
          className="text-xs"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown fontSize={'small'} className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return <span className=" font-medium  overflow-hidden text-ellipsis   ">{row.getValue('company_name')}</span>
    },
    sortingFn: 'text'
    
  },
  
  {
    id: "favorite",
    accessorKey: "favorite",
    header: ({ column }) => {
      return (
        <Button
          className="text-xs"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Favorite
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      return (

        <>
          {
          row.getValue('favorite') ?
          <FavoriteIcon className="text-red-500" fontSize="small"/>
          :
          <FavoriteBorderIcon className="text-zinc-400" fontSize="small"/>
          }
        </>
      )
    }
  },
  {
    accessorKey: "apply_method",
    header: "Apply Method",
    cell: ({ row }) => {
      return <span>{row.getValue('apply_method')}</span>
    },
  },
  
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "fit_rating",
    header: "Fit Rating",
    cell: ({ row }) => {
      return (
        <Rating
        className="text-emerald-400"
          color="text-emerald-400"
          size="small"
          value={row.getValue('fit_rating')}
          readOnly
        />
      )
    }
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
    accessorKey: "offer_amount",
    header: "Offer Amount",
  },
  {
    accessorKey: "rejected",
    header: "Rejected",
  },
  {
    accessorKey: "company_website",
    header: "Website",
    cell: ({ row }) => {
      return <Button className="text-left font-medium max-w-20 bg-background hover:text-zinc-400 text-xl hover:bg-accent text-foreground overflow-hidden text-ellipsis " onClick={()=> copyToClip(row.getValue('company_website'))}>{<ContentPasteIcon fontSize="inherit"/>}</Button>
    },
  },
  {
    accessorKey: "apply_url",
    header: "Apply URL",
    cell: ({ row }) => {
      return <Button className="text-left font-medium max-w-20 bg-background hover:text-zinc-400 text-xl hover:bg-accent text-foreground overflow-hidden text-ellipsis " onClick={()=> copyToClip(row.getValue('apply_url'))}>{<ContentPasteIcon fontSize="inherit"/>}</Button>
    },
  },
  {
    id: "misc",
    accessorKey: "misc",
    header: () => <div className="text-center max-w-20">Misc</div>,
    cell: ({ row }) => {
      const contactName: string = row.getValue('contact_name')
      const contactEmail: string = row.getValue('contact_email')
      const contactPhone: string = row.getValue('contact_phone')
      const notes: string = row.getValue('notes')
      
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

            <span className="text-xs font-bold p-2 border-b border-border">Notes</span>
            <div className="p-2 text-xs flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span>{notes}</span>
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
      return
    },
    cell: () => {
      return
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
