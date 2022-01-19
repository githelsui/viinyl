import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar/>
      <Profile/>
        <Routes>
          <Route path='/' />
        </Routes>
    </Router>
  );
}

export default App;
