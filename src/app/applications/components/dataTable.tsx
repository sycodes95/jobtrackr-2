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

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { PopoverClose } from "@radix-ui/react-popover";

import { Input } from "@/components/ui/input"

import { ApplicationDetails } from "../types/types"
import React, { useEffect, useState } from "react"
import { DataTablePagination } from "./dataTablePagination"
import { deleteApplications } from "../services/deleteApps"
import { getAllApps } from "../services/getAllApps";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import ApplicationForm from "./applicationForm";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  setData: React.Dispatch<React.SetStateAction<ApplicationDetails[]>>;

}

export function DataTable<TData, TValue>({
  columns,
  data,
  setData
}: DataTableProps<TData, TValue>) {


  const [sorting, setSorting] = useState<SortingState>([]);

  const [rowSelection, setRowSelection] = useState({});

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      rowSelection,
      columnFilters,
    },
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });

  useEffect(()=> {
    // set initial rows per page
    if(table) table.setPageSize(20)
  },[table])
  const hiddenCols = ['apply_url', 'company_website', 'notes', 'contact_name', 'contact_email', 'contact_phone'];
  
  const colIsHidden = (cellColId: string) => {
    if(hiddenCols.includes(cellColId)){
      return true;
    }
    return false;
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
  };
  
  return (

    <div className="flex flex-col gap-4 w-full">
      <div className={`${table.getSelectedRowModel().rows.length > 0 ? 'justify-between' : 'justify-end'} flex items-center`}>
        <div className="w-full flex gap-2 items-center">
          <Sheet>
            <SheetTrigger className="w-fit flex justify-start">
              <div className="p-0 " >
                <span className="p-2 border font-bold rounded-lg bg-primary text-secondary border-primary text-sm hover:bg-primary/90 transition-colors">Create New +</span>
              </div>
            </SheetTrigger>
            <SheetContent side={'bottom'} className="min-h-[69%] max-w-7xl w-full border-2 border-border p-4 rounded-lg ">
              <ApplicationForm />
            </SheetContent>
          </Sheet>
          {
          table.getSelectedRowModel().rows.length > 0 &&
          <Popover>
            <PopoverTrigger className="text-xs p-2 bg-none text-red-400 border border-red-400 rounded-lg text-background h-full" >Delete Selected</PopoverTrigger>
            <PopoverContent className="text-xs">
              <div className="flex w-full flex-col gap-4">
                <span className="w-full border-border p-2 border-b">Are you sure?</span>
                
                <div className="w-full flex items-center justify-end gap-2">
                  <PopoverClose className="text-xs " >
                    Cancel
                  </PopoverClose>
                  <PopoverClose className="text-xs bg-black text-background "  onClick={ async()=> {
                    const selectedOriginals = table.getSelectedRowModel().rows.map((row) => (row.original as ApplicationDetails));
                    const userId = selectedOriginals[0].user_id;
                    const selectedIds = selectedOriginals.map(original => original.app_id ).filter(appId => appId !== undefined);
                    await deleteApplications(selectedIds, userId)
                    if(userId){
                      getAllApps(userId).then(apps => setData(apps));
                      setRowSelection({})
                    } 

                  }}>
                    Confirm
                  </PopoverClose>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          }
        </div>
        
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
