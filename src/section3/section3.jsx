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
    const [visible, setVisible] = useState(6)
    const [cards, setCards] = useState([
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
        function(card){ return(<div className="section3-card" key={card.id}>
            <p className='card-text'>
                {card.text}
            </p>
            <img src={card.image} alt='img' className='card-pic'/>
            </div>)})
        )
    }
    function isVisible(){
        return(setVisible(prevState => prevState+6))
    }
    function isnotVisible(){
        return(setVisible(visible))
    }
    function show_less(){
        document.getElementById('button-container').style.display = 'none';
        document.getElementById('show-less-container').style.display = 'flex';
        document.getElementById('section4-and5-and6-container').style.top = '742px';

    }
    function show_more(){
        document.getElementById('button-container').style.display = 'flex';
        document.getElementById('show-less-container').style.display = 'none';
        setVisible(prevState => prevState-6)
        document.getElementById('section4-and5-and6-container').style.top = '301px';

        
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


            {/* <div className="section3-cards">
                {load? load_more().map(item => <div>{item}</div>): console.log('hello')}
                
            </div>

            <div className="button-container">
                <button className="section3-button"  onClick={isTrue} >
                    <p className='section3-button-text'>Show More</p>
                    <img src={section3_button_arrow} alt='img' className='section3-button-arrow'/>
                </button>
            </div> */}

            <div className="section3-cards-container">
                <div className="section3-cards">
                    {load_more().slice(0, visible).map(item => 
                    <div key={item.id} className='section3-map'>
                        <div className='section3-card'>
                            {item}
                        </div>
                        
                    </div>)}
            </div>


                <div className="button-container" id='button-container'>
                        <button className="section3-button"  onClick={function (){isVisible(); show_less()}} >
                            <p className='section3-button-text' id='section3-button-text'>Show More</p>
                            <img src={section3_button_arrow} alt='img' id='section3-button-arrow' className='section3-button-arrow'/>
                        </button>
                    </div>


                <div className="show-less-container" id='show-less-container'>
                        <button className="section3-button"  onClick={function (){isnotVisible(); show_more()}} >
                            <p className='section3-button-text' id='section3-button-text'>Show Less</p>
                            <img src={section3_button_arrow} alt='img' id='section3-button-arrow' className='section3-show-less-arrow'/>
                        </button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Section3