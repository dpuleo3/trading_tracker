import React from 'react'
import '../assets/styles/experiencedescp.css'
import phones from "../assets/images/phones.png"

import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';



function ExperienceDescp() {
    return (

        <div className="exp-descp-container">
            <div className="left-cards-wrapper">
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <BiIcons.BiLayerPlus />
                    </div>
                    <p> 
                        No more filling spreadsheets
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <HiIcons.HiReceiptTax />
                    </div>
                    <p> 
                        Taxation reports always ready for you
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FaIcons.FaUnlockAlt />
                    </div>
                    <p> 
                        Grant access to staff and clients
                    </p>
                </div>
            </div>
            <div className="phones-wrapper">
                <img src={phones} alt="phones" />
            </div>
            <div className="right-cards-wrapper">
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <MdIcons.MdPhonelink />
                    </div>
                    <p> 
                        Track your portfolio from everywhere
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <BiIcons.BiShareAlt />
                    </div>
                    <p> 
                        Share your performance with other
                    </p>
                </div>
                <div className="overview-icon">
                    <div className="icon-wrapper">
                        <FaIcons.FaPencilAlt />
                    </div>
                    <p> 
                        Follow other traders and portfolios
                    </p>
                </div>
            </div>
        </div>
    
    )
}

export default ExperienceDescp 
