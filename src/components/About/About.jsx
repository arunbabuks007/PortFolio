import React from 'react'
import './About.css'
import theme_pattern from '../../assets/stripe.png'
import profile_img from '../../assets/7.jpg'
const About = () => {
  return (
    <div className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" height={40}/>
        </div>
        <div className='about-section'>
            <div className='about-left'>
                <img src={profile_img} alt="" height={40}/>
            </div>
            <div className='about-right'>
                <div class="about-para">
                    <p>
                    I am a passionate Front-End Developer who loves to build websites and web applications. I have experience in building responsive websites, mobile apps, and web applications using HTML, CSS, and JavaScript. I am also skilled in using React.js and Node.js for building web applications.
                    </p>
                    <p>
                        My Passion lies in building websites and web applications. I have experience in building responsive websites, mobile apps, and web applications using HTML, CSS, and JavaScript. I am also skilled in using React.js and Node.js for building web applications.
                    </p>
                </div>
                <div class="about-skills">
                    <div class="about-skill"><p>HTML & CSS <hr style={{width:"50%"}}/></p></div>
                    <div class="about-skill"><p>REACT JS <hr style={{width:"70%"}}/></p></div>
                    <div class="about-skill"><p>JAVASCRIPT <hr style={{width:"60%"}}/></p></div>
                    <div class="about-skill"><p>NEXT JS <hr style={{width:"50%"}}/></p></div>
                    
                </div>
            </div>
        </div>
        <div class="about-achievements">
            <div class="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div class="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div class="about-achievement">
                <h1>10+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )}
  export default About