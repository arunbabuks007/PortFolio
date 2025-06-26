import React, { useEffect, useRef } from 'react';
import './Hero.css';
import profile from '../../assets/profile.png';
import resume from '../../assets/resume.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
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
      />
      
      <h1><span>I'm Arun Babu Subramanian</span>, a Java Full Stack Developer</h1>
      <p>
        I build robust and responsive web applications using Java, Spring Boot, and modern frontend technologies like React.js. I'm passionate about clean code, performance, and continuous learning in full stack development.
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink href='#Connect' className='connect-link'>Connect With Me</AnchorLink>
        </div>
        <div className='hero-resume'>
          <a href={resume} download>My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
