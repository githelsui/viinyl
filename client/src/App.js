import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import AlbumInfo from './pages/AlbumInfo';

function App() {
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
