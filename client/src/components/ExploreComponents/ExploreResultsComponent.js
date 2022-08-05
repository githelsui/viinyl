import React from "react";
import './ExploreResults.css'
import { Grid } from '@material-ui/core';
import Vinyl from '../Vinyl';
import { useState, useEffect, useRef} from 'react';

const ExploreResultsComponent = ({query}) => {

    return (
        <div>
        <div className="results-header ">
            <div className="subtitle">results for 
                <div className="italicize">
                 {query}
                </div>
            </div>
        </div>
        {/* <div className='vinyl-grid'>
            <Grid container justify='center' spacing={10}>
            {queryResults.map(function(vinyl, i){
                return <Grid item key={i}>
                <Vinyl item={vinyl}/>
            </Grid>
            })}
            </Grid>
        </div> */}
    </div>
    );
};

export default ExploreResultsComponent;