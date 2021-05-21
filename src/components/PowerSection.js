import React from 'react';
import single_phone from "../assets/images/single_phone.png"

import '../assets/styles/powersection.css'
import { Button } from './Button'



function PowerSection() {
    return (
        <div className="power-container">

            <span className="power-background" />
            
            <div className="power-preview-wrapper">
                <div className="power-text-wrapper">
                    <p className="power-title">Just Trade,</p>
                    <p className="power-subtitle">we will do the rest</p>
                </div>
                <div className="power-button">
                    <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                        GET STARTED
                    </Button>
                </div>
            </div>
            <div className="phone-wrapper">
                <img className="single-phone" src={single_phone} alt="phone"/>
            </div>
        </div>
    )
}

export default PowerSection
