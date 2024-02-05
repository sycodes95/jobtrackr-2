'use client'
import { ResponsiveSankey } from '@nivo/sankey'
import { useCallback, useEffect, useState } from 'react';
import { DefaultSankeyData, KeyStringString, defaultSankeyData, demoSankeyLinks, legendColors } from '../constants';
import useApps from '@/app/hooks/useApps';
import { getAppliedGhosted, getAppliedInterview, getAppliedRejected, getInterviewOffer, getInterviewRejected, getOfferRejected } from '../utils/sankeyValues';
import { useTheme } from 'next-themes';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { colorSchemes } from '@nivo/colors';
import { getPct } from '@/app/utils/getPct';


export default function SankeyDiagram () {
  const { applications } = useApps();

  const { theme } = useTheme()
  const [sankeyData, setSankeyData] = useState<DefaultSankeyData>(defaultSankeyData);

  const [themeIsLoaded, setThemeIsLoaded] = useState(false);

  const [useDemoData, _ ] = useState(true);

  const formatAppsToSankeyLinks = useCallback(() => {
    const links = [
      getAppliedGhosted(applications),
      getAppliedRejected(applications),
      getAppliedInterview(applications),
      getInterviewRejected(applications),
      getInterviewOffer(applications),
      getOfferRejected(applications),
    ];

    setSankeyData(prev => ({ ...prev, 'links': links}))
  },[applications]);

  useEffect(() => {
    if(applications.length > 0 && !useDemoData) {
      formatAppsToSankeyLinks();
    };
  },[applications, formatAppsToSankeyLinks, useDemoData]);

  useEffect(() => {
    if(useDemoData){
      setSankeyData(prev => ({...prev, 'links': demoSankeyLinks}))
    };
  },[useDemoData]);

  useEffect(()=> {
    theme && setThemeIsLoaded(true);
  },[theme]);

  useEffect(() => {
    console.log(colorSchemes.nivo);
  },[colorSchemes])

  const getLegendColor = (name: string) => {
    console.log(name);
    if(legendColors[name]) {
      console.log(`text-[${legendColors[name]}]`);
      return `text-[${legendColors[name]}]`
    }
  }

  const legendColors: {[key:string] : string} = {
    "Applied": "text-[#e8c1a0]",
    "Rejected": "text-[#f47560]",
    "Interview": "text-[#f1e15b]",
    "Offer": "text-[#e8a838]",
    "Ghosted": "text-[#61cdbb]",
  }

  return (
    <div className='h-full w-full flex flex-col gap-8'>
      <div className='h-[500px] w-full '>

      <ResponsiveSankey
        data={sankeyData}
        margin={{ top: 40, right: 140, bottom: 40, left: 20 }}
        align="justify"
        colors={{ scheme: `${theme === 'dark' ? 'nivo' : 'nivo'}` }}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={2}
        nodeSpacing={200}
        nodeBorderWidth={0}
        nodeBorderColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              0.8
            ]
          ]
        }}
        linkBlendMode={theme === 'dark' ? 'lighten' : 'darken'}
        nodeBorderRadius={3}
        linkOpacity={0.7}
        linkHoverOthersOpacity={0.5}
        linkContract={0.5}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{
          from: 'color',
          
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 130,
            itemWidth: 100,
            itemHeight: 14,
            itemDirection: 'right-to-left',
            itemsSpacing: 2,
            itemTextColor: '#999',
            symbolSize: 14,
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000'
                }
              }
            ]
          }
        ]}
      />
      </div>


      <div className='grid grid-cols-3 gap-4'>
        {
        sankeyData &&
        sankeyData.links.map((link) => (
          <Card key={link.source + link.target}>
            <CardHeader>
              <CardTitle className='text-sm flex font-normal items-center gap-1 text-'>
                <span className={`${legendColors[`${link.source}`]}`}>{link.source}</span>
                <ArrowRightIcon />
                <span className={`
                ${getLegendColor(link.target)}
                `}>{link.target}</span>
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <div className='flex items-center gap-4'>
                <span className='font-regular text-xs p-2 rounded-lg border border-border'>Percentage</span>
                <span>
                  {
                   getPct(528, link.value) 
                  }
                  %
                </span>
              </div>
              
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        ))
        }
      </div>
      {/* <Sankey
        width={960}
        height={400}
        data={data} 
        node={{stroke: '#77c878', strokeWidth: 2, textRendering: 'meow'}}
        nodePadding={50}
        margin={{
        left: 20,
          right: 20,
          top: 60,
          bottom: 60,
        }}
        link={{ stroke: '#77c878' }}
        >
        <Tooltip />
      </Sankey> */}
  
    </div>
  )
}