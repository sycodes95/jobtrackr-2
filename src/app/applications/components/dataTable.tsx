"use client"

import {
  Cell,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
  getPaginationRowModel,
  ColumnFiltersState,
  getFilteredRowModel
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { ApplicationDetails } from "../types/types"
import { useEffect, useState } from "react"
import { DataTablePagination } from "./dataTablePagination"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {

  const [sorting, setSorting] = useState<SortingState>([]);

  const [rowSelection, setRowSelection] = useState({});

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      rowSelection,
      columnFilters
    },
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });

  const hiddenCols = ['apply_url', 'company_website', 'notes', 'contact_name', 'contact_email', 'contact_phone'];
  
  const colIsHidden = (cellColId: string) => {
    if(hiddenCols.includes(cellColId)){
      return true
    }
    return false
  };

  const applicationStatus = (original : ApplicationDetails) => {
    if(original.rejected) {
      return 'border-red-500'
    } else if (original.offer_amount){
      return 'border-yellow-500'
    } else if (original.interview_date) {
      return 'border-blue-400'
    } else {
      return 'border-zinc-400'
    }
  };

  
  const isSmallColumn = (columnId: string) => {
    if(columnId === 'select' || columnId === 'actions'){
      return true;
    }
    return false;
  }
  useEffect(()=> {
    console.log(rowSelection);
  },[rowSelection])

  return (

    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between py-4">
        <div></div>
        <Input
          placeholder="Filter Company..."
          value={(table.getColumn("company_name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("company_name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm border border-border"
        />
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table className="lg:table-fixed">
          <TableHeader className="">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  if(!colIsHidden(header.column.id)) {
                    return (
                      <TableHead className={`text-xs text-center whitespace-nowrap  ${isSmallColumn(header.column.id) && ' !w-10 p-2 '} `} key={header.id}>
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
                  className="border-l-4 whitespace-nowrap text-center text-primary "
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    if(!colIsHidden(cell.column.id)) {
                      return <TableCell className={`text-xs text-center p-2  overflow-hidden text-ellipsis pt-1 pb-1 ${index === 0 && 'border-l-4 '} ${index === 0 && applicationStatus(cell.row.original as ApplicationDetails)}`} key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                    }
                  })}
                </TableRow>
                
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length - hiddenCols.length} className="h-24 text-center w-full">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        
      </div>
      <DataTablePagination table={table}/>
    </div>
    
  )
}
