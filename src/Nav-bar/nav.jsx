import React from 'react'
import logo from '../images/logo.svg'
import search from '../images/search.svg'
import menu from '../images/menu.svg'
import './nav.css'
const nav = () => {
  return (
    <div className='nav'>
      <div className="nav-container">
        
        <div className="nav-logo">
          <a href='/'>
            <img src={logo} alt='logo'/>
          </a>
        </div>
      <div className="nav-sub-container">
        <div className="nav-items">
          <a href='/' className='a1'>home coffee</a>
          <a href='/' className='a2'>coffee machines</a>
          <a href='/' className='a3'>cafe solutions</a>
          <a href='/' className='a4'>office solutions</a>
          <a href='/' className='a5'>special offers</a>
          <a href='/' className='a6'>shop</a>
        </div>

        <div className="nav-icons">
          <div className="nav-search">
            <a href='/'>
              <img src={search} alt='search'/>
            </a>
          </div>
          <div className="nav-menu">
            <a href='/'>
              <img src={menu} alt='menu'/>
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default nav