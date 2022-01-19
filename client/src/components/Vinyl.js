import React from "react";
import './Vinyl.css'
import { Link } from 'react-router-dom'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';

const Vinyl = ({item}) => {
    return (
            <Link to='/' className="card">
                <img src={item.image} className="card--cover"/>
                <div className="record"/> 
                <div className="card-content">
                    <div className="album-name">{item.album}</div>
                    <div className="artist">{item.artist}</div>
                </div>
            </Link>
    )
}

export default Vinyl;