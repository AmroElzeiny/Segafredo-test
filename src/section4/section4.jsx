import React from 'react'
import './section4.css'
import right_arrow from '../images/right-arrow.svg'
import left_arrow from '../images/left-arrow.svg'
const section4 = () => {
  return (
    <div className="section4">
        <div className="section4-container">
            <p className="section4-title"></p>
            <div className="right-container">
                <button className='right'>
                    <img src={right_arrow} alt='img'/>
                </button>
                <button className='left'>
                    <img src={left_arrow} alt='img'/>
                </button>
                <button className='section4-button'>Go to Shop</button>
            </div>
        </div>
    </div>
  )
}

export default section4