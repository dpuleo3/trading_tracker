import React from 'react';

import { RatioBtn } from './RatioBtn';
// import { RatioInput } from './RatioInput';

import './../../assets/styles/metricsexample2.css';



function RiskMgmt() {

    // const [result, setResult] = useState(setResult);

    // const MultiRatio = (e) => {
    //     setResult();
    // }


    return (
        
        <div className="metrics2-contaner">
            <div className="metrics2-tables-wrapper">
                <div className="tables-left-wrapper">
                    
                    <table className="risk-reward-table">
                        <thead>
                            <tr>
                                <th>Risk : Reward Ratios</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <RatioBtn onClick={""} name="2" buttonStyle='td-btn'>
                                    2 : 1
                                </RatioBtn>
                            </tr>
                            <tr>
                                <RatioBtn onClick={""} name="3" buttonStyle='td-btn'>
                                    3 : 1
                                </RatioBtn>
                            </tr>
                            <tr>
                                <RatioBtn onClick={""} name="4" buttonStyle='td-btn'>
                                    4 : 1
                                </RatioBtn>
                            </tr>
                            <tr>
                                <RatioBtn onClick={""} name="5" buttonStyle='td-btn'>
                                    5 : 1
                                </RatioBtn>
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
                                    <td id="risk-%" className="losses">8.00%</td>
                                    <td id="risk-$">$23.85</td>
                                    <td className="gains">
                                        16%{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                    <td>
                                        $69.08{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>GBTC</td>
                                    <td>$7.51</td>
                                    <td>6</td>
                                    <td>$6.79</td>
                                    <td id="risk-%" className="losses">9.50%</td>
                                    <td id="risk-$">$4.32</td>
                                    <td className="gains">
                                        19%{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                    <td>
                                        $8.94{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>NFLX</td>
                                    <td>$377.72</td>
                                    <td>1</td>
                                    <td>$351.09</td>
                                    <td id="risk-%" className="losses">7.05%</td>
                                    <td id="risk-$">$26.63</td>
                                    <td className="gains">
                                        14.10%{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                    <td>
                                        $430.98{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>FFTY</td>
                                    <td>$28.03</td>
                                    <td>5</td>
                                    <td>$26.11</td>
                                    <td id="risk-%" className="losses">6.85%</td>
                                    <td id="risk-$">$9.6</td>
                                    <td className="gains">
                                        13.7%{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                    <td>
                                        $31.87{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>CGW</td>
                                    <td>$32.19</td>
                                    <td>4</td>
                                    <td>$30.30</td>
                                    <td id="risk-%" className="losses">5.87%</td>
                                    <td id="risk-$">$7.56</td>
                                    <td className="gains">
                                        11.74%{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                    <td>
                                        $35.97{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>DIS</td>
                                    <td>$101.14</td>
                                    <td>3</td>
                                    <td>$84.26</td>
                                    <td id="risk-%" className="losses">8.02%</td>
                                    <td id="risk-$">$50.63</td>
                                    <td className="gains">
                                        16.04%{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
                                    <td>
                                        $117.36{/* <RatioInput value={result} buttonStyle="gains" /> */}
                                    </td>
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
