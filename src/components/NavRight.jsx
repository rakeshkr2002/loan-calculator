import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavRight = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };



  return (
    <div className="nav-right">
      
      <div>
        <Link to="/">
        <Button 
          variant={activeButton === 'home' ? 'contained' : 'text'} 
          onClick={() => setActiveButton('home')}
          className='nav-right-button nav-right-responsive'
        >
          HOME
        </Button>
        </Link>
        
      </div>
      <div>
        <Button 
          variant={activeButton === 'exchange' ? 'contained' : 'text'} 
          onClick={() => setActiveButton('exchange')}
          className='nav-right-button nav-right-responsive'
        >
          EXCHANGE RATES (LIVE)
        </Button>
      </div>
      <div>
        <Link to="/about">
        <Button 
          variant={activeButton === 'about' ? 'contained' : 'text'} 
          onClick={() => setActiveButton('about')}
          className='nav-right-button nav-right-responsive'
        >
          ABOUT
        </Button>
        </Link>
      </div>
      <div>
        <Link to="/error_page">
        <Button 
          variant={activeButton === 'error' ? 'contained' : 'text'} 
          onClick={() => setActiveButton('error')}
          className='nav-right-button nav-right-responsive'
        >
          ERROR PAGE
        </Button>
        </Link>
      </div>

      <div className={`toggle-container ${isToggled ? 'toggled' : ''}`} onClick={handleToggle}>
      <div className="toggle-button"></div>
    </div>


    </div>
  );
}

export default NavRight;