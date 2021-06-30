import React from 'react'
import '../assets/styles/follow-comps.css'

import * as FaIcons from 'react-icons/fa';

import foto_dp from "../assets/images/foto_dp.jpg"

function Following() {

    return (

        <div className="follow-container">

            <span className="follow-background"/>
            
            <div className="following-wrapper">

                <div className="follow-text-wrapper">
                    <p className="follow-text">
                        Connect with other traders and share insights
                        by choosing who to follow and who follows you
                    </p>
                </div>
                <div className="follow-pop">
                    <p className="pop-text">
                        FOLLOW REQUEST
                    </p>
                </div>
                <div id ="follow-card" class="card mb-5">
                    <div class="row g-5">
                        <div class="col-md-4">
                            <img src={foto_dp} alt="Daniel Puleo" className="foto_dp"/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Daniel Puleo</h3>
                                <h5 class="card-text">Trader at Knossos Asset Mgmt</h5>
                                <p className="rank-color">Rank #19</p>
                                <p class="card-text">Stocks Division: Golden League</p>
                                <p class="gains">AVG Gain +6.42%</p>
                                <p class="card-text">
                                    <FaIcons.FaTwitter className="twitter-icon"/>
                                    <small class="text-muted">dpuleo19</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    
    )
}

export default Following
