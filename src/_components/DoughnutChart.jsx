"use client"
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({chartData}) => {
  // Chart data
  const data = chartData.data
  const options = chartData.options
  return <Doughnut data={data} options={options} />;
};

export default DonutChart;
