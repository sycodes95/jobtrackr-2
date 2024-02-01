
'use client'
import useApps from "@/app/hooks/useApps"
import { useCallback, useEffect, useState } from "react"
import { CalendarDatum, ResponsiveCalendar, Calendar } from '@nivo/calendar'
import { yearAgoFromToday } from "../utils/yearAgoFromToday";
import { elevenMonthsAgo } from "../utils/elevenMonthsAgo";
import { useTheme } from "next-themes";
interface Data {
  value: number;
  day: string;
}

export default function AppCalendar () { 

  const defaultEmptyColor = 'none'

  const dayBorderColor = 'none'


  const { theme } = useTheme()

  const { applications, setApplications } = useApps();

  const [data, setData] = useState<CalendarDatum[]>([]);

  const formatData = useCallback(() => {

    const formatted: CalendarDatum[] = []

    applications.forEach((app) => {
      const dateIndex = formatted.findIndex(data => data.day === app.apply_date)
      if(dateIndex !== -1) {
        formatted[dateIndex].value += 1;
      } else {
        const date: string = app.apply_date as string;
        const [formattedDate, _] = date.split('T');
        formatted.push({
          value: 1,
          day: formattedDate
        })
      }
    })
    setData(formatted)

  },[applications])

  useEffect(()=> {
    if(applications.length) {
      formatData();
    }
  },[applications, formatData])
  
  useEffect(()=> {
    console.log(theme);
  },[theme])

  return (
    <>

      
      
      <div className="h-full flex justify-start overflow-x-auto">
        
        <Calendar
          height={400}
          width={1200}
          data={data}
          from={elevenMonthsAgo()}
          to={new Date()}
          emptyColor={theme ? (theme === 'dark' ? 'none' : 'DEDEDE') : defaultEmptyColor}
          colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          yearSpacing={40}
          monthBorderColor="#none"
          dayBorderWidth={2}
          dayBorderColor={theme ? (theme === 'dark' ? 'none' : 'DEDEDE') : dayBorderColor}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'row',
              translateY: 36,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: 'right-to-left'
            }
          ]}
        />
      </div>
      
     

      
      
    </>
  )
}