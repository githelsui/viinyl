import React from 'react';
import { Grid } from '@material-ui/core';
import Vinyl from './Vinyl';

const vinyls = [
    { id: 1, album: 'Channel Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}, 
    { id: 2, album: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}
];

function Vinyls() {
    return (
        <Grid container justify='center' spacing={4}>
            {vinyls.map((vinyl) => (
                <Grid item key={vinyl.id} xs={12} sm={6} md={4} lg={3}>
                    <Vinyl item={vinyl}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default Vinyls;