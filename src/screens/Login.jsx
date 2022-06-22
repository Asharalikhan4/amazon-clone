import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login(){
    return(
        <div className='login'>
        <Link to='/'>
        <img className='login_logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'/>
        </Link>
        <div className='login_container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='email'/>
                <h5>Password</h5>
                <input type='password'/>
                <button className='login_signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to Amazon's Conditions of use & sale. Please see our Priacy Notice, our Cookies Notice and our Interest-Based Ads.
            </p>
            <button className='login_registerButton'>Create your Amazon Account</button>
        </div>
        </div>
    );
}

export default Login;