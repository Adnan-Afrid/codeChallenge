import './App.css';
import {BrowserRouter as Router,
  } from 'react-router-dom';
  import Navbar from './Components/Navbar/ui/Navbar';
import Hero from './Components/Hero/ui/ui';
import Footer from './Components/Footer/ui/Footer';
import Card from './Components/Cards/ui/Cards';

function App() {
  return (
   <Router>
    <Navbar/>
    <Hero/>
    <Card/>
    <Footer/>
   </Router>
  );
}

export default App;
