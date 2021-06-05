import React from 'react'
import './../../assets/styles/metricsexample2.css'



function RiskMgmt() {
    
    return (
        
        <div className="metrics2-contaner">
            <div className="metrics2-tables-wrapper">
                <div className="tables-left-wrapper">
                    
                    <table className="risk-reward-table">
                        <thead>
                            <tr>
                                <th colspan="2">Risk/Reward Ratios</th>
                            </tr>
                        </thead>
                    <tbody>
                            <tr>
                                <td className="td-btn">Show</td>
                                <td>1:2</td>
                            </tr>
                            <tr>
                                <td className="td-btn">Show</td>
                                <td>1:3</td>
                            </tr>
                            <tr>
                                <td className="td-btn">Show</td>
                                <td>1:4</td>
                            </tr>
                            <tr>
                                <td className="td-btn">Show</td>
                                <td>1:5</td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="avg-days">
                        <tbody>
                            <tr>
                                <td>AVG Risk %</td>
                                <td>7.54%</td>
                            </tr>
                            <tr>
                                <td>AVG Risk $</td>
                                <td>$20.43</td>
                            </tr>
                            <tr>
                                <td>Total Risk $</td>
                                <td>$122.59</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                <div className="tables-right-wrapper">
                    <div className="gains-data">
                        <table className="gains-data-table">
                            <thead>
                                <tr>
                                    <th>Ticker</th>
                                    <th>DCA</th>
                                    <th>Shares</th>
                                    <th>Stop-Loss</th>
                                    <th>Risk %</th>
                                    <th>Risk $</th>
                                    <th>Target %</th>
                                    <th>Target $</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SQ</td>
                                    <td>$59.55</td>
                                    <td>5</td>
                                    <td>$54.78</td>
                                     <td className="losses">8.00%</td>
                                    <td>$23.85</td>
                                    <td className="gains"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>GBTC</td>
                                    <td>$7.51</td>
                                    <td>6</td>
                                    <td>$6.79</td>
                                    <td className="losses">9.50%</td>
                                    <td>$4.32</td>
                                    <td className="gains"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>NFLX</td>
                                    <td>$377.72</td>
                                    <td>1</td>
                                    <td>$351.09</td>
                                    <td className="losses">7.05%</td>
                                    <td>$26.63</td>
                                    <td className="gains"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>FFTY</td>
                                    <td>$28.03</td>
                                    <td>5</td>
                                    <td>$26.11</td>
                                    <td className="losses">6.85%</td>
                                    <td>$9.6</td>
                                    <td className="gains"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>CGW</td>
                                    <td>$32.19</td>
                                    <td>4</td>
                                    <td>$30.30</td>
                                    <td className="losses">5.87%</td>
                                    <td>$7.56</td>
                                    <td className="gains"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>DIS</td>
                                    <td>$101.14</td>
                                    <td>3</td>
                                    <td>$84.26</td>
                                    <td className="losses">8.02%</td>
                                    <td>$50.63</td>
                                    <td className="gains"></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
    
        </div>

    )
}

export default RiskMgmt
