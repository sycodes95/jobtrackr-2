'use client'
import { ResponsiveSankey } from '@nivo/sankey'
import { useCallback, useEffect, useState } from 'react';
import { DefaultSankeyData, KeyStringString, defaultSankeyData, demoSankeyLinks, legendData } from '../constants';
import useApps from '@/app/hooks/useApps';
import { getAppliedGhosted, getAppliedInterview, getAppliedRejected, getInterviewOffer, getInterviewRejected, getOfferRejected } from '../utils/sankeyValues';
import { useTheme } from 'next-themes';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import CreateIcon from '@mui/icons-material/Create';
import ChatIcon from '@mui/icons-material/Chat';
import PaidIcon from '@mui/icons-material/Paid';
import { FaGhost } from "react-icons/fa";
import { Progress } from "@/components/ui/progress"

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

  const getLegendColor = (name: string) => {
    console.log(name);
    if(legendData[name]) {
      console.log(`text-[${legendData[name]}]`);
      return `text-[${legendData[name]}]`
    }
  }

  // const legendData: {[key:string] : {
  //   textColor: string;
  //   icon: React.ReactNode
  // }} = {
  //   "Applied": "text-[#e8c1a0]",
  //   "Rejected": "text-[#f47560]",
  //   "Interview": "text-[#f1e15b]",
  //   "Offer": "text-[#e8a838]",
  //   "Ghosted": "text-[#61cdbb]",
  // }

  const legendData: {[key:string] : {
    textColor: string;
    icon: React.ReactNode
  }} = {
    "Applied": {
      textColor: "text-[#e8c1a0]",
      icon: <CreateIcon className='text-[#e8c1a0] text-sm' />
    },
    "Rejected": {
      textColor: "text-[#f47560]",
      icon: <ThumbDownOffAltIcon className='text-[#f47560] text-sm' />
    },
    "Interview": {
      textColor: "text-[#f1e15b]",
      icon: <ChatIcon className='text-[#f1e15b] text-sm' />
    },
    "Offer": {
      textColor: "text-[#e8a838]",
      icon: <PaidIcon className='text-[#e8a838] text-sm' />
    },
    "Ghosted": {
      textColor: "text-[#61cdbb]",
      icon: <FaGhost className='text-[#61cdbb] text-sm' />
    },
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
        linkOpacity={theme === 'dark' ? 0.7 : 0.9}
        linkHoverOthersOpacity={0.5}
        linkContract={0.5}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        
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


      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        {
        sankeyData &&
        sankeyData.links.map((link) => (
          <Card key={link.source + link.target}>
            <CardHeader className='p-0'>
              <CardTitle className='text-xs flex font-normal items-center gap-1 pb-2 border-b border-border p-4'>
                <div className='flex items-center p-2 gap-2 rounded-lg  bg-footer-background'>
                  {
                  legendData[link.source].icon
                  }
                  <span className={`${legendData[`${link.source}`].textColor}`}>{link.source}</span>
                </div>
                <ArrowRightIcon />

                <div className='flex items-center p-2 gap-2 rounded-lg  bg-footer-background'>
                  {
                  legendData[link.target].icon
                  }
                  <span className={`${legendData[`${link.target}`].textColor} `}>{link.target}</span>
                </div>
              </CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent className='p-4 flex flex-col gap-4'>
              <div className='flex items-center justify-between gap-4'>
                <span className='font-regular text-xs p-2 rounded-lg border border-border'>Percentage</span>
                {/* <div className='w-full ml-2 mr-2 border-b h-[0px]'></div> */}
                <Progress className='h-2' value={getPct(528, link.value) } />
                <span>
                  {
                   getPct(528, link.value) 
                  }
                  %
                </span>
              </div>

              <div className='flex items-center justify-between gap-4'>
                <span className='font-regular text-xs p-2 rounded-lg border border-border'>Amount</span>
                <div className='w-full ml-2 mr-2 border-b h-[0px]'></div>
                <span>
                  {link.value}
                </span>
              </div>
              
            </CardContent>
            
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