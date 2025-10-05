import React from 'react'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Navbar from './component/Navbar';

const App = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
