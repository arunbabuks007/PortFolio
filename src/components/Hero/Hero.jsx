import React from 'react'
import './Hero.css'
import logo from '../../assets/7.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={logo} alt="" height={40}/>
        <h1><span>I'm Arun Babu Subramanian</span>, a Front-End Developer</h1>
        <p>I'm a passionate Front-End Developer who loves to build websites and web applications. I have experience in building responsive websites, mobile apps, and web applications using HTML, CSS, and JavaScript. I am also skilled in using React.js and Node.js for building web applications.</p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect With Me</div>
            <div className='hero-resume'>My Resume</div>
        </div>
    </div>
        
  )
}

export default Hero