import React from 'react'
import './section1.css'
import image_1 from '../images/image-1.svg'
import image_2 from '../images/image-2.svg'
import image_3 from '../images/image-3.svg'
import icon_circle from '../images/section1-icon1.svg'
const Section1 = () => {
    
    return (
        <div className='section1'>
            <p className='section1-text'>
                it’s more than a cup of coffee It’s <span className='section1-span'>an experience to be enjoyed</span>
            </p>

            <div className="section1-layouts">
                <div className="section1-pics">
                    <img src={image_1} alt='image_1' className='section1-image1'/>
                    <img src={image_2} alt='image_2' className='section1-image2'/>
                    <img src={image_3} alt='image_3' className='section1-image3'/>            
                </div>
                <div className="box-shadows">
                    <div className="box-shadow1"></div>
                    <div className="box-shadow2"></div>
                    <div className="box-shadow3"></div>
                </div>
                <div className="icon-div">
                <a  href='#section2'>
                    <img src={icon_circle} alt='circle' className='icon-circle' id='icon-circle' onMouseEnter={function transition(){const icon_circle = document.getElementById('icon-circle').style; 
                        icon_circle.backgroundPositionY = '80%'; 
                        icon_circle.transitionDuration = '0.2s';
                        icon_circle.filter = 'invert(23%) sepia(57%) saturate(3258%) hue-rotate(336deg) brightness(85%) contrast(102%)';}}
                        onMouseLeave={function un_transition(){
                            const icon_circle = document.getElementById('icon-circle').style; 
                            icon_circle.backgroundPositionY = '50%'; 
                            icon_circle.transitionDuration = '0.2s';
                            icon_circle.filter = '';
                        }}/>
                </a>
                </div>
            </div>
        </div>
  )
}

export default Section1