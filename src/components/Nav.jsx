import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'
import '../css/nav.css'

const Nav = () => {
  return (
    <nav className="nav">
      <NavLeft></NavLeft>
      <NavRight></NavRight>
    </nav>
  )
}

export default Nav
