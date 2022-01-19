import React from 'react';
import './Searchbar.css';
import { Button } from './Button'

function Searchbar() {
  return (
      <div className='searchbar'>
        <div className='searchbar-dropdown'>
            <input type='text' class='form-control' placeholder='search...'/>
        </div>
      </div>
  );
}

export default Searchbar;
