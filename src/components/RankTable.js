import React from 'react'
import '../assets/styles/ranking.css'

import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';



function RankTable() {
    return (

        <div className="ranking-container">

            <span className="rank-background" />


            <div className="rank-icons-wrapper">
                <RiIcons.RiMedal2Fill className="medal-icon"/>
                <AiIcons.AiFillTrophy className="trophy-icon"/>
                <RiIcons.RiMedal2Fill className="medal-icon"/>
            </div>
            <div className="rank-descp-wrapper">
                <p>
                    Learn and compare your performance with the other traders
                </p>
                <p>
                    Earn your stripes in the stock market industry
                </p>
            </div>
        </div>

    )
}

export default RankTable
