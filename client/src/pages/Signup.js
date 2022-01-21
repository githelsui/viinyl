import React, { useState } from 'react';
import './Signup.css'
import TypeAnimation from 'react-type-animation'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import Axios from 'axios'

function Signup() {

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null    
    );

    const handleLogin = async (response) => {
        console.log(response);
        console.log(response.profileObj);
        const user = response.profileObj;
        //using Axios to make sql requests
        setLoginData(user);
        Axios.post('http://localhost:3001/api/insert', {
            googleId: response.googleId,
            email: user.email,
            fullName: user.name,
        }).then(() => {
            alert("successful account login");
        });

        // // using google api
        // const result = await fetch('/api/google-login', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         token: response.tokenId,
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Credentials' : true,
        //     },
        // });

        // const data = await result.json();
        // localStorage.setItem('loginData', JSON.stringify(data))
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
                    {/* <GoogleLogout/> */}
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <div className='signup-info'>/share your collection</div> 
                    <div className='signup-info'>/explore new records</div> 
                    <div className='signup-info'>/add to your wishlist</div> 
                    <div className='signup-info'>/connect with friends</div> 
                    <GoogleLogin 
                        clientId={process.env.REACT_APP_APP_ID}
                        buttonText="Log in with Google"
                        onSuccess={handleLogin}
                        onFailure={handleLogin}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            )
        }
    </div>
    );
}

export default Signup;
