import React from 'react'
import '../assets/styles/performance.css'

import { Line } from 'react-chartjs-2';

function Performance() {
    return (

        <div className="performance-container">
            <h3 className="performance-title">Performance</h3>
            <div className="performance-chart-wrapper">
                <Line data = {{
                    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2', 'Q3', 'Q4', 'Q1'],
                    datasets: [{
                    label: 'Performance',
                    data: [2400, 2750, 2810, 3312, 3215, 3055, 3185, 3420],
                    fill: true,
                    borderColor: '#2196F3',
                    tension: 0.1
                }]
                }}/>
            </div>
        </div>
    
    )
}

export default Performance
