'use client'
import { ResponsiveSankey, SankeyLinkDatum } from '@nivo/sankey'
import { useState } from 'react';
import { Layer, Rectangle, Sankey, Text, Tooltip } from 'recharts'
import { DefaultSankeyData, defaultSankeyData } from '../constants';



export default function SankeyDiagram () {

  const [sankeyData, setSankeyData] = useState<DefaultSankeyData>(defaultSankeyData)

  

  return (
    <div className='h-[400px] w-full'>

      <ResponsiveSankey

        data={sankeyData}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: 'nivo' }}
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
        nodeBorderRadius={3}
        linkOpacity={0.8}
        linkHoverOthersOpacity={0.1}
        linkContract={3}
        enableLinkGradient={true}
        labelPosition="outside"
        labelOrientation="vertical"
        labelPadding={16}
        labelTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              1
            ]
          ]
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