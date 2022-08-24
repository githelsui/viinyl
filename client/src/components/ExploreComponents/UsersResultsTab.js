import React from "react";
import './ExploreResults.css'
import { Grid } from '@material-ui/core';
import Vinyl from '../Vinyl';
import { useState, useEffect, useRef} from 'react';
import { db } from '../util/firebase';
import { uid } from 'uid';
import {ref, set, onValue, remove } from "firebase/database";

const UsersResultsTab = ({query}) =>  {
    const [usersList, setUsersList] = useState([])

    const fetchQueryUsers = async () => {
        //TODO: query unique username
        onValue(ref(db, 'user/'), snapshot => {
            const data = snapshot.val();
            if(data){
                setUsersList(data);
            } 
        });
    };

    useEffect(() => {
        fetchQueryUsers();
     }, []);
    return (
        <div>
        </div>
    );
};

export default UsersResultsTab;