import React, { useEffect, useRef } from 'react';
import './Hero.css';
import profile from '../../assets/profile.png';
import resume from '../../assets/resume.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animations happen only once
    });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.src = profile;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    };

    // 🔐 Block Dangerous Keys
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();

      if (e.key === 'F12') e.preventDefault(); // DevTools
      if (e.ctrlKey && e.shiftKey && (key === 'i' || key === 'j')) e.preventDefault(); // DevTools
      if (e.ctrlKey && key === 'u') e.preventDefault(); // View Source
      if (e.ctrlKey && key === 's') {
        e.preventDefault();
        alert("Save is disabled.");
      }
    };

    // 🛡 Blur overlay
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

    // Detect PrintScreen
    const handleKeyUp = (e) => {
      if (e.metaKey && e.shiftKey && e.key.toLowerCase() === 's') {
        showBlurOverlay();
      }
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        showBlurOverlay();
      }
      if (e.metaKey) {
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
    <div className='hero' id="home">
      <canvas
        ref={canvasRef}
        className="hero-profile-canvas"
        style={{
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
        data-aos="zoom-in"
        data-aos-delay="100"
      />
      
      <h1 data-aos="fade-up" data-aos-delay="200">
        <span>I'm Arun Babu Subramanian</span>, a Java Full Stack Developer
      </h1>
      <p data-aos="fade-up" data-aos-delay="300">
        I build robust and responsive web applications using Java, Spring Boot, and modern frontend technologies like React.js. I'm passionate about clean code, performance, and continuous learning in full stack development.
      </p>
      <div className='hero-action' data-aos="fade-up" data-aos-delay="400">
        <div className='hero-connect' data-aos="fade-right" data-aos-delay="500">
          <AnchorLink href='#Connect' className='connect-link'>Connect With Me</AnchorLink>
        </div>
        <div className='hero-resume' data-aos="fade-left" data-aos-delay="500">
          <a href={resume} download>My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;