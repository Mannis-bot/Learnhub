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
        labels: ['Week 01', 'Week 02', 'Week 03', 'Week 04', 'Week 05', 'Week 06', 'Week 07', 'Week 08', 'Week 09', 'Week 10'],
        datasets: [{
            label: 'Sales of the week', 
            data: [90, 40, 20, 40, 77, 42, 23, 40, 24, 18],
            borderColor: '#6B56F6',
            pointBorderColor: 'black',
            tension: 0.4
        },
        {
            label: 'Sales of the week', 
            data: [20, 54, 20, 37, 40, 20, 42, 6, 6, 6],
            borderColor: '#1BD084',
            pointBorderColor: 'black',
            tension: 0.4
        }
    ]
    };

    const options = {
       scales:{
        y:{
            suggestedMin: 0,
            max: 100,
            ticks: {
                stepSize: 20
            }
        }
       }
    };

    return (
        <div className='w-[600px]'>
            <Line data={data} options={options} /> 
        </div>
    );
}

export default Chartcomponent;
