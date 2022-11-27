import './App.css';
import {BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom';
  import Navbar from './Components/Navbar/ui/Navbar';
import Footer from './Components/Footer/ui/Footer';
import Home from './Pages/Home';
import Cart from './Components/Cart/ui/Cart';
import AddNew from './Components/AddNew/ui/AddNewItems';
import Payment from './Components/Payement/ui/Payment';

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/cart' component={Cart}/>
      <Route  path='/addnew' component={AddNew}/> 
      <Route path='/payment' component={Payment}/> 
    </Switch>
    <Footer/>
   </Router>
  );
}

export default App;
