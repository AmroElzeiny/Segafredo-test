import React from 'react'
import truck from '../images/truck.svg'
import call from '../images/customer service.svg'
import shop from '../images/cart-3.svg'
import person from '../images/circle-user.svg'
import verticalLine from '../images/Line 26.svg'
import heart from '../images/heart.svg'
import cart from '../images/cart2.svg'
import './Header.css'

const Header = () => {
  return (
    
    <div className="header">
      <div className="header-container">
      <div className="header-items">
        <div className="header-truck">
          <div className="header-truck-icon">
            <a href='/'>
              <img src={truck} alt='img'/>
            </a>
          </div>
          <p className="header-truck-text">
            FREE DELIVERY WITH EVERY ORDER OVER $50
          </p>
        </div>
        <div className="header-call">
          <div className="header-call-icon">
            <a href='/'>
              <img src={call} alt='img'/>
            </a>
          </div>
          <p className="header-call-text">
            CALL US TOLL FREE: 0800 377 737
          </p>
        </div>
        <div className="header-shop">
        <div className="header-shop-icon">
        <a href='/'>
              <img src={shop} alt='img'/>
            </a>
        </div>
        <p className="header-shop-text">
          SHOWROOM OPEN MONDAY - FRIDAY 8.30AM - 5.00PM<br/>CLOSED ON PUBLIC HOLIDAYS

        </p>
        </div>
      </div>

      <div className="header-icons">
        <a href='/'>
          <img src={person} alt='img' className='header-person'/>
        </a>

        <a href='/'>
          <img src={verticalLine} alt='img' className='header-line'/>
        </a>

        <a href='/'>
          <img src={heart} alt='img' className='header-heart'/>
        </a>

        <a href='/'>
          <img src={cart} alt='img' className='header-cart'/>
        </a>
      </div>
    </div></div>
  )
}

export default Header