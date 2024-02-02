import { metricsBorderColors } from "../constants";

interface MetricCard {
  metricTitle: string;
  metricValue: number;
  getPctOfTotal: (count: number) => number;
}

export default function MetricCard ({ 
  metricTitle, 
  metricValue, 
  getPctOfTotal 
} : MetricCard) {

  const metricValueExists = metricValue !== null;

  return (
    <div className={`${metricsBorderColors[metricTitle]}  w-full h-full flex flex-col gap-2 rounded-lg  p-4`} >
      <span className="font-bold text-primary">{metricTitle}</span>
      <div className="flex justify-between h-full items-end">
        <span className="font-inter-tight-display text-3xl  ">{metricValueExists ? metricValue : 'n/a'}</span>
        {
        metricTitle !== 'Total Applications' && 
        <span className="text-xs text-zinc-500 pb-1 pt-1">{metricValueExists ? getPctOfTotal(metricValue) : '0'}% of total applications</span>
        }
      </div>
    </div>
  )
}