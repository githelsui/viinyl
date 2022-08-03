import React, { useState } from "react";
import './AlbumInfo.css';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { db } from '../util/firebase';
import { uid } from 'uid';
import {ref, set } from "firebase/database";

//pass item param in from Vinyl component after database structures are created
//testing purposes:
// const temp = { id: 1, album: 'Channel Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'};


const AlbumInfo = ({item}) => {

    const [collected, setCollectedStatus] = useState('');
    const [wished, setWishlistStatus] = useState('');

    //should change temp to item after tables created
    const addToCollection = () => {
        const uuid = uid(); 
        set(ref(db, 'collection/' + `/${uuid}`), {
            id: {item}.id,
            album: {item}.album,
            artist: {item}.artist,
            image: {item}.image,
        });
    };

    const addToWishlist = () => {

    };

    return (
        <div className="info-wrapper">
            <div className="large-album-name">{item.album}</div>
            <div className="large-artist-name">{item.artist}</div>
    
            <div className="large-card">
                <img src={item.image} className="large-card--cover"/>
            </div>
            <div className="album-action-btn">
            <Button onClick={addToCollection} buttonStyle='btn--outline' buttonSize='btn--mobile'>&gt; add to collection</Button>
            </div>
            <div className="album-action-btn">
            <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>&gt; add to wishlist</Button>
            </div>
        </div>
    )
}

export default AlbumInfo;