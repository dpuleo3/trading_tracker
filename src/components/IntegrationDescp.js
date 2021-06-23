import React from 'react'
import '../App.css';

import { Bar } from 'react-chartjs-2'
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';


import '../assets/styles/integrationdescp.css'



function IntegrationDescp() {
    return (

        <div className="integration-descp-container">
            <div className="descp-overview-wrapper">
                <h1>
                    Have a great live view of your trading 
                </h1>
                <h1 className="descp-blue">
                    All the process is automated, you don't have 
                    to do anything!
                </h1>
            </div>
            <div className="descp-overview-chart">
                <Bar data={{
                        labels: ['Individual', 'PRO', 'Company'],
                        datasets: [
                            {
                            label: 'Average Performance',
                            data: [16, 24, 7.5],
                            backgroundColor: [
                                '#2196F3a1',
                                '#2196F3a1',
                                '#2196F3a1',
                            ],
                            borderColor: [
                                '#2196F3',
                                '#2196F3',
                                '#2196F3',
                            ],
                            borderWidth: 2,
                            },
                        ],
                        }}
                        options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [
                            {
                                ticks: {
                                beginAtZero: true,
                                },
                            },
                            ],
                        },
                        legend: {
                            labels: {
                            fontSize: 15,
                            },
                        },
                        }}

                />
            </div>
            <div className="descp-overview-icons-wrapper">
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FaIcons.FaChalkboardTeacher />
                    </div>
                    <p> 
                        Easy access to all of your operations
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FcIcons.FcCandleSticks />
                    </div>
                    <p> 
                        Track your trading performace
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FaIcons.FaRocket />
                    </div>
                    <p> 
                        Get a better view of your portfolios
                    </p>
                </div>
            </div>
        </div>
    
    )
}

export default IntegrationDescp
