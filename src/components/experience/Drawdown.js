import React from 'react'
import './../../assets/styles/performance.css'

import { Line } from 'react-chartjs-2';

function Drawdown() {
    return (

        <div className="performance-container">
            <div className="performance-chart-wrapper">
                <Line data = {{
                    labels: ['1', '2', '3', '4', '5'],
                    datasets: [{
                    label: 'Drawdown - April',
                    data: [11.88, 11.57, 8.15, 7.98],
                    fill: true,
                    borderColor: '#ef5350',
                    tension: 0.1
                }]
                }}/>
            </div>
        </div>

    )
}

export default Drawdown
