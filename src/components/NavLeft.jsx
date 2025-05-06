import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavLeft = () => {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState('Home');
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [open]);

  return (
    <div className="nav-left">
      <div className="menu-container" ref={menuRef}>
        <div className={`hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {open && (
          <div className={`menu-dropdown ${open ? 'open' : ''}`}>

            <ul>
              <Link to="/">
              <li className={activePage === 'Home' ? 'active' : ''} onClick={() => setActivePage('Home')}>
                Home
              </li>
              </Link>
              <Link to="/exchange_rates_live">
              <li className={activePage === 'Exchange Rates' ? 'active' : ''} onClick={() => setActivePage('Exchange Rates')}>
                Exchange Rates
              </li>
              </Link>
              <Link to="/about">
              <li className={activePage === 'About' ? 'active' : ''} onClick={() => setActivePage('About')}>
                About
              </li>
              </Link>
              <Link to="/error_page" >
              <li className={activePage === 'Error Page' ? 'active' : ''} onClick={() => setActivePage('Error Page')}>
                Error Page
              </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      <h1>Loan Calculator</h1>
    </div>
  );
};

export default NavLeft;
