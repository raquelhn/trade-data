import React, { useState, useEffect } from 'react';
import {Bar} from 'react-chartjs-2';
import VWAPPerStock from '../data/VWAP_perStock.json';


const DynamicChart = () => {    
  const [chartData, setChartData]  = useState({});    
 

  const Chart = () => {
      setChartData({labels: [Object.keys(VWAPPerStock)],
        datasets: [
          {
            label: "VWAP per Stock",
            data: Object.values(VWAPPerStock),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          }]})
  }
  useEffect(() => {
        Chart();
      }, []);

return(
          <div>
              <h1>Bar Chart</h1>
              <div>
                  <Bar
                    data={chartData}
                    options={{
                        responsive:true,
                        title: { text: "THICCNESS SCALE", display: true },
                        scales:{
                            yAxes:[ {
                                ticks:{
                                    beginAtZero: true
                                }
                            }
                            ]
                        }
                    }}
                  />
              </div>
          </div>
      )
}



export default DynamicChart;