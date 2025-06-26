import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
function App() {

  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Services/>
        <MyWork/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App
