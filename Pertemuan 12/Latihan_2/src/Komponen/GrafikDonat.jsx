import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// registrasi chart
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function GrafikDonat() {

  const data = {
    labels: ['Scratch', 'Dent', 'Lainnya'],

    datasets: [
      {
        label: 'Proporsi Cacat',

        data: [50, 30, 20],

        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(54, 162, 235, 0.8)',
        ],

        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 206, 86)',
          'rgb(54, 162, 235)',
        ],

        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: 'bottom',
      },

      title: {
        display: true,
        text: 'Proporsi Cacat Produksi',
        font: {
          size: 18,
        },
      },
    },
  };

  return (
    <Doughnut data={data} options={options} />
  );
}

export default GrafikDonat;