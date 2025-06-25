import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.png'
import resume from '../../assets/resume.pdf'

const Hero = () => {
  return (
    <div className='hero' id="home">
        <img src={profile} alt="profile" className="hero-profile-pic " />
      <h1><span>I'm Arun Babu Subramanian</span>, a Java Full Stack Developer</h1>
<p>
  I build robust and responsive web applications using Java, Spring Boot, and modern frontend technologies like React.js. I'm passionate about clean code, performance, and continuous learning in full stack development.
</p>
  <div className='hero-action'>
            <div className='hero-connect'>Connect With Me</div>
            <div className='hero-resume'><a href={resume} download>My Resume</a></div>
        </div>
    </div>
  )
}

export default Hero
