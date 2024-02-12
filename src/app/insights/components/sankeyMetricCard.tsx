'use client'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { legendData } from "../constants";

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Progress } from "@/components/ui/progress"
import { getPct } from "@/app/utils/getPct";

interface SankeyMetricCardProps {
  source: string;
  target: string;
  value: number;
  appTotal: number;
}

export default function SankeyMetricCard ( {
  source, 
  target,
  value,
  appTotal
}: SankeyMetricCardProps ) {
  
  return (
    <Card key={source + target}>
      <CardHeader className='p-0'>
        <CardTitle className='text-xs flex font-normal items-center gap-1 pb-2 border-b border-border p-4'>
          <div className='flex items-center p-2 gap-2 rounded-lg bg-footer-background h-8'>
            {
            legendData[source].icon
            }
            <span className={`${legendData[`${source}`].textColor}`}>{source}</span>
          </div>
          <ArrowRightIcon />
  
          <div className='flex items-center p-2 gap-2 rounded-lg bg-footer-background h-8'>
            {
            legendData[target].icon
            }
            <span className={`${legendData[`${target}`].textColor} `}>{target}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='p-4 flex flex-col gap-4'>
        <div className='flex items-center justify-between gap-4'>
          <span className='font-regular text-xs p-2 rounded-lg border border-border'>Percentage</span>
          <Progress className='h-2' value={getPct(appTotal, value) } />
          <span>
            {
              getPct(appTotal, value) 
            }
            %
          </span>
        </div>
  
        <div className='flex items-center justify-between gap-4'>
          <span className='font-regular text-xs p-2 rounded-lg border border-border'>Amount</span>
          <div className='w-full ml-2 mr-2 border-b h-[0px]'></div>
          <span>
            {value}
          </span>
        </div>
        
      </CardContent>
      
    </Card>
   
  )
}