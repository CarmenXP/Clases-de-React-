import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Home from './Components/Home'
//import Navbar from './Components/Navbar';
//import Title from './Components/Title';
//import Button from './Components/Button';
//import Image from './Components/Image';
//import ProductsPage from './Components/products/ProductPage';
import Routes from './Routes';
import {Link, NavLink} from 'react-router-dom'



const App= () => {
  return (
    <div>
      <nav>
        <NavLink exact activeClassName="active" to="/">Home </NavLink>
        <NavLink activeClassName="active" to="/products">Catálogo</NavLink>
      </nav>
      <Routes/>
    
    
    
    
            
    
    
 </div>
  )
  }
export default App;
