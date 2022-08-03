import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Vinyl from './Vinyl';
import './Vinyls.css'

/*
 Table display for array of Vinyl component
*/

function Vinyls({albums}) {
    return (
        <div className='vinyl-grid'>
            <Grid container justify='center' spacing={10}>
                {/* {albums.map((vinyl) => (
                    <Grid item key={vinyl.id}>
                        <Vinyl item={vinyl}/>
                    </Grid>
                ))} */}
            {albums.map(function(vinyl, i){
                return <Grid item key={i}>
                <Vinyl item={vinyl}/>
            </Grid>
            })}
            </Grid>
        </div>
    )
}

export default Vinyls;