'use client'

import { ApplicationDetails } from "@/app/applications/types/types";
import useApps from "@/app/hooks/useApps"
import { useCallback, useEffect, useState } from "react";
import RowOffer from "./rowOffer";

import PaidIcon from '@mui/icons-material/Paid';

export default function OfferList () {

  const { applications, setApplications } = useApps();

  const [offers, setOffers] = useState<ApplicationDetails[]>([]);

  const getOffers = useCallback(() => {
    const offers = applications.filter(app => (typeof app.offer_amount === 'number' && !app.rejected));
    setOffers(offers);
  },[applications]);

  useEffect(() => {
    if(applications.length > 0){
      getOffers();

    }
  },[applications, getOffers]);

  useEffect(()=> {
    console.log(offers);
  },[offers])

  return (
    <div className=" rounded-lg flex flex-col gap-4 lg:w-1/2 h-full text-primary">
      <div className="flex items-center gap-2 font-inter-tight-display">
        <PaidIcon fontSize="small" />
        <span className="font-bold w-full ">Current Offers</span>
      </div>

      <div className="flex flex-col gap-2">
      {
      <div className="border border-border bg-card rounded-lg w-full h-full overflow-x-auto">
        <table className="w-full h-full md:table-fixed">
          <thead className="">
            <tr className="text-xs text-left text-zinc-500">
              <th className="p-4">Date</th>
              <th className=" p-4">Company</th>
              <th className=" p-4">Fav</th>
              <th className=" p-4">Offer</th>
              <th className=" p-4">Misc</th>

            </tr>
          </thead>
          <tbody>
            {
            offers.length > 0 ? 
            offers.map((app) => (
              <RowOffer
                key={app.app_id}
                app={app}
              />
            ))
            :
            <RowOffer noRows/>
            }
            
          </tbody>
        
        </table>
      </div>

      }
      </div>

    </div>
  )
}