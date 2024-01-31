'use client';
import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartData,
} from 'chart.js';
import { Chart, ChartProps } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export interface BarChartProps {
  labels: string[];
  dataLine: number[];
  dataBar1: number[];
  dataBar2: number[];
}
const BarChart = ({ dataBar1, dataBar2, dataLine, labels }: BarChartProps) => {
  const data: ChartData<'bar' | 'line', number[], string> = {
    labels,
    datasets: [
      {
        type: 'line' as const,
        label: 'red',
        data: dataLine,
        backgroundColor: 'white',
        borderColor: 'blue',
        segment: {
          borderDash: [6, 6],
        },
        spanGaps: true,
        tension: 0,
        pointRadius: 0,
      },
      {
        type: 'bar' as const,
        label: 'Dataset 2',
        data: dataBar1,
        backgroundColor: 'rgba(5, 9, 12, 0.5)',
      },

      {
        type: 'bar' as const,
        label: 'Dataset 2',
        data: dataBar2,
        backgroundColor: 'rgba(5, 9, 12, 0.5)',
      },
    ],
  };
  return (
    <Chart
      type='bar'
      data={data}
      options={{
        plugins: {
          legend: {
            display: true,
            labels: {
              generateLabels: () => {
                return [
                  {
                    text: 'Dataset 2',
                    index: 1,
                    datasetIndex: 1,
                  },
                ];
              },
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
