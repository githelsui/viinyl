import React from 'react';
import './Signup.css'
import TypeAnimation from 'react-type-animation'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const handleLogin = (response) => {
    console.log(response);
    console.log(response.profileObj);
}

function Signup() {
  return (
    <div className='log-wrapper'>
        <TypeAnimation
            cursor={false}
            sequence={['Viinyl:']}
            wrapper='h2'
        />
        <div> the platform for record collectors and enthusiasts </div> 
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

        {/* <GoogleLogout/> */}
    </div>
    );
}

export default Signup;
