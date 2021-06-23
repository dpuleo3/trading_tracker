import React from 'react'
import '../assets/styles/quote.css'

import * as BiIcons from 'react-icons/bi';
import * as RiIcons from 'react-icons/ri';



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
            <div className="quote-icons-wrapper">
                <BiIcons.BiSpreadsheet className="sheet-icon"/>
                <RiIcons.RiQuillPenFill className="pen-icon"/>
            </div>
        </div>

    );
}

export default Quote
