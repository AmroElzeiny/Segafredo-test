import React, { useState } from 'react'
import logo from '../images/logo.svg'
import menu_icon_piece from '../images/menu-icon-piece.svg'
import nav_circle from '../images/nav-circle.svg'
import nav_facebook from '../images/nav-side-facebook.svg'
import nav_google from '../images/nav-side-google.svg'
import nav_instagram from '../images/nav-side-instagram.svg'
import nav_linkedin from '../images/nav-side-linkedin.svg'
import nav_block from '../images/nav_block.svg'
import search from '../images/search.svg'
import './nav.css'

const Nav = () => {

  
  function transform(){
    document.getElementById('menu-piece1').style.transition = 'all 0.3s ease-in-out';
    document.getElementById('menu-piece1').style.transform = 'translateY(12px)';
    document.getElementById('menu-piece1').style.opacity = '0';
    
    document.getElementById('menu-piece2').style.transition = 'all 0.3s ease-in-out';
    document.getElementById('menu-piece2').style.opacity = '0';
    
    document.getElementById('menu-piece3').style.transition = 'all 0.3s ease-in-out';
    document.getElementById('menu-piece3').style.transform = 'translateY(-12px)';
    document.getElementById('menu-piece3').style.opacity = '0';
    
    document.getElementById('menu-piece4').style.transition = 'all 0.3s ease-in-out';
    document.getElementById('menu-piece4').style.transform = 'translateY(12px)';
    document.getElementById('menu-piece4').style.transform = 'rotateZ(45deg)';
    document.getElementById('menu-piece4').style.opacity = '1';
    
    document.getElementById('menu-piece5').style.transition = 'all 0.3s ease-in-out';
    document.getElementById('menu-piece5').style.transform = 'translateY(-12px)';
    document.getElementById('menu-piece5').style.transform = 'rotateZ(-45deg)';
    document.getElementById('menu-piece5').style.opacity = '1';

    document.getElementById('nav-menu-list').style.display = 'flex'
    document.getElementById('nav-icons').style.left = '-84px'
    
    }

    const [toggle, setToggle] = useState(false)

    function unTransform(){
      document.getElementById('menu-piece1').style.transition = 'all 0.2s ease-in-out';
      document.getElementById('menu-piece1').style.transform = 'translateY(-12px)';
      document.getElementById('menu-piece1').style.opacity = '1';
      document.getElementById('menu-piece1').style.position = 'relative';
      document.getElementById('menu-piece1').style.top = '12px';
      
      document.getElementById('menu-piece2').style.transition = 'all 0.2s ease-in-out';
      document.getElementById('menu-piece2').style.opacity = '1';

      
      document.getElementById('menu-piece3').style.transition = 'all 0.2s ease-in-out';
      document.getElementById('menu-piece3').style.transform = 'translateY(12px)';
      document.getElementById('menu-piece3').style.opacity = '1';
      document.getElementById('menu-piece3').style.position = 'relative';
      document.getElementById('menu-piece3').style.top = '-12px';

      
      document.getElementById('menu-piece4').style.transition = 'all 0.2s ease-in-out';
      document.getElementById('menu-piece4').style.transform = 'translateY(12px)';
      document.getElementById('menu-piece4').style.transform = 'rotateZ(-45deg)';
      document.getElementById('menu-piece4').style.opacity = '0';
      
      document.getElementById('menu-piece5').style.transition = 'all 0.2s ease-in-out';
      document.getElementById('menu-piece5').style.transform = 'translateY(-12px)';
      document.getElementById('menu-piece5').style.transform = 'rotateZ(45deg)';
      document.getElementById('menu-piece5').style.opacity = '0';
      document.getElementById('nav-menu-list').style.display = 'none'

      document.getElementById('nav-icons').style.left = '0px'

    }

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

        <div className="nav-icons" id='nav-icons'>
          <div className="nav-search">
            <a href='/'>
              <img src={search} alt='search'/>
            </a>
          </div>
          <div className="nav-menu">
            <div href='/' className='menu-pieces-container' onClick={function(){setToggle(!toggle);toggle?transform():unTransform()}}>
            <div  className='menu-pieces'>
              <img src={menu_icon_piece} className='menu-piece1' id='menu-piece1' alt='menu'/>
              <img src={menu_icon_piece} className='menu-piece2' id='menu-piece2' alt='menu'/>
              <img src={menu_icon_piece} className='menu-piece3' id='menu-piece3' alt='menu'/>
              <img src={menu_icon_piece} className='menu-piece4' id='menu-piece4' alt='menu'/>
              <img src={menu_icon_piece} className='menu-piece5' id='menu-piece5' alt='menu'/>
            </div></div>
          </div>
        </div>









        <div className="nav-menu-list" id='nav-menu-list'>
          <div className="nav-menu-container">
            <div className="nav-main-menu">
              <div className="nav-section1">
              <div className="nav-section1-title">
                HOME COFFEE
                <img src={nav_circle} alt='img' className='nav-circle'/>
              </div>
              <div className="nav-section1-content">
                <a href='/' className="nav-section1-content1">
                  <p>Automatic Coffee Machines</p>
                </a>
                <a href='/' className="nav-section1-content2">
                <p> Capsule Coffee Machines</p>
                </a>
                <a href='/' className="nav-section1-content3">
                <p>Traditional Coffee Machines</p>
                </a>
                <img className="nav-section1-block" src={nav_block} alt='img'/>
              </div>
              </div>


              <div className="nav-section2">
                <div className="nav-section2-title">
                  Coffee Machines
                  <img src= {nav_circle} alt='img' className='nav-circle'/>
                </div>
                <div className="nav-section2-content">
                  <a href='/' className="nav-section2-content1">
                  <p>Home Coffee Machines</p>
                  </a>
                  <a href='/' className="nav-section2-content2">
                  <p>Cafe & Restaurant Machines</p>
                  </a>
                  <a href='/' className="nav-section2-content3">
                  <p>Office Coffee Machines</p>
                  </a>
                  <img className="nav-section2-block" src={nav_block} alt='img'/>
                </div>


              </div>
              <div className="nav-section3">
                <div className="nav-section3-title">
                <p>Cafe Solutions</p>
                  <img src={nav_circle} alt='img' className='nav-circle'/>
                </div>
                <img src={nav_block} alt='img' className="nav-section3-block"/>

              </div>
              <div className="nav-section4">
                <div className="nav-section4-title">
                <p>OFFICE SOLUTIONS</p>
                  <img src= {nav_circle} alt='img' className='nav-circle'/>
                </div>
                <img src={nav_block} alt='img' className="nav-section4-block"/>

              </div>
              <div className="nav-section5">
                <div className="nav-section5-title">
                <p>Special Offers</p>
                  <img src= {nav_circle} alt='img' className='nav-circle'/>
                </div>
                <img src={nav_block} alt='img' className="nav-section5-block"/>

              </div>
              <div className="nav-section6">
              <div className="nav-section6-title">
                  Shop
                  <img src= {nav_circle} alt='img' className='nav-circle'/>
                </div>
                <div className="nav-section6-content">
                  <a href='/' className="nav-section6-content1">
                  <p>Coffee</p>
                  </a>
                  <a href='/' className="nav-section6-content2">
                  <p>Coffee Grinders</p>
                  </a>
                  <a href='/' className="nav-section6-content3">
                  <p>Coffee Accessories</p>
                  </a>
                  <a href='/' className="nav-section6-content3">
                  <p>Consumables</p>
                  </a>
                  <a href='/' className="nav-section6-content3">
                  <p>Cleaning Supplies</p>
                  </a>
                </div>
                <div className="nav-section6-sub-content">
                  <a href='/' className="nav-section6-sub-content1">
                  <p>Coffee Beans</p>
                  </a>
                  <a href='/' className="nav-section6-sub-content2">
                  <p>Ground Coffee</p>
                  </a>
                  <a href='/' className="nav-section6-sub-content3">
                  <p>Coffee Capsules</p>
                  </a>
                </div>
              </div>
            </div>







            <div className="nav-side-menu">

              <div className="nav-side-menu-section1">
                <div className="nav-side-menu-section1-title">
                  <p>SERVICE CENTER</p>
                  <img src= {nav_circle} alt='img' className='nav-circle'/>
                </div>

                <img src={nav_block} alt='img' className="nav-side-menu-block"/>
              </div>


              <div className="nav-side-menu-section2">
                <div className="nav-side-menu-section2-title">
                  <p>About Segafredo</p>
                  <img src= {nav_circle} alt='img' className='nav-circle'/>
                </div>
                <div className="nav-side-menu-section2-content">
                  <p className='nav-side-menu-section2-content1'>Reviews</p>
                  <p className='nav-side-menu-section2-content2'>News</p>
                </div>
                <img src={nav_block} alt='img' className="nav-side-menu-block"/>
              </div>
              <div className="nav-side-menu-section3">
                <div className="nav-side-menu-section3-title">
                <p>Contact Us</p>
                  <img src= {nav_circle} alt='img' className='nav-circle'/>

                </div>
                <div className="nav-side-menu-section3-content1">

                </div>
                <div className="nav-side-menu-section3-content2">

                </div>
                <img src={nav_block} alt='img' className="nav-side-menu-block"/>
              </div>



              <div className="nav-side-menu-section4">
                  <div className="nav-side-menu-section4-title">
                    <p>Connect</p>
                    <img src= {nav_circle} alt='img' className='nav-circle'/>
                  </div>
                  <div className="nav-side-menu-section4-icons">
                    <a href='/'><img alt='img' src={nav_facebook}/></a>
                    <a href='/'><img alt='img' src={nav_instagram}/></a>
                    <a href='/'><img alt='img' src={nav_linkedin}/></a>
                    <a href='/'><img alt='img' src={nav_google}/></a>
                  </div>
                  <img src={nav_block} alt='img' className="nav-side-menu-block"/>
              </div>
            </div>
          </div>
        </div>

      
      </div>

      </div>
    </div>
  )
}

export default Nav