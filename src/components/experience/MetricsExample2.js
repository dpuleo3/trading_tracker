import React from 'react'
import './../../assets/styles/metricsexample2.css'



function MetricsExample2() {

    return (
        
        <div className="metrics2-contaner">
            <h3>Montlhy Metrics</h3>
            <div className="metrics2-tables-wrapper">
                <div className="tables-left-wrapper">
                    <table className="trades-ratio">
                        <tbody>
                            <tr>
                                <td>Winning Trades</td>
                                <td>8</td>
                            </tr>
                            <tr>
                                <td>Loosing Trades</td>
                                <td>4</td>
                            </tr>
                            <tr className="final-tab">
                                <td>Total Trades</td>
                                <td>12</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="expectancy">
                    <tbody>
                            <tr>
                                <td>% of Winning Trades</td>
                                <td>66.67%</td>
                            </tr>
                            <tr>
                                <td>Average Gain</td>
                                <td className="gains">10.32%</td>
                            </tr>
                            <tr>
                                <td>% of Loosing Trades</td>
                                <td>33.33%</td>
                            </tr>
                            <tr>
                                <td>Average Loss</td>
                                <td className="losses">9.90%</td>
                            </tr>
                            <tr className="final-tab">
                                <td>Expectancy</td>
                                <td className="gains">2.09%</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="avg-days">
                        <tbody>
                            <tr>
                                <td>AVG Days Gains</td>
                                <td>13</td>
                            </tr>
                            <tr>
                                <td>AVG Days Loss</td>
                                <td>11</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="tables-right-wrapper">
                    <div className="gains-data">
                        <table className="gains-data-table">
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>% Gained</th>
                                    <th>Days Holding</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className="gains">8.79%</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="gains">2.05%</td>
                                    <td>13</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="gains">7.45%</td>
                                    <td>21</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className="gains">12.81%</td>
                                    <td>15</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td className="gains">8.13%</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td className="gains">10.75%</td>
                                    <td>16</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td className="gains">18.56%</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td className="gains">14.21%</td>
                                    <td>18</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="loss-data">
                        <table className="loss-data-table">
                            <thead>
                                <tr>
                                    <th>Number</th>
                                    <th>% Losed</th>
                                    <th>Days Holding</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td className="losses">11.88%</td>
                                    <td>19</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td className="losses">11.57%</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td className="losses">8.15%</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td className="losses">7.98%</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="metrics-add-space">
                    <h1>Add</h1>
                </div>
            </div>
    
        </div>
    
    );

}

export default MetricsExample2
