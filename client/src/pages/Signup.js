import React, { useState } from 'react';
import './Signup.css'
import TypeAnimation from 'react-type-animation'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import Axios from 'axios'
import { User } from '../models/user'
import { db } from '../util/firebase';
// import { persist }

function Signup() {

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null    
    );

    const handleLogin = async (response) => {
        //login with google
        console.log(response);
        console.log(response.profileObj);
        const user = response.profileObj;
        //todo: Axios may not be used
        //using Axios to make sql requests
        setLoginData(user);
        Axios.post('http://localhost:3001/api/insert', {
            googleId: response.googleId,
            email: user.email,
            fullName: user.name,
        }).then(() => {
            alert("successful account login");
        });
        //store new user in users db
    };
    
    const handleFailure = (response) => {
        alert(response)
    };
    
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null)
    };

  return (
    <div className='log-wrapper'>
        <TypeAnimation
            cursor={false}
            sequence={['Viinyl:']}
            wrapper='h2'
        />
        <div> the platform for record collectors and enthusiasts </div> 
        {
            loginData ? (
                <div>
                    <div className='signup-info'>/Logged in as {loginData.name}</div> 
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <div className='signup-info'>&gt; share your collection</div> 
                    <div className='signup-info'>&gt; explore new records</div> 
                    <div className='signup-info'>&gt; add to your wishlist</div> 
                    <div className='signup-info'>&gt; connect with friends</div> 
                    <div className='signup-btn'><GoogleLogin 
                        clientId={process.env.REACT_APP_APP_ID}
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleLogin}
                        cookiePolicy={'single_host_origin'}
                    /></div>
                </div>
            )
        }
    </div>
    );
}

export default Signup;
