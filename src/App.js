import { useEffect, useState } from 'react';
import './App.css';
import Footer from './footer/footer.jsx';
import Header from './Header/Header.jsx';
import Nav from './Nav-bar/nav.jsx';
import Section1 from './section1/section1.jsx';
import Section2 from './section2/section2.jsx';
import Section3 from './section3/section3.jsx';
import Section4 from './section4/section4.jsx';
import Section5 from './section5/section5.jsx';
import Section6 from './section6/section6.jsx';

function App() {

var updateArray = (data)=>{setAddedArray(data)}
const [addedArray, setAddedArray] = useState([],()=>addedArray.push(3))
  return (
    <div className="App">
      <div className='main-container' id='main-container'>
        <Header addedArray = {addedArray} setAddedArray={setAddedArray}/>
        <Nav/>
        <Section1/>
        <Section2/>
        <Section3/>
          <Section4 updateArray={updateArray} addedArray={addedArray} setAddedArray={setAddedArray}/>
          <Section5/>
          <Section6/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
