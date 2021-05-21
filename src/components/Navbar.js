import React, {useState, useEffect} from 'react';

import '../assets/styles/navbar.css'
import {Link} from 'react-router-dom';
import { Button } from './Button';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };
  
    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
    return (
      <>
        <nav className='navbar'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              Trading Tracker
              <i class="fas fa-cloud-upload-alt"/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-book-open' : 'fas fa-book'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/experience' className='nav-links' onClick={closeMobileMenu}>
                  Experience
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/integrations' className='nav-links' onClick={closeMobileMenu}>
                  Integrations
                </Link>
              </li>
              <li>
                <Link to='/newsletter' className='nav-links' onClick={closeMobileMenu}>
                  Newsletters
                </Link>
              </li>
              <li>
                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
