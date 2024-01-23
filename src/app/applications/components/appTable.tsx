'use client'

import { useEffect, useState } from "react";
import { columns } from "./appTableCols";
import { DataTable } from "./dataTable";
import { ApplicationDetails } from "../types/types";
import useUserId from "@/app/hooks/useUserId";
import { getAllApps } from "../services/getAllApps";

export default function AppTable () {
  const userId = useUserId()
  const [applications, setApplications] = useState<ApplicationDetails[]>([])

  useEffect(() => {
    if(userId){
      getAllApps(userId).then(apps => setApplications(apps))
    }
  },[userId])
  return (
    <DataTable columns={columns} data={applications}/>
  ) 
  
}