'use client'
import { ResponsiveSankey } from '@nivo/sankey'
import { useCallback, useEffect, useState } from 'react';
import { SankeyData, SankeyLink, demoApplicationsLength, demoSankeyLinks, legendColors } from '../constants';
import useApps from '@/app/hooks/useApps';
import { getAppliedGhosted, getAppliedInterview, getAppliedRejected, getInterviewOffer, getInterviewRejected, getOfferRejected } from '../utils/getSankeyValues';
import { useTheme } from 'next-themes';
import SankeyMetricCard from './sankeyMetricCard';
import { useDemoMode } from '@/app/constants';
import { generateSankeyNodes } from '../utils/generateSankeyNodes';

export default function SankeyDiagram () {
  const { applications } = useApps();

  const { theme } = useTheme()
  const [sankeyData, setSankeyData] = useState<SankeyData>(SankeyData);

  const [appTotal, setAppTotal] = useState(!useDemoMode ? 0 : demoApplicationsLength)

  const formatAppsToSankeyLinks = useCallback(() => {
    const links = [
      getAppliedGhosted(applications),
      getAppliedRejected(applications),
      getAppliedInterview(applications),
      getInterviewRejected(applications),
      getInterviewOffer(applications),
      getOfferRejected(applications),
    ].filter(link => link.value);
    const nodes = generateSankeyNodes(applications)
    setSankeyData(prev => ({ nodes, 'links': links}))

  },[applications]);

  useEffect(() => {
    if(applications.length > 0 && !useDemoMode) {
      formatAppsToSankeyLinks();
      setAppTotal(applications.length);
    };
  },[applications, formatAppsToSankeyLinks]);

  useEffect(() => {
    if(useDemoMode){
      setSankeyData(prev => ({...prev, 'links': demoSankeyLinks}))
    };
  },[]);

  useEffect(() => {
console.log(sankeyData);
  },[sankeyData])

  return (
    <div className='h-full w-full flex flex-col gap-8'>
      <div className='h-[500px] w-full '>
        <ResponsiveSankey
          data={sankeyData}
          margin={{ top: 40, right: 140, bottom: 40, left: 20 }}
          align="justify"
          // colors={{ scheme: `${theme === 'dark' ? 'nivo' : 'nivo'}` }}
          colors={node => legendColors[node.id]}
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
          linkContract={0.3}
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
          <SankeyMetricCard 
          key={link.source + link.target} 
          source={link.source} 
          target={link.target} 
          value={link.value}
          appTotal={appTotal} 
          />
        ))
        }
      </div>
      
    </div>
  )
}