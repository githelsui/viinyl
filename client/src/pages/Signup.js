import React from 'react';
import './Signup.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const handleLogin = (response) => {
    console.log(response);
    // console.log(response.profileObj);
}

function Signup() {
  return (
    <div>
        {/* <GoogleLogin
              clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={'single_host_origin'}
        /> */}

        <GoogleLogout/>
    </div>
    );
}

export default Signup;
