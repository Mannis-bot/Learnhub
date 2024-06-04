import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
import { plugin } from 'postcss';

ChartJs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)

const Chartcomponent = () => {
    const data = {
        labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        datasets: [{
            label: 'Sales of the week', 
            data: [11000, 14000, 19000, 20000, 21000, 11000, 23000],
            borderColor: '#F4901F',
            pointBorderColor: 'black',
            tension: 0.4
        },
        {
            label: 'Income', 
            data: [12000, 21000, 41545, 40000, 42000, 20000, 56000],
            borderColor: '#1BD084',
            pointBorderColor: 'black',
            tension: 0.4
        }
    ]
    };

    const options = {
        scales: {
          y: {
            ticks: {
              callback: function(value, index, values) {
                if (value === 0 || value === 20000 || value === 40000 || value === 60000) {
                  return value === 0 ? value : (value / 1000) + 'K';
                } else {
                  return '';
                }
              }
            },
            min: 0,
            max: 60000,
            stepSize: 20000,
          }
        }
      };
      
      
      

    return (
        <div className='w-[500px]'>
            <Line data={data} options={options} /> 
        </div>
    );
}

export default Chartcomponent;
