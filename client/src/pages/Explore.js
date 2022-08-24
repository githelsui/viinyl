import React from "react";
import './Explore.css'
import { Button } from '../components/Button';
import ExploreDefaultComponent from '../components/ExploreComponents/ExploreDefaultComponent';
import ExploreResultsComponent from '../components/ExploreComponents/ExploreResultsComponent';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../components/Tabs.css'
import SearchedResultsTab from '../components/ExploreComponents/SearchedResultsTab';
import UsersResultsTab from '../components/ExploreComponents/UsersResultsTab';
import { useState, useEffect, useRef} from 'react';


const Explore = () => {
    const [searched, setSearched] = useState(false);
    const [activeTab, setActiveTab] = useState("ReleasesTab");
    const [inputQuery, setInputQuery] = useState('');
    const [query, setQuery] = useState('');

     //  Functions to handle Tab Switching
  const handleTab1 = () => {
    // update the state to Collections Tab
    setActiveTab("ReleasesTab");
  };
  const handleTab2 = () => {
    // update the state to Wishlist Tab
    setActiveTab("UsersTab");
  };

    const handleSearch = e => {
        const queryVal = e.target.value;
        setSearched(false)
        if(queryVal != '') {
            setInputQuery(queryVal)
        }
        if (e.key === 'Enter') {
            enterSearch();
            e.preventDefault();
            console.log('enter hit')
        }
        //TODO STRETCH: Create dopdown featuring only top 10 albums on query
    };

    const enterSearch = () => {
        if(inputQuery.length != 0) {
            setSearched(true);
            setQuery(inputQuery);
            console.log(inputQuery)
        }
        setInputQuery('')
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
                    <input className='large-search-input' type='text' placeholder='search for albums, users, etc.' onKeyDown={handleSearch}/>
                    <div className="search-btn"><Button id='search-button' onClick={enterSearch} onkeyup='' buttonStyle='btn--outline' buttonSize='btn--mobile'>&gt;</Button></div>
                 {/* </div> */}
                </div>
            </div>
            { searched ? 
                <div className="Tabs">
                <ul className="nav">
                    <li className={activeTab === "ReleasesTab" ? "active" : ""} onClick={handleTab1}>Albums</li>
                    <li className={activeTab === "UsersTab" ? "active" : ""}  onClick={handleTab2}>Users</li>
                 </ul>
                <div className="outlet">
                    {activeTab === "ReleasesTab" ? <SearchedResultsTab query={query}/> : <UsersResultsTab query={query}/>}
                </div>
            </div>
            : <ExploreDefaultComponent/> 
            }
        </div>
    )
}

export default Explore;