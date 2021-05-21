import React from 'react'
import './../../assets/styles/breakdown.css'

import { PolarArea } from 'react-chartjs-2';



function Breakdown() {
    
    return (

        <div className="breakdown-container">
            <h3 className="breakdown-title">Breakdown</h3>
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
                        data: [23, 15, 20, 16, 14, 10],
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
            <div className="breakdown-quote-wrapper">
                <i class="fas fa-quote-left"></i>
                <p className="breakdown-quote">
                    Your average gain is the important figure to base
                    your risk on, is the best way to determine how much
                    risk you should take per trade
                </p>
                <i class="fas fa-quote-right"></i>
                <p className="quote-author">
                    <a href="https://minervini.com/home.php" target="-blank">- Mark Minervini</a>
                </p>
            </div>
        </div>
    )
}

export default Breakdown
