import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
} from 'chart.js';

// registrasi chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

function GrafikProduksi({ dataProduksi }) {

  const data = {
    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],

    datasets: [
      {
        label: 'Jumlah Produksi',

        data: dataProduksi,

        backgroundColor: [
          'rgba(54, 162, 235, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],

        borderRadius: 10,
        borderWidth: 1,
      },

      {
        label: 'Target',

        data: [150, 150, 150, 150, 150, 150],

        type: 'line',
        borderColor: 'red',
        backgroundColor: 'red',
        borderWidth: 3,
        tension: 0.3,
      }
    ]
  };

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: 'top',
      },

      title: {
        display: true,
        text: 'Grafik Produksi Harian - Lini 1',
        font: {
          size: 20
        }
      },
    },

    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Bar data={data} options={options} />
  );
}

export default GrafikProduksi;