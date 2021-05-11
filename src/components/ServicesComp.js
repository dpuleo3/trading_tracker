import React from 'react'
import '../assets/styles/services.css'



function ServicesComp() {
    
    return (

        <div className="services-container">

            <div className="list-group-wrapper">
                <ol class="list-group list-group">
                    <li id="services-item" class="list-group-item justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <h4 class="services-header">Pro Integration</h4>
                            <p class="services-text">Unite your brokerage account with Trading Tracker to automate the tracking process.</p>
                        </div>
                    </li>
                    <li id="services-item" class="list-group-item justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <h4 class="services-header">Portfolio Stats</h4>
                            <p class="services-text">Have easy access to all of your operations, cash deposits, number of shares, average share cost and more.</p>
                        </div>
                    </li>
                    <li id="services-item" class="list-group-item justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <h4 class="services-header">Live Positions</h4>
                            <p class="services-text">Have a great live view of your portfolios and its daily, weekly, monthly and yearly movements and performance.</p>
                        </div>
                    </li>
                    <li id="services-item" class="list-group-item justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <h4 class="services-header">Metrics Reports</h4>
                            <p class="services-text">Track your trading performace checking your average gain and loss, larger wins and losses, and get yo know your MoM, QoQ and YoY performance.</p>
                        </div>
                    </li>
                    <li id="services-item" class="list-group-item justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <h4 class="services-header">Performance Reports</h4>
                            <p class="services-text">Get monthly reports of your trading efficiency and compare as you get better.</p>
                        </div>
                    </li>
                    <li id="services-item" class="list-group-item justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                            <h4 class="services-header">Strategy Backtesting</h4>
                            <p class="services-text">COMMING SOON! We whant to partner whit <a href="https://pyinvesting.com/" target="_blank" rel="noreferrer">pyinvesting.com</a> to give you the best service.</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default ServicesComp
