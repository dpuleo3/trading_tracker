import React from 'react'
import '../App.css'
import { Button } from './Button'

import trading_video from "../assets/videos/trading_video.mp4"
import '../assets/styles/herosection.css'


function HeroSection() {
    return (
        
        <div className="hero-container">
            <video src={trading_video} autoPlay loop />
            <h1>ENHANCE YOUR PERFORMANCE</h1>
            <p>Become a real and professional trader</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--medium'>
                    GET STARTED
                </Button>
            </div>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    WHATCH TRAILER <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    
    )
}

export default HeroSection
