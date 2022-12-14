import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import './css/bootstrap.min.css'
import './css/mystylesheet.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact';
import Team from './Components/Team';
import Products from './Components/Products';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
