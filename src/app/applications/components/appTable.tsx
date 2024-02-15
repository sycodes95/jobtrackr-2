'use client'

import { useEffect, useState } from "react";
import { DataTable } from "./dataTable";
import { ApplicationDetails } from "../types/types";
import useUserId from "@/app/hooks/useUserId";
import { getAllApps } from "../services/getAllApps";

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { copyToClip } from "@/app/utils/copyToClip"

import ContentPasteIcon from '@mui/icons-material/ContentPaste';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import * as React from 'react';
import { formatDateToReadable } from "@/utils/formatDateToReadable"
import { ArrowUpDown } from "lucide-react"
import { fitRatingColor } from "../utils/fitRatingColor"

import { Checkbox } from "@/components/ui/checkbox"

import { MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import ApplicationForm from "./applicationForm"
import { deleteApplications } from "../services/deleteApps"
import useApps from "@/app/hooks/useApps";
import AppMisc from "@/app/components/appMisc";

export default function AppTable () {

  const { applications, setApplications } = useApps();

  const columns: ColumnDef<ApplicationDetails>[] = [
    {
      id: "actions",
      cell: ({ row }) => {
        const appDetails = row.original;
        const appId = row.original.app_id;
        const userId = row.original.user_id;
        return (
          <Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger className="h-8 w-8 p-0 hover:cursor-pointer" asChild>
                <div className="flex h-full items-center w-full justify-center">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card" align="end">
                <DropdownMenuLabel className="border-b">Actions</DropdownMenuLabel>
                <DropdownMenuItem className=" w-full h-full">
                  <SheetTrigger className="w-full h-full flex">
                    <span>Edit</span>
                  </SheetTrigger>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:cursor-pointer" onClick={async ()=> {
                  await deleteApplications(appId ? [appId] : [], userId ? userId : undefined)
                  if(userId) getAllApps(userId).then(apps => setApplications(apps));
                } }>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <SheetContent side={'bottom'} className="min-h-[69%] max-w-7xl w-full border-2 border-border p-4 rounded-lg ">
              <ApplicationForm appDetails={appDetails}/>
            </SheetContent>
          </Sheet>
        )
      },
    },
    {
      id: "select",
      header: ({ table }) => (
        <div className="flex h-full items-center p-2 justify-center">
          <Checkbox
            className=""
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        </div>
        
      ),
      cell: ({ row }) => {

        const selectedRows = row.getIsSelected();
        return (
          <div className="flex h-full items-center p-2">
            <Checkbox
              checked={selectedRows}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />

          </div>
        )
      },
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "apply_date",
      header: ({ column }) => {
        return (
          <Button
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date
            <ArrowUpDown fontSize={'small'} className="ml-1 h-3 w-3" />
          </Button>
        )
      },
      cell: ({row}) => {
        const date: string = row.getValue('apply_date');
        return <span className="w-full text-center">{date ? formatDateToReadable(date) : 'n/a'}</span>
      },
      sortingFn: 'datetime',
    },
    {
      accessorKey: "company_name",
      header: ({ column }) => {
        return (
          <Button
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown fontSize={'small'} className="ml-1 h-3 w-3" />
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
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Fav
            <ArrowUpDown className="ml-1 h-3 w-3" />
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
      header: ({ column }) => {
        return (
          <Button
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Method
            <ArrowUpDown fontSize={'small'} className="ml-1 h-3 w-3" />
          </Button>
        )
      },
      cell: ({ row }) => {
        return <span>{row.getValue('apply_method')}</span>
      },
      sortingFn: 'text'
    },
    
    {
      accessorKey: "position",
      header: ({ column }) => {
        return (
          <Button
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Position
            <ArrowUpDown fontSize={'small'} className="ml-1 h-3 w-3" />
          </Button>
        )
      },
      cell: ({ row }) => {
        return <span>{row.getValue('position')}</span>
      },
      sortingFn: 'text'
    },
    {
      accessorKey: "fit_rating",
      header: ({ column }) => {
        return (
          <Button
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Fit
            <ArrowUpDown fontSize={'small'} className="ml-1 h-3 w-3" />
          </Button>
        )
      },
      cell: ({ row }) => {

        const fitRating = row.getValue('fit_rating')
        return (
          // <Rating
          // className="text-emerald-400"
          //   color="text-emerald-400"
          //   size="small"
          //   value={row.getValue('fit_rating')}
          //   readOnly
          // />
          <>
            {
            fitRating && typeof fitRating === 'number' ?
            <span className={`${fitRatingColor(fitRating)} font-bold`}><em>{fitRating} / 5</em></span>
            :
            <span>n/a</span>
            }
          </>
        )
      }
    },
    {
      accessorKey: "location",
      header: ({ column }) => {
        return (
          <Button
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Location
            <ArrowUpDown fontSize={'small'} className="ml-1 h-3 w-3" />
          </Button>
        )
      },
    },
    {
      accessorKey: "interview_date",
      header: ({ column }) => {
        return (
          <Button
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Interview
            <ArrowUpDown fontSize={'small'} className="ml-1 h-3 w-3" />
          </Button>
        )
      },
      cell: ({row}) => {
        const date: string = row.getValue('interview_date');
        return <span className="w-full text-center">{date ? formatDateToReadable(date) : 'n/a'}</span>
      },
      sortingFn: 'datetime'
    },
    {
      accessorKey: "offer_amount",
      header: ({ column }) => {
        return (
          <Button
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Offer $
            <ArrowUpDown fontSize={'small'} className="ml-1 h-3 w-3" />
          </Button>
        )
      },
    },
    {
      accessorKey: "rejected",
      header: ({ column }) => {
        return (
          <Button
            className="text-xs p-0 w-full h-full"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Rejected
            <ArrowUpDown className="ml-1 h-3 w-3" />
          </Button>
        )
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
        const cWebsiteUrl: string = row.getValue('company_website')
        const applyUrl: string = row.getValue('apply_url')

        
        return (
         <AppMisc 
          contactName={contactName}
          contactEmail={contactEmail}
          contactPhone={contactPhone}
          notes={notes}
          applyUrl={cWebsiteUrl}
          cWebsiteUrl={applyUrl}
          />
        )
      },
    },
    {
      accessorKey: "apply_url",
      header: () => {
        return
      },
      cell: () => {
        return
      }
    },
    {
      accessorKey: "company_website",
      header: () => {
        return
      },
      cell: () => {
        return
      }
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
    
  ];

  return (
    <DataTable columns={columns} data={applications} setData={setApplications}/>
  );
  
};