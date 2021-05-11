import { Button } from './Button'
import {Link} from 'react-router-dom';

import React from 'react'
import '../assets/styles/footer.css'


function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-description">
                <h1 className="footer-subscription-heading">
                    Join the select group of traders
                </h1>
                <h4 className="footer-subscription-text">
                    Subscribe to our Newsletter and get more than just news
                </h4>
                <div className="input-areas">
                    <form>
                        <input className="footer-input" type="email" placeholder="Email"/>
                        <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to="/">Investors</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Videos</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Team</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrapper">
                    <div className="footer-logo">
                        Trading Tracker <i id="footer-tt-logo" class="fas fa-cloud-upload-alt"/>
                    </div>
                    <small className="website-rights">TT - 2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link linkedin" to="/" target="_blank">
                            <i className="fab fa-github"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter" to="/" target="_blank">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin" to="/" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>        
        </div>
    )
}

export default Footer
