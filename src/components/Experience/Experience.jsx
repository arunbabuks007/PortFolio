import React from 'react';
import './Experience.css';

const Experience = () => {
  const projects = [
   {
  title: 'ChatBOT',
  technologies: 'Java, Spring Boot, React (Vite), PostgreSQL, MySQL, Gemini API',
  description: [
    'Enterprise chatbot platform developed at Meganar Technologies:',
    '• One-to-One & One-to-Many real-time chat system',
    '• Virtual Bot for 24/7 automated support',
    '•AI Bot (Document-based)'
  ]
},
    {
  title: 'VerBI',
  technologies: 'Java, Spring Boot, React, PostgreSQL, Gemini API',
  description: [
    'English learning platform:',
    '• Grammar lessons explained in Tamil',
    '• AI-powered doubt clarification',
    '• Interactive speaking practice modules'
  ]
}
,
    {
  title: 'PicMyBus',
  technologies: 'PHP, MySQL',
  description: [
    'Bus route and timing information system:',
    '• Search by route or location',
    '• Clean and user-friendly interface'
  ]
}
,
   {
  title: 'Quest Tree',
  technologies: 'PHP, MySQL',
  description: [
    'Data management system for college IRP team:',
    '• Secure CRUD operations',
    '• Structured data handling'
  ]
}
,
{
  title: 'Chrome Extensions',
  technologies: 'JavaScript, Chrome Extension APIs',
  description: [
    'Published multiple Chrome extensions on the Chrome Web Store:',
    '• Designed and implemented real-world productivity features',
    '• Followed Chrome Web Store policies and release workflows',
    '• Gained experience with production deployment and user feedback'
  ]
}


  ];

  return (
    <div className="experience" id="Exp&Projects">
      <div className="experience-title m-5">
        <h1 className="text-white">Professional Experience & Projects</h1>

        <div className="title-underline"></div>
      </div>
      <div className="experience-section">
        <div className="experience-intro text-white">
  <p>
   I’m a <strong>Software Engineer</strong> building full-stack and real-time
applications using <strong>Java, Spring Boot, React</strong>, and currently
working with <strong>MERN, MQTT, WebSockets</strong>, and
<strong>DigitalOcean</strong>.

  </p>
  <p>
  I’ve published <strong>Google Chrome Extensions</strong> on the Chrome Web Store,
gaining hands-on experience with production releases, user feedback,
and browser extension APIs.

</p>

</div>

        <div className="experience-chatbots">
          {projects.map((project, index) => (
            <div key={index} className="chatbot-card">
              <div className="chatbot-details p-2 text-center">
                <h3 className="bot-title">{project.title}</h3>
                <p className="text-white"><strong>Technologies:</strong> {project.technologies}</p>
                {project.description.map((line, idx) => (
                  <p key={idx} dangerouslySetInnerHTML={{ __html: line }} className="text-white" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;