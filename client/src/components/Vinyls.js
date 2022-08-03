import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Vinyl from './Vinyl';
import './Vinyls.css'
import { useState, useEffect, useRef} from 'react';

/*
 Table display for array of Vinyl component
*/
const vinyls = [
    { id: 1, album: 'boob Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}, 
    { id: 2, album: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'},
    { id: 1, album: 'Channel Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}, 
    { id: 2, album: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'},
    { id: 1, album: 'Channel Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}, 
    { id: 2, album: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'},
    { id: 1, album: 'Channel Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}, 
    { id: 2, album: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'},
    { id: 1, album: 'Channel Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}, 
    { id: 2, album: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'},
    { id: 1, album: 'Channel Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}, 
    { id: 2, album: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'},
];

function Vinyls({albums}) {
    return (
        <div className='vinyl-grid'>
            <Grid container justify='center' spacing={10}>
            {vinyls.map(function(vinyl, i){
                return <Grid item key={i}>
                <Vinyl item={vinyl}/>
            </Grid>
            })}
            </Grid>
        </div>
    )
}

export default Vinyls;