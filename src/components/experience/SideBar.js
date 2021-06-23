import React from 'react'
import './../../assets/styles/sidebar.css';

import { SideBarData } from './SideBarData';
import { NavBarData } from './NavBarData';

import SubMenu from './SubMenu';
import NavMenu from './SubMenu';


function SideBar({ children }) {

    return (
        <div className="complete-experience-container">
            <div className="experience-background">
                <nav className="horizontal-sidebar-nav">
                    <div className="sidebar-nav-title">
                        <h3>Trading Tracker</h3>
                    </div>
                    <div className="horizontal-sidebar-tags-wrapper">
                        {NavBarData.map((item, index) => {
                            return <NavMenu item={item} key={index} />; 
                        })}
                    </div>
                </nav>
                <div className="sidebar-nav">
                    <div className="sidebar-wrapper">
                        {SideBarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />; 
                        })}
                    </div>    
                </div> 
                <div className="experience-display-wrapper">
                    <div className="experience-display">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SideBar
