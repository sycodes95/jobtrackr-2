"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ApplicationDetails } from "../types/types"

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
    accessorKey: "company_name",
    header: () => <div className="text-left max-w-20">Company Name</div>,
    cell: ({ row }) => {
      
 
      return <div className="text-left font-medium max-w-20 overflow-hidden text-ellipsis ">{row.getValue('company_name')}</div>
    },
  },
  {
    accessorKey: "company_website",
    header: "Company Site",
  },
  {
    accessorKey: "favorite",
    header: "Favorite",
  },
  {
    accessorKey: "apply_date",
    header: "Apply Date",
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
    accessorKey: "offer_accepted",
    header: "Offer Accepted",
  },
  {
    accessorKey: "rejected",
    header: "Rejected",
  },
  {
    accessorKey: "contact_name",
    header: "Contact Name",
  },
  {
    accessorKey: "contact_email",
    header: "Contact Email",
  },
  {
    accessorKey: "contact_phone",
    header: "Contact Phone",
  },
  {
    accessorKey: "notes",
    header: "Notes",
  },
]
