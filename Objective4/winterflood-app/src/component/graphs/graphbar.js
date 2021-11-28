import React, { useState, useEffect } from 'react';
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

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const BarChart = () => {   
  const data = {
    labels: ['CXRB','EXMR','FXOG','HXSP'],
    datasets:[
      {
        label:'Automatic',
        data: [0.6365714286,0.1881081938,0.031863389,2.456122449],
        backgroundColor: 'rgba(255, 99, 132, 0.5)'

      },
      {
        label:'Large',
        data: [0.726,0.171,0,2.47918],
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      },
      {
        label:'Ordinary',
        data: [0.6580144959,0.1901579095,0.0306927806,2.0705677468],
        backgroundColor: 'rgba(153, 102, 255, 0.2)'
      },
      {
        label:'Uncrossing',
        data: [0.7205,0.2156,0.027,0],
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      }
    ]
  } 

  return(
          <>
            <h2>VWAP per unique trade type</h2>
            <Bar
             data={data}
           />
          </>  
      )
}



export default BarChart;