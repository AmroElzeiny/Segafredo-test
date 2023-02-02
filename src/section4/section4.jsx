/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import './section4.css'
import right_arrow from '../images/right-arrow.svg'
import left_arrow from '../images/left-arrow.svg'
import section4_img1 from '../images/section4-img1.svg'
import section4_img2 from '../images/section4-img2.svg'
import section4_img3 from '../images/section4-img3.svg'
import section4_img4 from '../images/section4-img4.svg'
import empty_heart from '../images/empty-heart.svg'
import full_heart from '../images/full-heart.svg'
import section4_icon_container from '../images/section4-icon-container.svg'
import { useState } from 'react'
import { useEffect } from 'react'

const Section4 = () => {
    const [cardss, setCardss] = useState([
        {id: 1, image: section4_img1, title: 'COFFEE BEANS', description: 'Intermezzo Beans 500g', price: '$20', empty: empty_heart, full: full_heart},
        {id: 2, image: section4_img2, title: 'COFFEE MACHINES', description: 'Dr. Coffee Minibar', price: '$5,050.00 – $6,050.00', empty: empty_heart, full: full_heart},
        {id: 3, image: section4_img3, title: 'GROUND COFFEE', description: 'Emozioni Ground Coffee 250g', price: '$12.50', empty: empty_heart, full: full_heart},
        {id: 4, image: section4_img4, title: 'GROUND COFFEE', description: 'Decaf Roasted Ground 250gr', price: '$9.95', empty: empty_heart, full: full_heart},
        {id: 5, image: section4_img1, title: 'COFFEE BEANS', description: 'Intermezzo Beans 500g', price: '$20', empty: empty_heart, full: full_heart},
        {id: 6, image: section4_img2, title: 'COFFEE MACHINES', description: 'Dr. Coffee Minibar', price: '$5,050.00 – $6,050.00', empty: empty_heart, full: full_heart},
        {id: 7, image: section4_img3, title: 'GROUND COFFEE', description: 'Emozioni Ground Coffee 250g', price: '$12.50', empty: empty_heart, full: full_heart},
        {id: 8, image: section4_img4, title: 'GROUND COFFEE', description: 'Decaf Roasted Ground 250gr', price: '$9.95', empty: empty_heart, full: full_heart}
        ]);
        // function addToBag(e){
        //     document.getElementsByClassName('add-to-bag')[id].style.background = '#CB2031';
        //     document.getElementsByClassName('add-to-bag')[id].style.color = '#FFFFFF';
        //  }
        const [active, setActive] = useState(false)
        const [empty, setEmpty] = useState(true)
    const cardss_map = cardss.map(card => <div className="section4-card" key={card.id} id='section4-card'>
                                                <div className="section4-card-image-container" >
                                                    <img alt='img' src={card.image} className='section4-card-image'/>
                                                    <img alt='img' src={card.empty} className='section4-card-empty-heart' onClick={()=>{document.getElementsByClassName('section4-card-full-heart')[card.id-1].style.display = 'block'; setEmpty(previousState=>!previousState) }}/>
                                                    <img alt='img' src={card.full} className='section4-card-full-heart' onClick={()=>{document.getElementsByClassName('section4-card-full-heart')[card.id-1].style.display = 'none'; setEmpty(previousState=>!previousState)}}/>
                                                    <div className="add-to-bag" id='add-to-bag' onClick={(e)=>{setActive((previous)=>!previous);document.getElementsByClassName('add-to-bag')[card.id-1].style.background = (active?'#333333':'#CB2031');}}>Add to bag</div>
                                                </div>
                                                <div className="section4-card-info">
                                                <div className="section4-card-title">
                                                    {card.title}
                                                </div>
                                                <div className="section4-card-description">
                                                    {card.description}
                                                </div>
                                                <div className="section4-card-price">
                                                    {card.price} <span className='section4-card-span'>Inc GST</span>
                                                </div>
                                                </div>
                                            </div> )

    

    const [index, setIndex] = useState(0)
    useEffect(()=>{
        const slider = document.querySelectorAll('.section4-card')
        for (var i=0;i<slider.length;i++){
            slider[i].style.transform = `translateX(-${300 * index}px)`
        }        
        // slider.style.transform = `translateX(-${300 * index}px)`
    },[index])  
    function right_button(){
        if(index >= 4){
            setIndex(0)
        }else{
            setIndex(prevState => prevState + 1)
        }
    }
    function left_button(){
        if(index <= 0 ){
            setIndex(0)
        }else{
            setIndex(prevState => prevState - 1)
        }
    }
   
 


  return (
    <div className="section4" id='section4'>
        <div className="section4-container">
            <p className="section4-title">OUR BESTSELLERS</p>

            <div className="section4-cards-and-icons">

                    <div className='left-container-button' onClick={left_button}>
                        <img alt='img' src={section4_icon_container} className='section4-left-container'/>
                        <img alt='img' src={left_arrow} className='section4-left-arrow'/>
                    </div>



                <div className="section4-cards" id='section4-cards'>
                    {cardss_map}
                </div>    


                
                    
                    <div className='right-container-button' onClick={right_button}>
                        <img alt='img' src={section4_icon_container} className='section4-right-container'/>
                        <img alt='img' src={right_arrow} className='section4-right-arrow'/>
                    </div>

            </div>


            <a href='/'><button className='section4-button'>Go to Shop</button></a>
        </div>
    </div>
  )
}

export default Section4