import React from 'react'

import macbook_clean from "../assets/images/macbook_clean.png"
import laptop_screen from "../assets/images/laptop_screen.jpg"
import '../assets/styles/warriorsection.css'
import { Button } from './Button'


// API KEY NewsAPI
// d162ad4f48ae40a6b49cc3ea18ab0cee


function WarriorSection() {

    return (
        
        <div className="newsletter-container">
            <div className="header-wrapper">
                <div className="newsletter-title">
                    <p>Get</p> <p className="more">MORE</p> 
                    <p>than just news</p>
                    <div className="newsletter-btn">
                        <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>
                <div className="newsletter-image-wrapper">
                    <img className="screen" src={laptop_screen} alt="screen" />
                    <img className="macbook" src={macbook_clean} alt="macbook" />
                </div>
            </div>
        </div>
    
    )
}

export default WarriorSection
