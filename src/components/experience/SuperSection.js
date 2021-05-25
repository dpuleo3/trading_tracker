import React from 'react'

import * as BiIcons from 'react-icons/bi';
import tablet from "./../../assets/images/tablet.jpg"

import './../../assets/styles/supersection.css';


function SuperSection() {
    return (

        <div className="super-section-container">
            <img src={tablet} alt="tablet" />
            <div className="super-section-wrapper">
                <div className="super-section-title">
                    <p>START KNOWING YOUR OWN TRADING</p>
                </div>
                <div className="super-section-sub">
                    <p>We will help you perfect your strategy</p>
                </div>
                <div className="super-section-icon">
                    <BiIcons.BiDownArrow />
                </div>
            </div>
        </div>
    
    )
}

export default SuperSection
