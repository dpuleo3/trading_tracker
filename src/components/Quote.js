import React from 'react'
import '../assets/styles/quote.css'

import minervini from "../assets/images/minervini.jpg"
import minervini2 from "../assets/images/minervini2.jpg"


function Quote() {

    return (

        <div className="description-container">

            <span className="quote-background" />

            <div className="description-text">
                <i class="fas fa-quote-left"></i>
                <p className="description-quote">
                    By keeping track of your results, you will gain insight into 
                    yourself and your trading that no book, seminar, indicator, or
                    system could ever tell you 
                </p>
                <i class="fas fa-quote-right"></i>
                <p className="quote-author">
                    <a href="https://minervini.com/home.php" target="-blank">- Mark Minervini</a>
                </p>
            </div>

            <span className="photos-background-blue" />
            <span className="photos-background-grey" />

            <div className="description-icons">
                <div className="minervini-photos-wrapper">
                    <div className="minervini-books">
                        <img src={minervini} alt="minervini"/>
                    </div>
                    <div className="minervini-web">
                        <img src={minervini2}  alt="minervini2"/>
                    </div>
                </div>
                {/* <i class="fas fa-laptop"></i>
                <i class="fas fa-mobile"></i>
                <i class="fas fa-chart-line"></i>
                <i class="fas fa-lightbulb"></i> */}
            </div>

        </div>

    );
}

export default Quote
