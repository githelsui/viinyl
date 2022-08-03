import React from "react";
import './Explore.css'
import Vinyls from '../components/Vinyls';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Vinyl from '../components/Vinyl';
import axios from 'axios';
import { useState, useEffect, useRef} from 'react';
import usePromise from "react-promise";

/*
 Table display for array for Explore releases
*/

const Explore = () => {

    const [recentReleases, setRecentReleases] = useState([])

    const fetchDiscogDB = async () => {
        var Discogs = require('disconnect').Client;
        var dis = new Discogs({userToken: process.env.REACT_APP_DISCOGS_TOKEN});
        var db = dis.database();
        var currentYear = new Date().getFullYear();
        var top_releases = []
        db.search({year: currentYear, country: 'US'}, function(err, data){
            var recent_releases = data['results'].slice(0, 12)
            for (var item in recent_releases) {
                var release = recent_releases[item]
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
                top_releases.push(release_dict)
            }
            setRecentReleases(top_releases)
        });
    };

    useEffect(() => {
        fetchDiscogDB();
       }, []);

    return (
        <div className="profile-wrapper">
            <div className="profile">
                <div className="explore-title">explore</div>
                <div className="stats">
                        <div className="subtitle">most recent releases</div>
                </div>
            </div>
            <div className='vinyl-grid'>
            <Grid container justify='center' spacing={10}>
            {recentReleases.map(function(vinyl, i){
                return <Grid item key={i}>
                <Vinyl item={vinyl}/>
            </Grid>
            })}
            </Grid>
        </div>
        </div>
    )
}

export default Explore;