import React, {useState} from 'react';
import './../../assets/styles/submenu.css';

import { Link } from 'react-router-dom';


const SubMenu = ({item}) => {
    
    const [subnav, setSubnav] = useState(false)

    const showSuvnav = () => setSubnav(!subnav)
    
    return (
        <>
            <Link>
                <div className="sidebar-links-wrapper" to={item.path} onClick={item.subNav && showSuvnav}>
                    <div className="sidebar-links">
                        <div className="sidebar-links-icon">
                            {item.icon}
                        </div>
                        <div className="sidebar-links-label">
                            {item.title}
                        </div>
                    </div>
                    <div className="sub-nav">
                        {item.subNav && subnav ? item.iconOpened : item.subNav 
                            ? item.iconClosed : null}
                    </div>
                </div>        
            </Link>
            <div>
                {subnav && item.subNav.map((item, index) => {
                    return (
                    <Link className="dropdown-link" to={item.path} key={index}>
                        <div className="suvmenu-link-icon">
                            {item.icon}
                        </div>
                        <div className="suvmenu-link">
                            {item.title}
                        </div>
                    </Link>
                );
                })}
            </div>
        </>
    )
}

export default SubMenu
