import React from 'react'
import './../../assets/styles/metricsexample.css'


function Positions() {
    return (

        <div className="metrics-container">
            <div className="table-wrapper">
                <table className="content-table">
                    <thead>
                        <tr>
                            <th>Tickers</th>
                            <th>Shares</th>
                            <th>Dollar Cost AVG</th>
                            <th>Price</th>
                            <th>Change %</th>
                            <th>Change $</th>
                            <th>Cost</th>
                            <th>Value</th>
                            <th>Return %</th>
                            <th>Gain $</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>SQ</td>
                            <td>5</td>
                            <td>$59.55</td>
                            <td>$65.01</td>
                            <td className="active-column">2.05%</td>
                            <td className="active-column">$2.47</td>
                            <td>$297.75</td>
                            <td>$325.05</td>
                            <td className="active-column">9%</td>
                            <td className="active-column">$26.79</td>
                        </tr>
                        <tr>
                            <td>GBTC</td>
                            <td>6</td>
                            <td>$7.51</td>
                            <td>$9.14</td>
                            <td className="losses">-5.70%</td>
                            <td className="losses">-$0.61</td>
                            <td>$45.06</td>
                            <td>$54.84</td>
                            <td className="active-column">21%</td>
                            <td className="active-column">$9.78</td>
                        </tr>
                        <tr>
                            <td>NFLX</td>
                            <td>1</td>
                            <td>$377.72</td>
                            <td>$439.63</td>
                            <td className="losses">-1.44%</td>
                            <td className="losses">-$5.38</td>
                            <td>$377.72</td>
                            <td>$439.63</td>
                            <td className="active-column">16%</td>
                            <td className="active-column">$61.91</td>
                        </tr>
                        <tr>
                            <td>FFTY</td>
                            <td>5</td>
                            <td>$28.03</td>
                            <td>$30.52</td>
                            <td className="active-column">1.79%</td>
                            <td className="active-column">$0.53</td>
                            <td>$140.15</td>
                            <td>$152.06</td>
                            <td className="active-column">8.5%</td>
                            <td className="active-column">$12.45</td>
                        </tr>
                        <tr>
                            <td>CGW</td>
                            <td>4</td>
                            <td>$32.19</td>
                            <td>$35.81</td>
                            <td className="losses">-1.38%</td>
                            <td className="losses">-$0.50</td>
                            <td>$136.76</td>
                            <td>$143.24</td>
                            <td className="active-column">11.2%</td>
                            <td className="active-column">$6.48</td>
                        </tr>
                        <tr>
                            <td>DIS</td>
                            <td>3</td>
                            <td>$101.14</td>
                            <td>$109.26</td>
                            <td className="active-column">3.30%</td>
                            <td className="active-column">4.12</td>
                            <td>$303.42</td>
                            <td>$327.78</td>
                            <td className="active-column">7.2%</td>
                            <td className="active-column">$24.36</td>
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
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
    )
}

export default Positions
