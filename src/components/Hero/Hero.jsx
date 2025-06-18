import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div className='hero' id="home">
        <img src={profile} alt="profile" className="hero-profile-pic " />
        <h1><span>I'm Arun Babu Subramanian</span>, a Full Stack Developer</h1>
        <p>I'm a passionate Full Stack Developer who loves to build websites and web applications. I have experience in building responsive websites, mobile apps, and web applications using HTML, CSS, and JavaScript. I am also skilled in using React.js and Node.js for building web applications.</p>
        <div className='hero-action'>
            <div className='hero-connect'>Connect With Me</div>
            <div className='hero-resume'><a href={resume} download>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero
