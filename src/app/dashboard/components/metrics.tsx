'use client'

import useApps from "@/app/hooks/useApps"
import { useCallback, useEffect, useState } from "react";
import MetricCard from "./metricCard";

interface Metrics {
  "Total Applications": null | number,
  "Total Interviews": null | number,
  "Total Rejections": null | number,
  "Total Offers": null | number,
};

export default function Metrics () {

  const { applications ,setApplications } = useApps();

  const [metrics, setMetrics ] = useState<Metrics>({
    "Total Applications": null,
    "Total Interviews": null,
    "Total Rejections": null,
    "Total Offers": null,
  });

  const getPctOfTotal = ( count : number ) => {
    if(!metrics["Total Applications"]) return 0
    const pct = Number(((count / metrics["Total Applications"]) * 100).toFixed(1));
    return pct;
  }

  const getMetricsFromApps = useCallback(() => {
    const totalApps = applications.length;
    const totalInterviews = applications.filter(app => app.interview_date && app.interview_date).length;
    const totalRejections = applications.filter(app => app.rejected && app.rejected).length;
    const totalOffers = applications.filter(app => app.offer_amount && app.offer_amount).length;

    setMetrics({
      "Total Applications": totalApps,
      "Total Interviews": totalInterviews,
      "Total Rejections": totalRejections,
      "Total Offers": totalOffers,
    })
  }, [applications]);

  useEffect(() => {
    if(applications){
      getMetricsFromApps();
    };
  },[applications, getMetricsFromApps]);
  
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {
      Object.entries(metrics).map(([key, value]) => (
        <MetricCard key={key} metricTitle={key} metricValue={value} getPctOfTotal={getPctOfTotal} />
      ))
      }
    </div>
  ) 
}