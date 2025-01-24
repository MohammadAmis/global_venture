import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ paymentData }) => {
  // Predefined labels for months
  const labels = ['January', 'February', 'March'];

  // Generate datasets for the chart
  const datasets = paymentData.map((item, index) => ({
    label: item.payment_method, // Payment method label
    data: item.counts, // Monthly data array
    backgroundColor: `rgba(${54 + index * 50}, ${162 - index * 30}, ${235 - index * 40}, 0.2)`, // Dynamic color
    borderColor: `rgba(${54 + index * 50}, ${162 - index * 30}, ${235 - index * 40}, 1)`,
    borderWidth: 1,
  }));

  // Chart.js data structure
  const chartData = {
    labels: labels, // X-axis labels for months
    datasets: datasets, // Array of datasets
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Payment Breakdown (Monthly)',
      },
    },
    scales: {
      x: {
        stacked: false, // Separate bars for each payment method
      },
      y: {
        stacked: false, // Unstacked y-axis
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;

import PropTypes from 'prop-types';

BarChart.propTypes = {
  paymentData: PropTypes.arrayOf(
    PropTypes.shape({
      payment_method: PropTypes.string.isRequired, // Payment method name
      counts: PropTypes.arrayOf(PropTypes.number).isRequired, // Array of counts for each month
    })
  ).isRequired, // Entire prop is mandatory
};
