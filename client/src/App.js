import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          {/* <Route path='/' exact component={}/> */}
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
    </Router>
  );
}

export default App;
