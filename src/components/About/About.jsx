import React, { useEffect, useRef } from 'react';
import './About.css';
import profile_img from '../../assets/AboutImg.png';

const About = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // 🖼 Draw image to canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.src = profile_img;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    // 🔒 Blur overlay
    const showBlurOverlay = () => {
      const blurOverlay = document.createElement('div');
      blurOverlay.style.position = 'fixed';
      blurOverlay.style.top = 0;
      blurOverlay.style.left = 0;
      blurOverlay.style.width = '100vw';
      blurOverlay.style.height = '100vh';
      blurOverlay.style.backdropFilter = 'blur(25px)';
      blurOverlay.style.zIndex = 9999;
      blurOverlay.style.pointerEvents = 'none';
      document.body.appendChild(blurOverlay);
      setTimeout(() => {
        document.body.removeChild(blurOverlay);
      }, 2000);
    };

    // ⌨ Key handlers
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      if (e.key === 'F12') e.preventDefault();
      if (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j')) e.preventDefault();
      if (e.ctrlKey && key === 'u') e.preventDefault();
      if (e.ctrlKey && key === 's') {
        e.preventDefault();
        alert('Save is disabled.');
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        showBlurOverlay();
      }
      if (e.metaKey || (e.metaKey && e.shiftKey && e.key.toLowerCase() === 's')||(e.key ===e.ctrlKey&&e.key.toLowerCase()==="n")) {
        showBlurOverlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className='about' id='about'>
      <div className='about-title m-5'>
        <h1>About Me</h1>
      </div>

      <div className='about-section d-flex'>
        <div className='about-left'>
          <canvas
            ref={canvasRef}
            style={{
              width: '270px',
              pointerEvents: 'none',
            }}
          />
        </div>

        <div className='about-right mx-4'>
          <div className='about-para'>
            <p>
              I am a passionate Java Full Stack Developer with experience in building responsive websites and web applications. I work with modern front-end technologies like HTML, CSS, JavaScript, and React.js, while leveraging Java, Spring Boot, and Node.js for powerful and scalable back-end development.
            </p>
            <p>
              My passion lies in crafting high-quality, user-centric digital experiences. I enjoy solving complex problems, continuously improving my skill set, and building full-stack solutions that make an impact. I'm also experienced in integrating APIs, handling databases, and deploying web applications efficiently.
            </p>
          </div>
        </div>
      </div>

      <div className='about-skills col-8'>
        <div className='col-6 col-sm-6'>
          <div className='about-skill'><p>HTML & CSS <hr style={{ width: "80%" }} /></p></div>
          <div className='about-skill'><p>REACT JS <hr style={{ width: "50%" }} /></p></div>
          <div className='about-skill'><p>JAVASCRIPT <hr style={{ width: "60%" }} /></p></div>
          <div className='about-skill'><p>JAVA <hr style={{ width: "90%" }} /></p></div><br /><br />
        </div>
        <div className='col-6 col-sm-6'>
          <div className='about-skill'><p>SPRINGBOOT <hr style={{ width: "80%" }} /></p></div>
          <div className='about-skill'><p>POSTGRESQL <hr style={{ width: "90%" }} /></p></div>
          <div className='about-skill'><p>PHP <hr style={{ width: "90%" }} /></p></div>
          <div className='about-skill'><p>MYSQL <hr style={{ width: "90%" }} /></p></div>
        </div>
      </div>

      <div className='about-achievements'>
        <div className='about-achievement'>
          <h3>6-Month Intern</h3>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>2+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;


  
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
