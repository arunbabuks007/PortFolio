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

  
//   import React, { useRef, useEffect } from 'react';
// import './About.css';

// const About = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');

//     fetch('/images/AboutImg.png') // 👈 Image moved to public/images/
//       .then((res) => res.blob())
//       .then((blob) => {
//         const img = new Image();
//         img.src = URL.createObjectURL(blob);
//         img.onload = () => {
//           canvas.width = img.width;
//           canvas.height = img.height;
//           ctx.drawImage(img, 0, 0);
//           URL.revokeObjectURL(img.src); // cleanup
//         };
//       });
//   }, []);

//   return (
//     <div className='about' id='about'>
//       <div className='about-title'>
//         <h1>About Me</h1>
//         {/* <img src={theme_pattern} alt="" height={40}/> */}
//       </div>

//       <div className='about-section d-flex'>
//         <div className='about-left'>
//           {/* 🔒 Secured Canvas Instead of <img> */}
//           <canvas
//             ref={canvasRef}
//             style={{
//               height: '300px',
//               width: '270px',
//               borderRadius: '10px',
//               pointerEvents: 'none',
//               userSelect: 'none',
//               display: 'block'
//             }}
//           />
//         </div>

//         <div className='about-right mx-4'>
//           <div className="about-para">
//             <p>
//               I am a passionate Java Full Stack Developer with experience in building responsive websites and web applications...
//             </p>
//             <p>
//               My passion lies in crafting high-quality, user-centric digital experiences...
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="about-skills col-12">
//         <div className='col-12 col-sm-6'>
//           <div className="about-skill"><p>HTML & CSS <hr style={{ width: "80%" }} /></p></div>
//           <div className="about-skill"><p>REACT JS <hr style={{ width: "50%" }} /></p></div>
//           <div className="about-skill"><p>JAVASCRIPT <hr style={{ width: "60%" }} /></p></div>
//           <div className="about-skill"><p>JAVA<hr style={{ width: "90%" }} /></p></div><br /><br />
//         </div>
//         <div className='col-12 col-sm-6'>
//           <div className="about-skill"><p>SPRINGBOOT<hr style={{ width: "80%" }} /></p></div>
//           <div className="about-skill"><p>POSTGRESQL<hr style={{ width: "90%" }} /></p></div>
//           <div className="about-skill"><p>PHP<hr style={{ width: "90%" }} /></p></div>
//           <div className="about-skill"><p>MYSQL<hr style={{ width: "90%" }} /></p></div>
//         </div>
//       </div>

//       <div className="about-achievements">
//         <div className="about-achievement">
//           <h1>Fresher</h1>
//           <p>YEARS OF EXPERIENCE</p>
//         </div>
//         <hr />
//         <div className="about-achievement">
//           <h1>6+</h1>
//           <p>PROJECTS COMPLETED</p>
//         </div>
//         <hr />
//         <div className="about-achievement">
//           <h1>2+</h1>
//           <p>HAPPY CLIENTS</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
