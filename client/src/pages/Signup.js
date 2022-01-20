import React from 'react';
import './Signup.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

const handleLogin = (response) => {
    console.log(response);
    console.log(response.profileObj);
}

function Signup() {
  return (
    <div>
        <GoogleLogin
              clientId={process.env.REACT_APP_APP_ID}
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={'single_host_origin'}
        />

        <GoogleLogout/>
    </div>
    );
}

export default Signup;
