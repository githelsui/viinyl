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

    const handleSearch = e => {
        const queryVal = e.target.value;
        if(queryVal != '') {
            setQuery(queryVal)
        }
        //TODO: Create dopdown featuring only top 10 albums on query
    };

    const enterSearch = () => {
        if(query.length != 0) {
            setSearched(true)
        }
    }

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
                    <input className='large-search-input' type='text' placeholder='search for albums, users, etc.' onChange={handleSearch}/>
                    <div className="search-btn"><Button onClick={enterSearch} buttonStyle='btn--outline' buttonSize='btn--mobile'>&gt;</Button></div>
                 {/* </div> */}
                </div>
            </div>
            { searched ? <ExploreResultsComponent query={query}/> : <ExploreDefaultComponent/> }
        </div>
    )
}

export default Explore;