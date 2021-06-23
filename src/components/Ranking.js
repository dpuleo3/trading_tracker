import React from 'react'
import '../assets/styles/ranking.css'

import faux from "../assets/images/faux.jpg"
import cummings from "../assets/images/cummings.jpg"

import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';


function Ranking() {
    return (

        <div className="ranking-container">
            <div className="ranking-wrapper">
                <h1>
                    Discover where you stand among other traders in Trading Tracker
                </h1>
            </div>
            <div className="ranking-wrapper">
                <div className="rank-card">
                    <div className="rank-two">
                        <h2>2nd</h2>
                        <img src={cummings} alt="picture" className="cummings-img" />
                        <p>Brandon Warnock</p>
                        <h4 className="gains"> + 114.4%</h4>
                    </div>
                </div>
                <div className="rank-card">
                    <div className="rank-one">
                        <FaIcons.FaCrown className="crown-icon"/>
                        <img src={faux} alt="picture" className="faux-img" />
                        <p>Gordon Faux</p>
                        <h4 className="gains">+ 117.9%</h4>
                    </div>
                </div>
                <div className="rank-card">
                    <div className="rank-three">
                        <h2>3th</h2>
                        <BsIcons.BsPersonFill className="person-icon"/>
                        <p>Garrett Cummings</p>
                        <h4 className="gains">+ 102%</h4>
                    </div>
                </div>
            </div>
            <div className="ranking-wrapper">
                <h1>
                    We have a Ranking System for every type of trader
                </h1>
            </div>
        </div>

    )
}

export default Ranking
