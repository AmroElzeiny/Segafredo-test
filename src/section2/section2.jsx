import React from 'react'
import './section2.css'
import section2_pic1 from '../images/section2_pic1.svg'
import section2_pic2 from '../images/section2_pic2.svg'
import section2_pic3 from '../images/section2_pic3.svg'

const Section2 = () => {
  return (
    <div id='section2' className='section2'>
      <div className="section2-container">
        <p className="section2-text">
          OUR SOLUTIONS
        </p>
        <div className="section2-layouts">
          <div className="section2-pics">



            <div className="section2-pic1-container" onMouseEnter={function scaling(){
                const section2_pic1 = document.getElementById('section2-pic1').style;
                section2_pic1.transform = 'scale(1.15)';
                section2_pic1.transitionDuration = '0.5s'; 
                document.getElementById('section2-text1-container').style.opacity = '0';
                document.getElementById('section2-text1').style.color = '#CB2031';               
                document.getElementById('section2-text1').style.zIndex = '30';    
                document.getElementById('section2-text1').style.transitionDuration = '0.5s';
                document.getElementById('section2-text1-container').style.transitionDuration = '0.5s';           
              }}

              onMouseLeave={function un_scaling(){
                const section2_pic1 = document.getElementById('section2-pic1').style;
                section2_pic1.transform = 'scale(1)';
                section2_pic1.transitionDuration = '0.5s';
                document.getElementById('section2-text1-container').style.opacity = '1';
                document.getElementById('section2-text1').style.color = '#FFFFFF';
                document.getElementById('section2-text1').style.transitionDuration = '0.5s';
                document.getElementById('section2-text1-container').style.transitionDuration = '0.5s';
              }}
              
              >
                <div className="section2-pic1-blur"></div><img src={section2_pic1} alt='section2-pic1' className='section2-pic1' id='section2-pic1'/>
            </div>
           
           




            <div className="section2-pic2-container" 
              onMouseEnter={function scaling2(){
                const section2_pic2 = document.getElementById('section2-pic2').style;
                section2_pic2.transform = 'scale(1.15)';
                section2_pic2.transitionDuration = '0.5s'; 
                document.getElementById('section2-text2-container').style.opacity = '0';
                document.getElementById('section2-text2').style.color = '#CB2031';               
                document.getElementById('section2-text2').style.transitionDuration = '0.5s';
                document.getElementById('section2-text2-container').style.transitionDuration = '0.5s';           
              }}

              onMouseLeave={function un_scaling2(){
                const section2_pic2 = document.getElementById('section2-pic2').style;
                section2_pic2.transform = 'scale(1)';
                section2_pic2.transitionDuration = '0.5s';
                document.getElementById('section2-text2-container').style.opacity = '1';
                document.getElementById('section2-text2').style.color = '#333333';
                document.getElementById('section2-text2').style.transitionDuration = '0.5s';
                document.getElementById('section2-text2-container').style.transitionDuration = '0.5s';
              }}
              >
                <div className="section2-pic2-blur"></div><img src={section2_pic2} alt='section2-pic2' className='section2-pic2' id='section2-pic2'/>
            </div>
            




            <div className="section2-pic3-container" onMouseEnter={function scaling3(){
                const section2_pic3 = document.getElementById('section2-pic3').style;
                section2_pic3.transform = 'scale(1.15)';
                section2_pic3.transitionDuration = '0.5s'; 
                document.getElementById('section2-text3-container').style.opacity = '0';
                document.getElementById('section2-text3').style.color = '#CB2031';               
                document.getElementById('section2-text3').style.transitionDuration = '0.5s';
                document.getElementById('section2-text3-container').style.transitionDuration = '0.5s';           
              }}

              onMouseLeave={function un_scaling3(){
                const section2_pic3 = document.getElementById('section2-pic3').style;
                section2_pic3.transform = 'scale(1)';
                section2_pic3.transitionDuration = '0.5s';
                document.getElementById('section2-text3-container').style.opacity = '1';
                document.getElementById('section2-text3').style.color = ' #FFFFFF';
                document.getElementById('section2-text3').style.transitionDuration = '0.5s';
                document.getElementById('section2-text3-container').style.transitionDuration = '0.5s';
              }}
            ><div className="section2-pic3-blur"></div><img src={section2_pic3} alt='section2-pic3' className='section2-pic3' id='section2-pic3'/></div>
          
          
          </div>

          <div className="section2-texts">


            <div className='section2-text1-container-and-text'>
              <div className="section2-text1-container" id='section2-text1-container' onMouseEnter={function scaling(){
                const section2_pic1 = document.getElementById('section2-pic1').style;
                section2_pic1.transform = 'scale(1.15)';
                section2_pic1.transitionDuration = '0.5s'; 
                document.getElementById('section2-text1-container').style.opacity = '0';
                document.getElementById('section2-text1').style.color = '#CB2031';               
                document.getElementById('section2-text1').style.zIndex = '30';    
                document.getElementById('section2-text1').style.transitionDuration = '0.5s';
                document.getElementById('section2-text1-container').style.transitionDuration = '0.5s';           
              }}

              onMouseLeave={function un_scaling(){
                const section2_pic1 = document.getElementById('section2-pic1').style;
                section2_pic1.transform = 'scale(1)';
                section2_pic1.transitionDuration = '0.5s';
                document.getElementById('section2-text1-container').style.opacity = '1';
                document.getElementById('section2-text1').style.color = '#FFFFFF';
                document.getElementById('section2-text1').style.transitionDuration = '0.5s';
                document.getElementById('section2-text1-container').style.transitionDuration = '0.5s';
              }}
              ></div>



              <p className='section2-text1' id='section2-text1' onMouseEnter={function scaling(){
                const section2_pic1 = document.getElementById('section2-pic1').style;
                section2_pic1.transform = 'scale(1.15)';
                section2_pic1.transitionDuration = '0.5s'; 
                document.getElementById('section2-text1-container').style.opacity = '0';
                document.getElementById('section2-text1').style.color = '#CB2031';               
                document.getElementById('section2-text1').style.zIndex = '30';    
                document.getElementById('section2-text1').style.transitionDuration = '0.5s';
                document.getElementById('section2-text1-container').style.transitionDuration = '0.5s';           
              }}

              onMouseLeave={function un_scaling(){
                const section2_pic1 = document.getElementById('section2-pic1').style;
                section2_pic1.transform = 'scale(1)';
                section2_pic1.transitionDuration = '0.5s';
                document.getElementById('section2-text1-container').style.opacity = '1';
                document.getElementById('section2-text1').style.color = '#FFFFFF';
                document.getElementById('section2-text1').style.transitionDuration = '0.5s';
                document.getElementById('section2-text1-container').style.transitionDuration = '0.5s';
              }}
              >Cafe Owners</p>
            </div>









            <div className='section2-text2-container-and-text'>
                <div className="section2-text2-container" id='section2-text2-container'
              onMouseEnter={function scaling2(){
                const section2_pic2 = document.getElementById('section2-pic2').style;
                section2_pic2.transform = 'scale(1.15)';
                section2_pic2.transitionDuration = '0.5s'; 
                document.getElementById('section2-text2-container').style.opacity = '0';
                document.getElementById('section2-text2').style.color = '#CB2031';               
                document.getElementById('section2-text2').style.transitionDuration = '0.5s';
                document.getElementById('section2-text2-container').style.transitionDuration = '0.5s';           
              }}

              onMouseLeave={function un_scaling2(){
                const section2_pic2 = document.getElementById('section2-pic2').style;
                section2_pic2.transform = 'scale(1)';
                section2_pic2.transitionDuration = '0.5s';
                document.getElementById('section2-text2-container').style.opacity = '1';
                document.getElementById('section2-text2').style.color = '#333333';
                document.getElementById('section2-text2').style.transitionDuration = '0.5s';
                document.getElementById('section2-text2-container').style.transitionDuration = '0.5s';
              }}></div>
              <p className='section2-text2' id='section2-text2' onMouseEnter={function scaling2(){
                const section2_pic2 = document.getElementById('section2-pic2').style;
                section2_pic2.transform = 'scale(1.15)';
                section2_pic2.transitionDuration = '0.5s'; 
                document.getElementById('section2-text2-container').style.opacity = '0';
                document.getElementById('section2-text2').style.color = '#CB2031';               
                document.getElementById('section2-text2').style.transitionDuration = '0.5s';
                document.getElementById('section2-text2-container').style.transitionDuration = '0.5s';           
              }}

              onMouseLeave={function un_scaling2(){
                const section2_pic2 = document.getElementById('section2-pic2').style;
                section2_pic2.transform = 'scale(1)';
                section2_pic2.transitionDuration = '0.5s';
                document.getElementById('section2-text2-container').style.opacity = '1';
                document.getElementById('section2-text2').style.color = '#333333';
                document.getElementById('section2-text2').style.transitionDuration = '0.5s';
                document.getElementById('section2-text2-container').style.transitionDuration = '0.5s';
              }}>Office Coffee solutions</p>
            </div>








            
            <div className='section2-text3-container-and-text'>
              
                <div className="section2-text3-container" id='section2-text3-container' onMouseEnter={function scaling3(){
                const section2_pic3 = document.getElementById('section2-pic3').style;
                section2_pic3.transform = 'scale(1.15)';
                section2_pic3.transitionDuration = '0.5s'; 
                document.getElementById('section2-text3-container').style.opacity = '0';
                document.getElementById('section2-text3').style.color = '#CB2031';               
                document.getElementById('section2-text3').style.transitionDuration = '0.5s';
                document.getElementById('section2-text3-container').style.transitionDuration = '0.5s';           
              }}

              onMouseLeave={function un_scaling3(){
                const section2_pic3 = document.getElementById('section2-pic3').style;
                section2_pic3.transform = 'scale(1)';
                section2_pic3.transitionDuration = '0.5s';
                document.getElementById('section2-text3-container').style.opacity = '1';
                document.getElementById('section2-text3').style.color = ' #FFFFFF';
                document.getElementById('section2-text3').style.transitionDuration = '0.5s';
                document.getElementById('section2-text3-container').style.transitionDuration = '0.5s';
              }}></div>


              
              <p className='section2-text3' id='section2-text3' onMouseEnter={function scaling3(){
                const section2_pic3 = document.getElementById('section2-pic3').style;
                section2_pic3.transform = 'scale(1.15)';
                section2_pic3.transitionDuration = '0.5s'; 
                document.getElementById('section2-text3-container').style.opacity = '0';
                document.getElementById('section2-text3').style.color = '#CB2031';               
                document.getElementById('section2-text3').style.transitionDuration = '0.5s';
                document.getElementById('section2-text3-container').style.transitionDuration = '0.5s';           
              }}

              onMouseLeave={function un_scaling3(){
                const section2_pic3 = document.getElementById('section2-pic3').style;
                section2_pic3.transform = 'scale(1)';
                section2_pic3.transitionDuration = '0.5s';
                document.getElementById('section2-text3-container').style.opacity = '1';
                document.getElementById('section2-text3').style.color = ' #FFFFFF';
                document.getElementById('section2-text3').style.transitionDuration = '0.5s';
                document.getElementById('section2-text3-container').style.transitionDuration = '0.5s';
              }}>Coffee at Home</p>
            </div>


          </div>
        </div>

      </div>
    </div>
  )
}

export default Section2