import './App.css';
import React from "react";
import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { BrowserRouter, BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import AlbumInfo from './pages/AlbumInfo';

function App() {
  // run signin authentication only once when rendering the sites components
  // check if a user is already signed in and render objects accordingly
  // useEffect(() => (
  //   //global google from /Public/index.html
  //   google.accounts.id.initialize
  // ), []);

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/album' element={<AlbumInfo/>}/>
        </Routes>
    </Router>
  );
}

export default App;
