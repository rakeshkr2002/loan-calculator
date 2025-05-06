import React, { useContext, useState, useCallback, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Link, useLocation } from 'react-router-dom';
import { ThemeCurrencyContext } from '../Context-api/ThemeCurrencyContext';

const NavRight = () => {
  const [activeButton, setActiveButton] = useState('home');
  const { toggleTheme } = useContext(ThemeCurrencyContext);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = useCallback(() => {
    setIsToggled((prev) => !prev);
    toggleTheme();
  }, [toggleTheme]);

 

  return (
    <div className="nav-right">
      <div>
        <Link to="/">
          <Button 
            variant={activeButton === 'home' ? 'contained' : 'text'} 
            onClick={() => setActiveButton('home')}
            className="nav-right-button nav-right-responsive"
          >
            HOME
          </Button>
        </Link>
      </div>

      <div>
        <Link to="/exchange_rates_live">
          <Button 
            variant={activeButton === 'exchange' ? 'contained' : 'text'} 
            onClick={() => setActiveButton('exchange')}
            className="nav-right-button nav-right-responsive"
          >
            EXCHANGE RATES (LIVE)
          </Button>
        </Link>
      </div>

      <div>
        <Link to="/about">
          <Button 
            variant={activeButton === 'about' ? 'contained' : 'text'} 
            onClick={() => setActiveButton('about')}
            className="nav-right-button nav-right-responsive"
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
            className="nav-right-button nav-right-responsive"
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
};

export default NavRight;