import React from 'react';
import './../../assets/styles/metricsexample2.css'



const btn_styles = ["td-btn"]

export const RatioBtn = ({

    children, buttonStyle

}) => {

    const checkStyle = btn_styles.includes(buttonStyle) ? buttonStyle:btn_styles[0];

    return (
        
        <div className={`${checkStyle}`} >
            {children}
        </div>

    )

}
