import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { FaRecordVinyl, FaTimes, FaBars } from 'react-icons/fa'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

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
            {click ? <FaTimes /> : <FaBars/>}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                    <div className='nav-text'>Home</div>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/explore' className='nav-links' onClick={closeMobileMenu}>
                    <div className='nav-text'>Explore</div>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                    <div className='nav-text'>Profile</div>
                  </Link>
                </li>
                <li className='nav-btn'>
                  {button ? (
                      <Link to='/signup' className='btn-link' onClick={closeMobileMenu}>
                        <Button buttonStyle='btn--outline'>Sign Up</Button>
                      </Link>
                  ) : (
                      <Link to='/signup' className='btn-link' onClick={closeMobileMenu}>
                        <Button buttonStyle='btn--outline'
                        buttonSize='btn--mobile'>
                          Sign Up
                        </Button>
                      </Link>
                  )}
                </li>
            </ul>

          </div>
      </div>
  );
}

export default Navbar;
