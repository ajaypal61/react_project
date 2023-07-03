import React from 'react'
// bootstrap css link 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// bootstrap js link 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from "./Contact"
import NavBar from './NavBar';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
