import React from 'react'
import '../section3/section3.css'
import card1_img from'../images/card1-img.svg'
import card2_img from'../images/card2-img.svg'
import card3_img from'../images/card3-img.svg'
import card4_img from'../images/card4-img.svg'
import card5_img from'../images/card5-img.svg'
import card6_img from'../images/card6-img.svg'
import section3_button_arrow from '../images/section3-button-arrow.svg'
import { useState } from 'react'

const Section3 = () => {
    var [load, setLoad] = useState(false)
    var [cards, setCards] = useState([
        {id:1, text: 'coffee', image: card1_img},
        {id:2, text: 'Coffee\nMachines', image: card2_img},
        {id:3, text: 'Cafe\nand\nrestau-\nrant', image: card3_img},
        {id:4, text: 'Office\nand\nVending', image: card4_img},
        {id:5, text: 'Coffee\nGrinders', image: card5_img},
        {id:6, text: 'Bialetti\nStovetops', image: card6_img},

        {id:7, text: 'coffee', image: card1_img},
        {id:8, text: 'Coffee\nMachines', image: card2_img},
        {id:9, text: 'Cafe\nand\nrestau-\nrant', image: card3_img},
        {id:10, text: 'Office\nand\nVending', image: card4_img},
        {id:11, text: 'Coffee\nGrinders', image: card5_img},
        {id:12, text: 'Bialetti\nStovetops', image: card6_img}
        
        
    ])


        
    function load_more(){
        return(cards.map(        
        function(card){setLoad(false); return(<div className="section3-card" key={card.id}>
            <p className='card-text'>
                {card.text}
            </p>
            <img src={card.image} alt='img' className='card-pic'/>
            </div>)})
        )
    }


  return (
    <div className="section3">
        <div className="section3-container">

            <div className="section3-texts-container">
            <p className='section3-title-p'>
                SEGAFREDO SHOP
            </p>

            <p className='section3-text-p'>
                Choose your favorite Segafredo products and order them conveniently online from<br/>our Shop: all the tastefulness of Segafredo Zanetti coffee will come directly to your<br/>home!
            </p>
            </div>


            <div className="section3-cards">
                {load? load_more().map(item => <div>{item}</div>): null}
                
            </div>

            <div className="button-container">
                <button className="section3-button" >
                    <p className='section3-button-text'>Show More</p>
                    <img src={section3_button_arrow} alt='img' className='section3-button-arrow' onClick={load = true}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Section3