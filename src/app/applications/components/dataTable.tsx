"use client"

import {
  Cell,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ApplicationDetails } from "../types/types"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const colIsHidden = (cellColId: string | number) => {
    if(cellColId !== "contact_email" && cellColId !== "contact_phone" && cellColId !== "contact_name" ){
      return false
    }
    return true
  };

  const applicationStatus = (original : ApplicationDetails) => {
    if(original.rejected) {
      return 'border-red-500'
    } else if (original.offer){
      return 'border-yellow-500'
    } else if (original.interview_date) {
      return 'border-blue-400'
    } else {
      return 'border-zinc-400'
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                if(!colIsHidden(header.column.id)) {
                  return (
                    <TableHead className="text-xs text-center" key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )

                }
                
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              
                <TableRow
                  className="border-l-4 border-yellow-700"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    if(!colIsHidden(cell.column.id)) {
                      console.log(cell.column.id);
                      return <TableCell className={`text-xs text-center ${index === 0 && 'border-l-4'} ${index === 0 && applicationStatus(cell.row.original as ApplicationDetails)}`} key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                    }
                    
                      
                  })}
                </TableRow>
              
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
