import React, {useState}  from 'react';
import './../../assets/styles/sidebar.css';

import { Link } from 'react-router-dom';


const NavMenu = ({item}) => {

    return (
        <>
            {subMenu && item.NavBarData.map((item, index) => {
                return (
                <Link className="dropdown-link" to={item.path} key={index}> 
                    <div >                 
                        <div className="suvmenu-link-icon">
                            {item.icon}
                        </div>
                        <div className="suvmenu-link">
                            {item.title}
                        </div>  
                    </div>      
                </Link>
            );
            })}
        </>
    )
}

export default NavMenu
