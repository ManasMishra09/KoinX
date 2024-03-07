import React, { useRef, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = () => {

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current !== null && chartRef.current.chartInstance !== null) {
      chartRef.current.chartInstance.destroy();
    }
  }, []);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
          'orange',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DonutChart;
