"use client";

import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1240, 2400, 3400],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: "60%",
        plugins: {
          legend: {
            display: false,
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
