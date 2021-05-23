import React from 'react'
import '../assets/styles/presentationcard.css'

import { Doughnut } from 'react-chartjs-2';


function PresentationCard() {
    
    return (

        <div className="presentation-card-container">

            <span className="presentation-back-blue" />
            <span className="presentation-back-black" />

            <div className="presentation-card-wrapper">
                <div className="presentation-card-text">
                    <p>
                        Trading Tracker will be your best 
                        <p className="presentation-card-text-black"> 
                            Presentation Card
                        </p>
                    </p>
                </div>
                <div className="presentation-card-metrics-charts">
                    <div className="presentation-card-chart">
                        <Doughnut data={{
                                labels: [
                                    'AVG Gain'
                                ],
                                datasets: [{
                                    label: 'Balance Breakdown',
                                    data: [18, 82],
                                    backgroundColor: [
                                    '#2196F3',
                                    '#d1d4dc'
                                    ],
                                    hoverOffset: 2
                                }]
                            }} />
                    </div>
                    <div className="presentation-card-chart">
                        <Doughnut data={{
                                labels: [
                                    'AVG Loss'
                                ],
                                datasets: [{
                                    label: 'Balance Breakdown',
                                    data: [7, 93],
                                    backgroundColor: [
                                    '#2196F3',
                                    '#d1d4dc'
                                    ],
                                    hoverOffset: 2
                                }]
                            }} />
                    </div>
                    <div className="presentation-card-chart">
                        <Doughnut data={{
                                labels: [
                                    'Performance'
                                ],
                                datasets: [{
                                    label: 'Balance Breakdown',
                                    data: [85, 15],
                                    backgroundColor: [
                                    '#2196F3',
                                    '#d1d4dc'
                                    ],
                                    hoverOffset: 2
                                }]
                            }} />
                    </div>
                </div>
            </div>

        </div>
    
    )
}

export default PresentationCard
