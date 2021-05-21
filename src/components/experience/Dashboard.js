import React from 'react'
import './../../assets/styles/dashboard.css'

import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2'



function Dashboard() {

    return (
        <div className="dashboard-container">
            <h3>Dashboard</h3>
            <div className="left-side">
                <div className="portfolio-balances-wrapper">
                    <table className="portfolio-balances">
                        <thead>
                            <tr>
                                <th colspan="2">Portfolio Balances</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-text">Account Value</td>
                                <td>$3,384.96</td>
                            </tr>
                            <tr>
                                <td className="table-text">Positions</td>
                                <td >$2,877.22</td>
                            </tr>
                            <tr>
                                <td className="table-text">Cash</td>
                                <td>$507.75</td>
                            </tr>
                            <tr>
                                <td className="table-text">Day Change</td>
                                <td>$86.16</td>
                            </tr>
                            <tr>
                                <td className="table-text">Unrealized Gains</td>
                                <td>$420.72</td>
                            </tr>
                            <tr>
                                <td className="table-text">Realized Gains</td>
                                <td className="gains">$834.43</td>
                            </tr>
                            <tr>
                                <td className="table-text">Total Returns</td>
                                <td className="gains">32.72%</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="balance-breakdown">
                        <Doughnut data={{
                            labels: [
                                'Positions',
                                'Cash',
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
                <div className="portfolio-stats-wrapper">
                    <table className="portfolio-stats">
                    <thead>
                            <tr>
                                <th colspan="2">Portfolio Stats</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-text">Number of Trades</td>
                                <td>85</td>
                            </tr>
                            <tr>
                                <td className="table-text">Shares Owned</td>
                                <td>24</td>
                            </tr>
                            <tr>
                                <td className="table-text">AVG Share Cost</td>
                                <td>$61.24</td>
                            </tr>
                            <tr>
                                <td className="table-text">Cash Deposits</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td className="table-text">Hourly Salary</td>
                                <td>$5.36</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="portfolio-stats">
                        <thead>
                            <tr>
                                <th colspan="2">Metrics Overview</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="table-text">AVG Returns %</td>
                                <td className="gains">11.96%</td>
                            </tr>
                            <tr>
                                <td className="table-text">AVG Returns $</td>
                                <td className="gains">$58.93</td>
                            </tr>
                            <tr>
                                <td className="table-text">AVG Risk %</td>
                                <td>6.56%</td>
                            </tr>
                            <tr>
                                <td className="table-text">AVG Risk $</td>
                                <td>$14.71</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="right-side">   
                <div className="live-performance-wrapper">
                    <Bar data={{
                        labels: ['SQ', 'GBTC', 'NFLX', 'FFTY', 'CGW', 'DIS'],
                        datasets: [
                            {
                            label: 'Portfolio Performance',
                            data: [9, 21, 16, 8.5, 11.2, 7.2],
                            backgroundColor: [
                                '#2196F3a1',
                                '#2196F3a1',
                                '#2196F3a1',
                                '#2196F3a1',
                                '#2196F3a1',
                                '#2196F3a1',
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
            </div>
            <div className="add-space">
                <h1>Add</h1>
            </div>     
        </div>
    )
}

export default Dashboard
