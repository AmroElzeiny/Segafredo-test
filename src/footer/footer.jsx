import React from 'react'
import './footer.css'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import google from '../images/google.svg'
import footer_logo from '../images/footer_logo.svg'

const footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
                <div className="footer-items">
                    <a href='/' className='icon1'>HOME COFFEE</a>
                    <a href='/' className='icon2'>COFFEE MACHINES</a>
                    <a href='/' className='icon3'>Cafe Solutions</a>
                    <a href='/' className='icon4'>Office Solutions</a>
                    <a href='/' className='icon5'>SPECIAL OFFERS</a>
                    <a href='/' className='icon6'>shop</a>
                    <a href='/' className='icon7'>Service Centre</a>
                    <a href='/' className='icon8'>About Segafredo</a>
                    <a href='/' className='icon9'>Reviews</a>
                    <a href='/' className='icon10'>News</a>
                    <a href='/' className='icon11'>Contact Us</a>
                    <a className="footer-connect" href='/'>connect</a>
                </div>
                <div className="footer-icons">
                    <a href='/'><img alt='img' src={facebook}/></a>
                    <a href='/'><img alt='img' src={instagram}/></a>
                    <a href='/'><img alt='img' src={linkedin}/></a>
                    <a href='/'><img alt='img' src={google}/></a>
                </div>
                <div className="footer-info">
                © Segafredo Zanetti New Zealand<br/>
                1A Arthur Brown Pl Mount Wellington, Auckland 1060<br/>
                Phone: 0800 377 737
                </div>
                <a href='/'><img src={footer_logo} className='footer-logo' alt='img'/></a>
        </div>
    </div>
    )
}

export default footer