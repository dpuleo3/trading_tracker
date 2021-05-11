import React from 'react'
import '../App.css';

import '../assets/styles/integrationcard.css'
import IntegrationCard from './IntegrationCard';
import oanda from "../assets/images/oanda.jpg"
import degiro from "../assets/images/degiro.png"
import folionet from "../assets/images/folionet.png"
import ibroker from "../assets/images/ibroker.png"
import capital from "../assets/images/capital.png"
import trade_station from "../assets/images/trade_station.png"




function IntegrationsComp() {
    return (
        <>
            <h2 className="integrations-header">
                Connect your brokerage account
            </h2>
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <IntegrationCard
                            src={oanda}
                            text='OANDA'
                            path='/sign-up'
                            />
                            <IntegrationCard
                            src={trade_station}
                            text='TradeStation'
                            path='/sign-up'
                            />
                            <IntegrationCard
                            src={ibroker}
                            text='iBroker'
                            path='/sign-up'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <IntegrationCard
                            src={folionet}
                            text='Folionet'
                            path='/sign-up'
                            />
                            <IntegrationCard
                            src={capital}
                            text='Capital.com'
                            path='/sign-up'
                            />
                            <IntegrationCard
                            src={degiro}
                            text='Degiro'
                            path='/sign-up'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntegrationsComp
