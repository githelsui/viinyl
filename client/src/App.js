import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import LoggedInNavbar from './components/LoggedInNavbar';
import { useState, useEffect } from 'react';
import { BrowserRouter, BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Explore from './pages/Explore';
import AlbumInfo from './pages/AlbumInfo';

function App() {
  // run signin authentication only once when rendering the sites components
  // check if a user is already signed in and render objects accordingly
  const [isUserSignedIn, setIsUserSignedIn] = useState();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsUserSignedIn(loggedInUser);
    }
  }, []);

  if(isUserSignedIn){
    return (
      <Router>
        <LoggedInNavbar/>
          <Routes>
          <Route path='/explore' element={<Explore/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/album' element={<AlbumInfo/>}/>
          </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Navbar/>
          <Routes>
            {/* <Route path='/profile' element={<Profile/>}/> */}
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/album' element={<AlbumInfo/>}/>
          </Routes>
      </Router>
    );
  }
}

export default App;
