import { Box, useTheme } from '@mui/material'
import React from 'react'
import { ResponsivePie } from '@nivo/pie'
export default function Piechart({isPie}) {

    const data = [
        {
          id: "React",
          label: "React",
          value: 272,
          color: "hsl(107, 70%, 50%)",
        },
        {
          id: "stylus",
          label: "stylus",
          value: 543,
          color: "hsl(64, 70%, 50%)",
        },
        {
          id: "sass",
          label: "sass",
          value: 401,
          color: "hsl(41, 70%, 50%)",
        },
        {
          id: "haskell",
          label: "haskell",
          value: 434,
          color: "hsl(172, 70%, 50%)",
        },
        {
          id: "nue",
          label: "nue",
          value: 333,
          color: "hsl(219, 70%, 50%)",
        },
    ];

    const theme  = useTheme()

  return (
    <Box sx={{height:isPie?"250px":"75vh"}}>
        <ResponsivePie
          data={data}
          theme={{
              
              textColor: theme.palette.text.primary,
              fontSize: 11,
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: theme.palette.text.primary,
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.divider,
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.secondary,
                  },
                },
              },
              grid: {
                line: {
                  stroke: theme.palette.divider,
                  strokeWidth: 1,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                  },
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: theme.palette.text.primary,
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  fill: theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: "#000000",
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                container: {
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
          }}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          startAngle={-180}
          innerRadius={0.5}
          padAngle={1}
          cornerRadius={4}
          activeOuterRadiusOffset={8}
          colors={{ scheme: 'dark2' }}
          borderWidth={1}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      '0.6'
                  ]
              ]
          }}
          
          enableArcLabels={isPie ? false: true}
          enableArcLinkLabels={isPie ? false: true}
          arcLinkLabelsSkipAngle={3}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          arcLabelsRadiusOffset={0.35}
          arcLabelsSkipAngle={31}
          arcLabelsTextColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      '3'
                  ]
              ]
          }}
          legends={isPie? []:[
            
              {
                  anchor: 'bottom',
                  direction: 'row',
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: 0,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: '#999',
                  itemDirection: 'left-to-right',
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: 'circle',
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
    </Box>
  )
}
