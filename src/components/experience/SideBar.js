import React from 'react'

import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';


import './../../assets/styles/sidebar.css';
import { SideBarData } from './SideBarData';
import SubMenu from './SubMenu';


function SideBar({ children }) {

    return (
        <div className="complete-experience-container">
            <div className="experience-background">
            <nav className="horizontal-sidebar-nav">
                <div className="sidebar-nav-title" to="#" >
                    <h3>Trading Tracker</h3>
                </div>
                <div className="horizontal-sidebar-tags-wrapper">
                    <div className="tag">
                        <RiIcons.RiUserFollowFill />
                        <p>Following</p>
                    </div>
                    <div className="tag">
                        <BsIcons.BsPeopleFill />
                        <p>Followers</p>
                    </div>
                    <div className="tag">
                        <BiIcons.BiMessageDetail />
                        <p>Messages</p>
                    </div>
                    <div className="tag">
                        <BsIcons.BsPersonLinesFill />
                        <p>Profile</p>
                    </div>
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
