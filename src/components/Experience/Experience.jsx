import React from 'react';
import './Experience.css';

const Experience = () => {
  const projects = [
    {
      title: 'ChatBOT',
      technologies: 'Java Full Stack (Vite ReactJS, Java, Spring Boot, PostgreSQL, MySQL, Gemini API)',
      description: [
        'Sophisticated web app built at Meganar Technologies with four key features:',
        '1. **One-to-One BOT**: Direct user-agent chats for personalized query resolution.',
        '2. **One-to-Many BOT**: Group discussions for collaborative query handling.',
        '3. **Virtual BOT**: 24/7 support using a knowledge base, similar to e-commerce bots.',
        '4. **AI BOT**: Personalized responses from uploaded documents.'
      ]
    },
    {
      title: 'VerBI',
      technologies: 'Java Full Stack (Vite ReactJS, Java, Spring Boot, PostgreSQL, Gemini API)',
      description: [
        'Web app for learning English through Tamil, developed independently during internship:',
        '1. **Grammar Lesson**: Tamil-explained English grammar tutorials.',
        '2. **SpeakBytes**: Bite-sized lessons for practical English speaking.',
        '3. **Gemini Service**: Real-time AI-powered doubt clarification.'
      ]
    },
    {
      title: 'PicMyBus',
      technologies: 'PHP Full Stack (PHP, MySQL)',
      description: [
        'User-friendly app for bus route and timing information:',
        '1. **Bus Route Details**: Displays origins and destinations.',
        '2. **Timing Information**: Shows departure and arrival times.',
        '3. **Search Functionality**: Search by location or route number.',
        '4. **User Interface**: Clean, intuitive UI for quick updates.'
      ]
    },
    {
      title: 'Quest Tree',
      technologies: 'PHP Full Stack (PHP, MySQL)',
      description: [
        'Web app for college IRP Team to manage data with CRUD operations:',
        '1. **Create**: Add new records via secure forms.',
        '2. **Read**: View records in a tabular format.',
        '3. **Update**: Edit records with real-time updates.',
        '4. **Delete**: Remove outdated records.'
      ]
    }
  ];

  return (
    <div className="experience" id="Exp&Projects">
      <div className="experience-title">
        <h1 className="text-white">Experience & Projects</h1>
        <div className="title-underline"></div>
      </div>
      <div className="experience-section">
        <div className="experience-intro text-white">
          <p>
            As a <strong>Java Full Stack Developer</strong> at <strong>Meganar Technologies</strong>, 
            I built a scalable chatbot app using <strong>Java Spring Boot</strong>, <strong>Vite ReactJS</strong>, 
            <strong>PostgreSQL</strong>, <strong>MySQL</strong>, and <strong>Gemini API</strong> to enhance brand engagement.
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