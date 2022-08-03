import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './AlbumInfo.css';
import { Button } from '../components/Button';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { db } from '../util/firebase';
import { uid } from 'uid';
import {ref, set, onValue, remove } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//pass item param in from Vinyl component after database structures are created
//testing purposes:
const item = { id: 1, album: 'Channel Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'};

const AlbumInfo = () => {
    const {state} = useLocation();
    const {fetched_album} = state;
    const [collected, setCollectedStatus] = useState(false);
    const [wished, setWishlistStatus] = useState(false);
    const [loginData, setLoginData] = useState(); 
    const [userID, setUserID] = useState();

    const checkIfInCollection = (user) => {
        console.log(user.id)
        onValue(ref(db, 'collection/' + `/${user.id}` + `/${fetched_album.id}`), snapshot => {
            const data = snapshot.val();
            if(data){
                setCollectedStatus(true);
                console.log(user.id)
            } 
        });
    };

    const checkIfInWishlist = (user) => {
        onValue(ref(db, 'wishlist/' + `/${user.id}` + `/${fetched_album.id}`), snapshot => {
            const data = snapshot.val();
            if(data){
                setWishlistStatus(true);
            } 
        });
    };

    useEffect(() => {
        toast.configure();
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            var data = JSON.parse(loggedInUser);
            setLoginData(data);
            checkIfInCollection(data);
            checkIfInWishlist(data)
        }
       }, []);

    const addToCollection = () => {
        set(ref(db, 'collection/' + `/${loginData.id}` + `/${fetched_album.id}`), {
            id: fetched_album.id,
            album: fetched_album.album,
            artist: fetched_album.artist,
            image: fetched_album.image,
        });
        toast('> Album added to collection',{
            autoClose: 1000,
            hideProgressBar: true,
        });
        setCollectedStatus(true);
    };

    const addToWishlist = () => {
        set(ref(db, 'wishlist/' + `/${loginData.id}` + `/${fetched_album.id}`), {
            id: fetched_album.id,
            album: fetched_album.album,
            artist: fetched_album.artist,
            image: fetched_album.image,
        });
        toast('> Album added to wishlist',{
            autoClose: 1000,
            hideProgressBar: true,
        });
        setWishlistStatus(true);
    };

    const removeFromCollection = () => {
        remove(ref(db, 'collection/' + `/${loginData.id}` + `/${fetched_album.id}`))
        .then(() => {
            setCollectedStatus(false);
            toast('> Album removed from collection',{
                autoClose: 1000,
                hideProgressBar: true,
            });
        })
        .catch((error) => {
            toast('> Failed to remove album. Try again.',{
                autoClose: 1000,
                hideProgressBar: true,
            });
        });
    };

    const removeFromWishlist = () => {
        remove(ref(db, 'wishlist/' + `/${loginData.id}` + `/${fetched_album.id}`))
        .then(() => {
            setWishlistStatus(false);
            toast('> Album removed from wishlist',{
                autoClose: 1000,
                hideProgressBar: true,
            });
        })
        .catch((error) => {
            toast('> Failed to remove album. Try again.',{
                autoClose: 1000,
                hideProgressBar: true,
            });
        });
    };

    return (
        <div className="info-wrapper">
            <div className="large-album-name">{fetched_album.album}</div>
            <div className="large-artist-name">{fetched_album.artist}</div>
    
            <div className="large-card">
                <img src={fetched_album.image} className="large-card--cover"/>
            </div>
            {collected ? 
                (<div className="album-action-btn">
                <Button onClick={removeFromCollection} buttonStyle='btn--disabled' buttonSize='btn--mobile'>&gt; remove from collection</Button>
                </div>) : 
                (<div className="album-action-btn">
                <Button onClick={addToCollection} buttonStyle='btn--outline' buttonSize='btn--mobile'>&gt; add to collection</Button>
                </div>)
            }
            {wished ? 
                (<div className="album-action-btn">
                <Button onClick={removeFromWishlist} buttonStyle='btn--disabled' buttonSize='btn--mobile'>&gt; remove from wishlist</Button>
                </div>) : 
                (<div className="album-action-btn">
                <Button onClick={addToWishlist} buttonStyle='btn--outline' buttonSize='btn--mobile'>&gt; add to wishlist</Button>
                </div>)}
        </div>
    )
}

export default AlbumInfo;