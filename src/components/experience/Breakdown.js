import React from 'react'
import './../../assets/styles/breakdown.css'

import { PolarArea } from 'react-chartjs-2';



function Breakdown() {
    
    return (

        <div className="breakdown-container">
            <div className="breakdown-graph-wrapper">
                <PolarArea data = {{
                    labels: [
                        'SQ',
                        'GBTC',
                        'NFLX',
                        'FFTY',
                        'CGW',
                        'DIS'
                    ],
                    datasets: [{
                        label: 'Breakdown',
                        data: [23, 15, 20, 16, 14, 12],
                        backgroundColor: [
                            '#2196F3a1',
                            '#d1d4dca1',
                            '#2196F3a1',
                            '#d1d4dca1',
                            '#2196F3a1',
                            '#d1d4dca1',
                        ],
                        borderColor: [
                            '#2196F3',
                            '#2196F3',
                            '#2196F3',
                            '#2196F3',
                            '#2196F3',
                            '#2196F3',
                        ],
                        borderWidth: 2,
                    }]
                    }} />
            </div>
        </div>
    )
}

export default Breakdown
