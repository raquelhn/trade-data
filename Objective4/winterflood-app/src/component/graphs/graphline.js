import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import VWAPPerStock from '../data/VWAP_perStock.json';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const LineChart = () => {   
  const data = {
    labels: ['CXRB','EXMR','FXOG','HXSP'],
    datasets:[
      {
        label:'VWAP per Stock',
        data: [2.142574169,0.6769488221,0.1880639698,0.0304435796]
      }
    ]
  } 

  return(
          <>
            <h2>VWAP per unique trade type</h2>
            <Line
             data={data}
           />
          </>  
      )
}



export default LineChart;