import React from "react";
import "./DashboardChart.css";
import { BarChart } from "@mui/x-charts/BarChart";


function DashboardChart() {

  return (
    <div>
      <h4 className="dashboardHeading">Tour statistics by location</h4>
      <BarChart
        sx={{
          ".MuiChartsAxis-line": { display: "none" },
          ".MuiChartsAxis-tick": { display: "none" },
          ".MuiChartsGrid-line": { display: "none" },
          ".MuiChartsAxis-left .MuiChartsAxis-tickLabel": { display: "none" },
          marginLeft: "-2.5rem",

        }}
        series={[
          { data: [76, 18, 6], stack: "A", },
          {
            data: [24, 82, 96],
            stack: "A",
            color: "#f0f0f0",
          },
        ]}
        barLabel={(item) => {
          if (item.seriesId === "auto-generated-id-0") {
            return item.value?.toString() + "%";
          }
          return null;
        }}
        xAxis={[
          {
            scaleType: "band",
            data: ["District", "City", "Country"],
            axisLine: false,
            tick: false,
            gridLine: { stroke: "transparent" },
          },
        ]}
        yAxis={[
          {
            max: 100,
            axisLine: false,
            tick: false,
            label: false,
            gridLine: { stroke: "transparent" },
          },
        ]}
        height={500}
      />
    </div>
  );
}

export default DashboardChart;
