import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { FaRecordVinyl, FaTimes, FaBars } from 'react-icons/fa'
import { Button } from './Button'
import  Searchbar from './Searchbar'
import './Navbar.css'
import barsImage from '../assets/bars.png'
import xImage from '../assets/x.png'
import circleXImage from '../assets/circlex.png'

function LoggedInNavbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [search, setSearch] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const showSearch = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  window.addEventListener('resize', showButton);

  return (
      <div className='navbar'>
      <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <FaRecordVinyl className='navbar-icon'/>
                <div className='nav-text'>viinyl</div>
            </Link>

        

            {/* mobile menu */}
            <div className='menu-icon' onClick={handleClick}>
            {click ? <img src={xImage} width='30px' padding-right='10px'/> : <img src={barsImage} />}
            </div>

            <Searchbar className='remove-search'/>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                    <div className='nav-text'>feed</div>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/explore' className='nav-links' onClick={closeMobileMenu}>
                    <div className='nav-text'>explore</div>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-links' id='profile-nav-link' onClick={closeMobileMenu}>
                    <div className='nav-text'>profile</div>
                  </Link>
                </li>
                <li className='nav-btn'>
                  {button ? (
                      <Link to='/signup' className='btn-link' onClick={closeMobileMenu}>
                        <Button buttonStyle='btn--outline'>Logout</Button>
                      </Link>
                  ) : (
                      <Link to='/signup' className='btn-link' onClick={closeMobileMenu}>
                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                          Logout
                        </Button>
                      </Link>
                  )}
                </li>
            </ul>

          </div>
      </div>
  );
}

export default LoggedInNavbar;
