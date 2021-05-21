import React from 'react'
import phones from "../assets/images/phones.png"

import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';

import '../assets/styles/experiencedescp.css'

function ExperienceDescp() {
    return (

        <div className="exp-descp-container">
            <div className="left-cards-wrapper">
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FaIcons.FaChalkboardTeacher />
                    </div>
                    <p> 
                        Have easy access to all of your operations
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FcIcons.FcCandleSticks />
                    </div>
                    <p> 
                        Track your trading performace
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FaIcons.FaRocket />
                    </div>
                    <p> 
                        Get a better view of your portfolios
                    </p>
                </div>
            </div>
            <div className="phones-wrapper">
                <img src={phones} alt="phones" />
            </div>
            <div className="right-cards-wrapper">
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FaIcons.FaChalkboardTeacher />
                    </div>
                    <p> 
                        Have easy access to all of your operations
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FcIcons.FcCandleSticks />
                    </div>
                    <p> 
                        Track your trading performace
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FaIcons.FaRocket />
                    </div>
                    <p> 
                        Get a better view of your portfolios
                    </p>
                </div>
            </div>
        </div>
    
    )
}

export default ExperienceDescp 
