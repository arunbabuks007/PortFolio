import React from 'react'
import './About.css'
import theme_pattern from '../../assets/stripe.png'
import profile_img from '../../assets/AboutImg.png'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            {/* <img src={theme_pattern} alt="" height={40}/> */}
        </div>
        <div className='about-section d-flex '>
            <div className='about-left'>
                <img src={profile_img} alt="" height={300}width={270}/>
            </div>
            <div className='about-right mx-4'>
               <div class="about-para">
  <p>
    I am a passionate Java Full Stack Developer with experience in building responsive websites and web applications. I work with modern front-end technologies like HTML, CSS, JavaScript, and React.js, while leveraging Java, Spring Boot, and Node.js for powerful and scalable back-end development.
  </p>
  <p>
    My passion lies in crafting high-quality, user-centric digital experiences. I enjoy solving complex problems, continuously improving my skill set, and building full-stack solutions that make an impact. I'm also experienced in integrating APIs, handling databases, and deploying web applications efficiently.
  </p>
</div>

                
            </div>
        </div>
        <div class="about-skills col-12 ">
            <div className='col-12 col-sm-6'>
                    <div class="about-skill"><p>HTML & CSS <hr style={{width:"80%"}}/></p></div>
                    <div class="about-skill"><p>REACT JS <hr style={{width:"50%"}}/></p></div>
                    <div class="about-skill"><p>JAVASCRIPT <hr style={{width:"60%"}}/></p></div>
                    <div class="about-skill"><p>JAVA<hr style={{width:"90%"}}/></p></div><br/><br/>
            </div>
            <div className='col-12 col-sm-6'>
                    <div class="about-skill"><p>SPRINGBOOT<hr style={{width:"80%"}}/></p></div>
                    <div class="about-skill"><p>POSTGRESQL<hr style={{width:"90%"}}/></p></div>
                    <div class="about-skill"><p>PHP<hr style={{width:"90%"}}/></p></div>
                    <div class="about-skill"><p>MYSQL<hr style={{width:"90%"}}/></p></div>
                 </div>  
                </div>
        <div class="about-achievements">
            <div class="about-achievement">
                <h1>Fresher</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div class="about-achievement">
                <h1>6+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div class="about-achievement">
                <h1>2+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )}
  export default About