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

function GrafikProduksi() {

  const data = {
    labels: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'],
    
    datasets: [
      {
        label: 'Jumlah Produksi',
        data: [120, 150, 180, 170, 200, 210],

        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },

      {
        label: 'Target',
        data: [150, 150, 150, 150, 150, 150],

        type: 'line',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
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