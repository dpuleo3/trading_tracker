import React from 'react'
import phone_video from "../assets/videos/phone_video.mp4"
import hand_with_phone from "../assets/images/hand_with_phone.png"

import './../assets/styles/newsletterdescp.css'


function NewsletterDescp() {
    return (

        <div className="news-descp-container">
            <span className="news-text-background-black" />
            <div className="news-text-wrapper">
                <p className="news-text">
                    We focus in sharing our own data 
                    and market research to everyone
                </p>
            </div>
            <div className="news-phone-wrapper">
                <div className="hand-with-phone">
                    <img src={hand_with_phone} alt="hand with phone" />
                </div>
                <div className="phone-video">
                    <span className="phone-background-blue" />
                    <video src={phone_video} autoPlay loop muted/>
                    <span className="phone-background-black" />
                </div>
            </div>
        </div>
    
    )
}

export default NewsletterDescp
