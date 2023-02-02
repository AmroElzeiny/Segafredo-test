import React, { useEffect, useState } from 'react'
import './section5.css'
import stars from '../images/stars.svg'
import google_icon from '../images/google_icon.svg'
import quote from '../images/quote.svg'
import circle from '../images/circle.svg'
import dot from '../images/dot.svg'
import left_arrow from '../images/left-arrow.svg'
import right_arrow from '../images/right-arrow.svg'
import full_dot from '../images/full-dot.svg'
import { useRef } from 'react'
const Section5 = () => {
    const [reviews, setReviews] = useState([
        {id: 1, name:'Mark Denekamp', months_number:'3 months ago', comment:'Resupply of the most delicious house blend beans to give us the best espresso coffee!  No more having to wait in line at carts with the risk of not being able to get the right shot due to sudden lockdowns!  Delivered rapidly in perfect order.  Thank you Segafredo Zanetti NZ!'},
        {id: 2, name:'Lilian Kyle', months_number:'Month ago', comment:' ordered my coffee beans online, the website was easy to use, and the confirmation of the order came very quickly. The delivery was amazing, I received my order the very next day. I was very pleased.'},
        {id: 3, name:'Tim Cox', months_number:'10 months ago', comment:"I've used Segafredo Zanetti a couple of times now, for parts for an old coffee machine, and then for a new coffee machine (Gaggia Besana) when the old one finally gave up the ghost. their service is always friendly and reasonably priced (old coffee machine parts are never a bargain)..."},
        {id: 4, name:'Mark Denekamp', months_number:'3 months ago', comment:'Resupply of the most delicious house blend beans to give us the best espresso coffee!  No more having to wait in line at carts with the risk of not being able to get the right shot due to sudden lockdowns!  Delivered rapidly in perfect order.  Thank you Segafredo Zanetti NZ!'},
        {id: 5, name:'Lilian Kyle', months_number:'Month ago', comment:' ordered my coffee beans online, the website was easy to use, and the confirmation of the order came very quickly. The delivery was amazing, I received my order the very next day. I was very pleased.'},
        {id: 6, name:'Mark Denekamp', months_number:'3 months ago', comment:'Resupply of the most delicious house blend beans to give us the best espresso coffee!  No more having to wait in line at carts with the risk of not being able to get the right shot due to sudden lockdowns!  Delivered rapidly in perfect order.  Thank you Segafredo Zanetti NZ!'},
        {id: 7, name:'Lilian Kyle', months_number:'Month ago', comment:' ordered my coffee beans online, the website was easy to use, and the confirmation of the order came very quickly. The delivery was amazing, I received my order the very next day. I was very pleased.'},
        
    
    ])
    const reviews_map = reviews.map((review) => {return(
        <div className="section5-card-container" key={review.id}>
        <div className="section5-card" >
            <div className="section5-card-name-and-stars">
            <div className="section5-card-name">
                {review.name}
            </div>
            <img className="section5-card-stars" src={stars} alt='img'/></div>

            <div className="section5-card-months-number">
                {review.months_number}
            </div>
            <div className="section5-card-comment">
                {review.comment}
            </div>

            <img className="section5-card-google-icon" src={google_icon} alt='img'/>

            <div className="section5-card-google-reviews">Google Reviews</div>
                        
            <img className="section5-card-quote" src={quote} alt='img'/>

        </div></div>
    )})
    
    const slider = document.querySelectorAll('.section5-card-container')
    let dots = document.getElementsByClassName('dot')
    

    const [toggle, setToggle] = useState(true)
    
   

    const [index, setIndex] = useState(0)
    
    useEffect(()=>{

        
        for (var i=0;i<slider.length;i++){
            slider[i].style.transform = `translateX(-${400 * index}px)`

        }
             
    },[index,slider,dots])  
    function right_button(){
        if(index >= 4){
            function change(){setIndex(0) 
            dots[0].style.background = '#333333';
            dots[4].style.background = '#D9D9D9'}
            change()
        
            
        }else{
            setIndex(prevState => prevState + 1)
            for(let i=0; i <= dots.length;i++){
                dots[index+1].style.background = '#333333';
                dots[i].style.background = '#D9D9D9'
                }

            
        }
    }
    function left_button(){
        if(index <= 0){
            function change(){setIndex(0) 
            dots[0].style.background = '#333333';}
            change()
        
            
        }else{
            setIndex(prevState => prevState - 1)
            for(let i=4; i <= dots.length;i--){
                dots[index-1].style.background = '#333333';
                dots[i].style.background = '#D9D9D9'
                }

            
        }
    }
   





    

    

  return (
    <div className='section5'>
        <div className="section5-container">


            <div className="section5-title">What Our Customers Are Saying</div>
            <div className="section5-cards">
                    {reviews_map}
            </div>


            <div className="section5-slider-container">

                <div className="left-button-container" onClick={()=>{left_button()}}>
                    <img alt='img' src={circle} className='left-button-circle'/>
                    <img alt='img' src={left_arrow} className='left-button-arrow'/>
                </div>


                <div className="dots-container">


                    <div className='dot' style={{background: '#333333'}} id='dot_1' onClick={()=>{setIndex(0);
                        for (var i=0;i<slider.length;i++){
                            slider[i].style.transform = `translateX(-${400 * 0}px)`
                        } 
                    }}></div>



                    <div className="dot" id='dot_1' onClick={()=>{setIndex(1);
                        for (var i=0;i<slider.length;i++){                           
                            slider[i].style.transform = `translateX(-${400 * 1}px)`
                        }   
                    }}></div>


                    <div className="dot" id='dot_1' onClick={()=>{setIndex(2);
                        for (var i=0;i<slider.length;i++){
                            slider[i].style.transform = `translateX(-${400 * 2}px)`
                        }   
                    }}></div>


                    <div className="dot" id='dot_1' onClick={()=>{setIndex(3);
                        for (var i=0;i<slider.length;i++){
                            slider[i].style.transform = `translateX(-${400 * 3}px)`
                        }   
                    }}></div>


                    <div className="dot" id='dot_1' onClick={()=>{setIndex(4);
                        for (var i=0;i<slider.length;i++){
                            slider[i].style.transform = `translateX(-${400 * 4}px)`
                        }   
                    }}></div>


                </div>


                <div className="right-button-container" onClick={()=>{right_button()}}>
                    <img alt='img' src={circle} className='right-button-circle'/>
                    <img alt='img' src={right_arrow} className='right-button-arrow'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section5