import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact';
import Products from './Components/Products';
import SinglePage from './Components/SinglePage';
import Cart from './Components/Cart'
import Signin from './Components/Signin'
import Login from './Components/Login'
import Private_Component from './Components/PrivateComponent';
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar home="Home" about="About" products="Products" contact="Contact"/>
      <Routes>
        <Route path='/' element={<Private_Component/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/singlePage/:id" element={<SinglePage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Route>
      <Route path="/register" element={<Signin/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
