import { ResponsivePie } from "@nivo/pie";
import { mockPieData as data } from "../../data/mockData";
import { useTheme } from '../../ThemeContext'

export const PieChart = () => {

  const darkTheme = useTheme()
  
    return (
    <ResponsivePie
      data={data}
      theme={{
         "background": darkTheme ? "#141b2d" : "#EEF5FF",

        axis: {
          domain: {
            line: {
              stroke: 'black',
            },
          },
          legend: {
            text: {
              fill: 'black',
            },
          },
          ticks: {
            line: {
              stroke: 'black',
              strokeWidth: 1,
            },
            text: {
              fill: 'black',
            },
          },
        },
        legends: {
          text: {
            fill: 'black',
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor= {darkTheme ? 'white' : 'black'}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
};

