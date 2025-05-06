import React, { useContext } from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import '../css/nav.css'
import { ThemeCurrencyContext } from '../Context-api/ThemeCurrencyContext'

const Nav = () => {
  const { theme } = useContext(ThemeCurrencyContext);

  return (
    <nav className="nav" style={{backgroundColor: theme === "dark" ? "#292e32" : "#0a6fc8" }} >
      <NavLeft></NavLeft>
      <NavRight></NavRight>
    </nav>
  )
}

export default Nav
