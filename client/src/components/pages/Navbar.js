import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { FaRecordVinyl, FaTimes, FaBars } from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
      <div className='navbar'>
      <div className='navbar-container container'>
            <Link to='/' className='navbar-logo'>
                <FaRecordVinyl className='navbar-icon'/>
                Viinyl
            </Link>

            {/* mobile menu */}
            <div className='menu-icon' onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars/>}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                  <Link to='/home' className='nav-links'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/explore' className='nav-links'>
                    Explore
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-links'>
                    Profile
                  </Link>
                </li>
                <li className='nav-btn'>
                  {button ? (
                      <Link to='/signup' className='btn-link'>
                        <Button buttonStyle='btn--outline'>Sign Up</Button>
                      </Link>
                  ) : (
                      <Link to='/signup' className='btn-link'>
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
