import React from 'react'
import './section6.css'

const section6 = () => {
  return (
    <div className="section6">
        <div className="section6-container">
            <div className="section6-title">
                Get in touch!
            </div>
            <form className="section6-form-container">
                <div className="section6-form-inputs">
                    <div className="section6-contact-name" >
                        <p className='section6-contact-name-text'>Contact Name <span> *</span></p>
                        <input className='section6-contact-name-button' required></input>
                    </div>
                    <div className="section6-phone-number">
                        <p className='section6-phone-number-text'>Phone Number <span> *</span></p>
                        <input className='section6-phone-number-button' required></input>
                    </div>
                    <div className="section6-email">
                        <p className='section6-email-text'>Email <span> *</span></p>
                        <input className='section6-email-button' required></input>
                    </div>
                    <div className="section6-city">
                        <p className='section6-city-text'>City <span> *</span></p>
                        <input className='section6-city-button' required></input>
                    </div>
                    <div className="section6-comments">
                        <p className='section6-comments-text'>Comments <span> *</span></p>
                        <input className='section6-comments-button' required></input>
                    </div>
                    <input type='submit' value='Contact Us Now!' className="section6-submit-button"/>
                    
                    
                </div>
                
            </form>
        </div>
    </div>
    )
}

export default section6