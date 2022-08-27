import React, { useState, useEffect } from "react";
import './NewUserComponent.css'
import { db } from '../util/firebase';
import {onValue, ref, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../components/Button';

const NewUserComponent = () => {
    const [userName, setUsername] = useState(''); 
    const [userNameExist, setUserNameExists] = useState(false)
    const [loginData, setLoginData] = useState(); 

    const checkUsernameExist = () => {
        // check firebase table 'usernames'
        onValue(ref(db, 'usernames/' + `/${userName}`), snapshot => {
            const data = snapshot.val();
            if(data){
                setUserNameExists(data);
            } 
        })
    };

    const createNewUser = () => {
        if(!checkUsernameExist) {
            // save new user's username to separate username table for easy lookup
            set(ref(db, 'usernames/' + `/${userName}`), {
                id: loginData.id,
                fullName: loginData.name,
               
            });
            const user_dict = {
                id: loginData.id,
                email: loginData.email,
                username: userName,
                fullName: loginData.name,
                collection_count: 0,
                wishlist_count: 0,
                friend_count: 0,
            }
            // update user row in users table with new unique username
            set(ref(db, 'user/' + `/${loginData.id}`), {
                id: loginData.id,
                email: loginData.email,
                username: userName,
                fullName: loginData.name,
                collection_count: 0,
                wishlist_count: 0,
                friend_count: 0,
            });

            // update local storage user dict with new username
            localStorage.setItem('user', JSON.stringify(user_dict));
        } else {
            setUsername('')
            toast.error('Username already exists. Try another one.',{
                autoClose: 1000,
                hideProgressBar: true,
            });
        }
    }

    const enterUsername = e => {
        const usernameVal = e.target.value;
        if (e.key === 'Enter' && usernameVal != '') {
            setUsername(usernameVal)
            createNewUser();
            e.preventDefault();
        }
    };

    useEffect(() => {
        toast.configure();
        const loggedInUser = localStorage.getItem("user");
        // check if user is signed in as a session
        if (loggedInUser) {
            setLoginData(JSON.parse(loggedInUser));
        }
      }, []);

    return (
        <div class='new-user-comp'>
            <div className='username-input'>
                <input type='text' class='form-control' placeholder='enter your unique username here'/>
                <div className="search-btn"><Button id='search-button' onClick={enterUsername} onkeyup='' buttonStyle='btn--outline' buttonSize='btn--mobile'>&gt;</Button></div>
            </div>
        </div>
    );
};

export default NewUserComponent;