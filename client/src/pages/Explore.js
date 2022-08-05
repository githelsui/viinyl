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
    const [inputQuery, setInputQuery] = useState('');
    const [query, setQuery] = useState('');
    const [discogsResults, setDiscogsResults] = useState([{}])
    
    const fetchQueryResults = async () => {
        var Discogs = require('disconnect').Client;
        var dis = new Discogs({userToken: process.env.REACT_APP_DISCOGS_TOKEN});
        var db = dis.database();
        var query_Results = []
        db.search({q: `/${query}`, country: 'US', page: 1, per_page: 30}, function(err, data){
            var query_data = data['results']
            for (var item in query_data) {
                var release = query_data[item]
                var str_chunks = release['title'].split(' - ')
                var artistStr = str_chunks[0]
                var albumStr = ''
                for(var i = 1; i < str_chunks.length; i++){
                    albumStr += str_chunks[i]
                }
                var release_dict = {
                    id: release['id'],
                    album: albumStr,
                    artist: artistStr,
                    image: release['cover_image'],
                }
                query_Results.push(release_dict)
            }
            setDiscogsResults(query_Results)
            console.log(query_Results)
        });
    };

    const handleSearch = e => {
        const queryVal = e.target.value;
        if(queryVal != '') {
            setInputQuery(queryVal)
        }
        //TODO: Create dopdown featuring only top 10 albums on query
    };

    const enterSearch = () => {
        setQuery(inputQuery);
        if(query.length != 0) {
            fetchQueryResults();
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