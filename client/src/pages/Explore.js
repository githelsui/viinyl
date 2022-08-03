import React from "react";
import './Explore.css'
import Vinyls from '../components/Vinyls';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect, useRef} from 'react';
import usePromise from "react-promise";

const Explore = () => {
    const recentReleases = useRef(null)

    useEffect(() => {
       fetchDiscogDB();
       console.log(recentReleases)
      }, []);

    const fetchDiscogDB = async () => {
        var Discogs = require('disconnect').Client;
        var dis = new Discogs({userToken: process.env.REACT_APP_DISCOGS_TOKEN});
        var db = dis.database();
        var currentYear = new Date().getFullYear();
        // return await db.search({year: currentYear, country: 'US'})['results'];
        // const releases =  await db.search({year: currentYear, country: 'US'}).then(result => result.data);
        // var recent_releases = value['results'].slice(0, 10)
        // setRecentReleases(value);
        // console.log(recentReleases);
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
            recentReleases.current = top_releases
            // console.log({recentReleases});
        });
        // console.log(recentReleases)
    };

    const vinyls = [
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
        { id: 1, album: 'Channel Orange', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'}, 
        { id: 2, album: 'Blonde', artist: 'Frank Ocean', image: 'https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg'},
    ];

    return (
        <div className="profile-wrapper">
            <div className="profile">
                <div className="explore-title">explore</div>
                <div className="stats">
                        <div className="subtitle">most recent releases</div>
                </div>
            </div>
            <Vinyls albums={vinyls}/>
        </div>
    )
}

export default Explore;