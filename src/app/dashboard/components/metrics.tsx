'use client'

import useApps from "@/app/hooks/useApps"
import { useCallback, useEffect, useState } from "react";

interface Metrics {
  "Total Applications": null | number,
  "Total Interviews": null | number,
  "Total Rejections": null | number,
  "Total Offers": null | number,
};

export default function Metrics () {

  const { applications ,setApplications } = useApps();

  const [metrics, setMetrics ] = useState<Metrics>({
    "Total Applications": 123,
    "Total Interviews": 44,
    "Total Rejections": 69,
    "Total Offers": 0.5,
  });

  const metricsBorderColors: {[key: string] : string} = {
    "Total Applications": 'border-l-4 border-gray-400 text-gray-400 border ',
    "Total Interviews": 'border-l-4 border-blue-300 text-blue-300 border',
    "Total Rejections": 'border-l-4 border-red-300 text-red-300 border',
    "Total Offers": 'border-l-4 border-orange-300 text-orange-300 border',
  }

  // const getMetricsFromApps = useCallback( () => {
  //   const totalApps = applications.length;
  //   const totalInterviews = applications.filter(app => app.interview_date && app.interview_date).length;
  //   const totalRejections = applications.filter(app => app.rejected && app.rejected).length;
  //   const totalOffers = applications.filter(app => app.offer_amount && app.offer_amount).length;

  //   setMetrics({
  //     totalApps,
  //     totalInterviews,
  //     totalRejections,
  //     totalOffers
  //   })
  // }, [applications]);

  // useEffect(() => {
  //   if(applications){
  //     getMetricsFromApps();
  //   };
  // },[applications, getMetricsFromApps]);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {
      Object.entries(metrics).map(([key, value]) => (
        <div className={`${metricsBorderColors[key]}  w-full h-full flex flex-col gap-2 rounded-lg  p-4`} key={key}>
          <span className="font-bold text-primary">{key}</span>
          <span className="font-inter-tight-display text-4xl ">{value}</span>
        </div>
      ))
      }
    </div>
  ) 
}