import React from "react";
import './Explore.css'
import Vinyls from '../components/Vinyls';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import usePromise from "react-promise";

const Explore = () => {
    const [recentReleases, setRecentReleases] = useState([])

    useEffect(() => {
       fetchDiscogDB();
      }, []);

    //   var Discogs = require('disconnect').Client;
    //   var dis = new Discogs({userToken: process.env.REACT_APP_DISCOGS_TOKEN});
    //   var db = dis.database();
    //   var currentYear = new Date().getFullYear();
    //   // return await db.search({year: currentYear, country: 'US'})['results'];
    //   const {recentReleases, loading} =  usePromise(db.search({year: currentYear, country: 'US'}).then(result => result.data));
    //   if(loading){
    //     return null;
    //   }

    const fetchDiscogDB = async () => {
        var Discogs = require('disconnect').Client;
        var dis = new Discogs({userToken: process.env.REACT_APP_DISCOGS_TOKEN});
        var db = dis.database();
        var currentYear = new Date().getFullYear();
        // return await db.search({year: currentYear, country: 'US'})['results'];
        const releases =  await db.search({year: currentYear, country: 'US'}).then(result => result.data);
        // var recent_releases = value['results'].slice(0, 10)
        // setRecentReleases(value);
        // console.log(recentReleases);
        setRecentReleases(releases);
        console.log(recentReleases)
    };
    

    return (
        <div className="profile-wrapper">
            <div className="profile">
                <div className="explore-title">explore</div>
                <div className="stats">
                        <div className="subtitle">most recent releases</div>
                </div>
            </div>
            <Vinyls albums={recentReleases}/>
        </div>
    )
}

export default Explore;