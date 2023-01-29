import './App.css';
import Header from './Header/Header.jsx';
import Nav from './Nav-bar/nav.jsx';
import Section1 from './section1/section1.jsx'
import Section2 from './section2/section2.jsx'
import Section3 from './section3/section3.jsx'


function App() {
  return (
    <div className="App">
      <div className='first_section'>
        <Header/>
        <Nav/>
      </div>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  );
}

export default App;
