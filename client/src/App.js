import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Vinyls from './components/Vinyls';

function App() {
  return (
    <Router>
      <Navbar/>
      <Vinyls/>
        <Routes>
          <Route path='/' />
        </Routes>
    </Router>
  );
}

export default App;
