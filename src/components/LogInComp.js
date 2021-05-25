import React from 'react'
import '../assets/styles/signupcomp.css'


function LogInComp() {
    return (
        <div className="sign-up-form-wrapper">
        <div className="sign-up-header">
            Log In
        </div>
        <div className="sign-up-form">
            <div className="form-goup">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" />
            </div>
            <div className="form-goup">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" placeholder="Password" />
            </div>
            <div className="sign-up-footer">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--medium'>
                    LOG IN
                </Button>
            </div>
        </div> 
    </div>
    )
}

export default LogInComp
