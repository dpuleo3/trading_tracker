import React from 'react'

import * as FaIcons from 'react-icons/fa';

import { Button } from './Button'
import '../assets/styles/signupcomp.css'


function SignUpComp() {
    
    return (

        <div className="presentation-card-container">
            <div className="presentation-card-text">
                <p>
                    Want the best 
                    <p className="presentation-card-text-blue"> 
                        Presentation Card ?
                    </p>
                </p>
                <div className="presentation-card-icon">
                    <FaIcons.FaRegIdCard />
                </div>
            </div>
            <div className="presentation-card-wrapper" >
                <div className="sign-up-form-wrapper">
                    <div className="sign-up-header">
                        Register
                    </div>
                    <div className="sign-up-form">
                        <div className="form-goup">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="form-goup">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                        <div className="form-goup">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="Password" />
                        </div>
                        <div className="sign-up-footer">
                            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--medium'>
                                REGISTER
                            </Button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    
    )
}

export default SignUpComp
