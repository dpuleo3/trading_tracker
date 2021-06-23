import React from 'react';
import './../../assets/styles/metricsexample2.css'



const btn_styles = ["gains"]

export const RatioInput = ({

    buttonStyle

}) => {

    const checkStyle = btn_styles.includes(buttonStyle) ? buttonStyle:btn_styles[0];

    return (
        
        <input type="text" className={`${checkStyle}`} />

    )

}
