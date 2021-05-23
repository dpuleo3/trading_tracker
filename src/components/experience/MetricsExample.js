import React from 'react'
import './../../assets/styles/metricsexample.css'


function MetricsExample() {

    return (

        <div className="metrics-container">
            <div className="table-wrapper">
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Average Gain</th>
                            <th>Average Loss</th>
                            <th>Result</th>
                            <th>Number of Trades</th>
                            <th>Largest Win</th>
                            <th>Largest Loss</th>
                            <th>Average Days Wins</th>
                            <th>Average Days Loss</th>
                            <th>NOTES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>JAN</td>
                            <td>7.78%</td>
                            <td>5.33%</td>
                            <td className="active-column">12.04%</td>
                            <td>11</td>
                            <td>16.35%</td>
                            <td>7.92%</td>
                            <td>12</td>
                            <td>8</td>
                            <td className="notes">I need to have Trading Tracker</td>
                        </tr>
                        <tr>
                            <td>FEB</td>
                            <td>12.61%</td>
                            <td>5.87%</td>
                            <td className="active-column">41.59%</td>
                            <td>14</td>
                            <td>28.15%</td>
                            <td>6.78%</td>
                            <td>18</td>
                            <td>10</td>
                            <td className="notes">I need to have Trading Tracker</td>
                        </tr>
                        <tr>
                            <td>MAR</td>
                            <td>14.88%</td>
                            <td>6.12%</td>
                            <td className="active-column">55.02%</td>
                            <td>9</td>
                            <td>36.81%</td>
                            <td>5.63%</td>
                            <td>15</td>
                            <td>11</td>
                            <td className="notes">I need to have Trading Tracker</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
    );

}

export default MetricsExample
