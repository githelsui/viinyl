import React, { useState, useEffect } from 'react';
import './Signup.css'
import TypeAnimation from 'react-type-animation'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import Axios from 'axios'
import { User } from '../models/user'
import { db } from '../util/firebase';
import {onValue, ref, set } from "firebase/database";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function Signup() {
    // stores user only within this page
    const [loginData, setLoginData] = useState(); 
    const [userExists, setUserExists] = useState();
    const [userNameComp, showUserNameComp] = useState(false);

    // check if user is signed in locally
    useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    // check if user is signed in as a session
    if (loggedInUser) {
        setLoginData(JSON.parse(loggedInUser));
    }
  }, []);

    const checkIfUserExists = (uuid) => {
        onValue(ref(db, 'user/' + `/${uuid}`), snapshot => {
            const data = snapshot.val();
            if(data){
                setUserExists(data);
            } 
        })
    };

    const createNewUserName = () => {

    };

    // login via google + store in db
    //TODO: create new unique username for new users as unique id
    const handleLogin = async (response) => {
        //login with google
        console.log("does this run")
        const user = response.profileObj;
        const uuid = response.googleId;
        //store new user in users firebase db if it doesnt already exist in db
        checkIfUserExists(uuid); 
        const user_dict = {
            id: uuid,
            email: user.email,
            fullName: user.name,
            collection_count: 0,
            wishlist_count: 0,
            friend_count: 0,
        }
        if(!userExists){
            set(ref(db, 'user/' + `/${uuid}`), {
                id: user_dict.id,
                email: user_dict.email,
                fullName: user_dict.fullName,
                collection_count: user_dict.collection_count,
                wishlist_count: user_dict.wishlist_count,
                friend_count: user_dict.friend_count,
            });
            showUserNameComp(true);
        }
        // save state of logged in user locally per session after successful login
        setLoginData(user_dict);
        localStorage.setItem('user', JSON.stringify(user_dict));
        localStorage.setItem('userID', JSON.stringify(user_dict.id));
        window.location.reload(false);
    };
    
    const handleFailure = (response) => {
        alert(response)
    };
    
    const handleLogout = () => {
        setLoginData(null);
        setUserExists(null);
        localStorage.clear();
        window.location.reload(false);
        Cache.delete();
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
                    <div className='signup-info'>/Logged in as {loginData.email}</div> 
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
                        onFailure={handleFailure}
                        cookiePolicy={'single_host_origin'}
                    /></div>
                </div>
            )
        }
    </div>
    );
}

export default Signup;
