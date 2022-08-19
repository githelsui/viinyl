import React from "react";
import './ExploreResults.css'
import { Grid } from '@material-ui/core';
import Vinyl from '../Vinyl';
import '../Tabs.css'
import SearchedResultsTab from './SearchedResultsTab';
import UsersResultsTab from './UsersResultsTab';
import { useState, useEffect, useRef} from 'react';

const ExploreResultsComponent = ({query}) => {
    const [discogsResults, setDiscogsResults] = useState([{}])
    const [activeTab, setActiveTab] = useState("ReleasesTab");

    //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to Collections Tab
    setActiveTab("ReleasesTab");
  };
  const handleTab2 = () => {
    // update the state to Wishlist Tab
    setActiveTab("UsersTab");
  };
    
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

    useEffect(() => {
       fetchQueryResults();
    }, []);

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
            {discogsResults.map(function(vinyl, i){
                return <Grid item key={i}>
                <Vinyl item={vinyl}/>
            </Grid>
            })}
            </Grid>
        </div> */}
        <div className="Tabs">
             <ul className="nav">
            <li className={activeTab === "ReleasesTab" ? "active" : ""} onClick={handleTab1}>Albums</li>
            <li className={activeTab === "UsersTab" ? "active" : ""}  onClick={handleTab2}>Users</li>
         </ul>
        <div className="outlet">
            {activeTab === "ReleasesTab" ? <SearchedResultsTab query={query}/> : <UsersResultsTab query={query}/>}
        </div>
    </div>
    </div>
    );
};

export default ExploreResultsComponent;