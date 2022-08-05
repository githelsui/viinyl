import React from "react";
import './Explore.css'
import { Button } from '../components/Button';
import ExploreDefaultComponent from '../components/ExploreComponents/ExploreDefaultComponent';
import ExploreResultsComponent from '../components/ExploreComponents/ExploreResultsComponent';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef} from 'react';


const Explore = () => {
    const [searched, setSearched] = useState(false);
    const [query, setQuery] = useState('');

    const handleSearch = (input) => {
        setSearched(true)
        console.log('query')
    };

    const setDiscoveryComponent = () => {
        setSearched(false)
    }

    return (
        <div className="explore-wrapper">
            <div className="explore">
            <div className="explore-title" onClick={setDiscoveryComponent}>explore</div>
            {/* searchbar section */}
                <div className='large-searchbar'>
                 {/* <div className='dropdown'> */}
                    <input className='large-search-input' type='text' class='form-control' placeholder='search for an album, artist, users...' onChange={handleSearch}/>
                    <div className="search-btn"><Button onClick={handleSearch} buttonStyle='btn--outline' buttonSize='btn--mobile'>&gt;</Button></div>
                 {/* </div> */}
                </div>
            </div>
            { searched ? <ExploreResultsComponent/> : <ExploreDefaultComponent/> }
        </div>
    )
}

export default Explore;