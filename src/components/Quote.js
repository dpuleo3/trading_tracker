import React from 'react'
import '../assets/styles/quote.css'

function Quote() {

    return (

        <div className="description-container">

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

            <div className="description-icons">
                <i class="fas fa-laptop"></i>
                <i class="fas fa-mobile"></i>
                <i class="fas fa-chart-line"></i>
                <i class="fas fa-lightbulb"></i>
            </div>

        </div>

    );
}

export default Quote
