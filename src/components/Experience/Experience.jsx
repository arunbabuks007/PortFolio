import React from 'react';
import './Experience.css';

const Experience = () => {
  const chatbots = [
    {
      title: 'ChatBOT',
      description: [
        'A sophisticated web application developed at Meganar Technologies, featuring four distinct functionalities:',
        '1. **One-to-One BOT**: Enables direct conversations between users and agents to efficiently resolve brand-related queries with a personalized touch.',
        '2. **One-to-Many BOT**: Facilitates group discussions, allowing multiple users to collaborate and address queries through interactive communication.',
        '3. **Virtual BOT (Knowledge-Based)**: Offers 24/7 support, similar to e-commerce bots (e.g., Flipkart), leveraging a comprehensive knowledge base for query resolution.',
        '4. **AI BOT (Personalized)**: Processes uploaded documents to provide tailored responses, acting as a personalized chatbot that extracts answers from user-provided files.',
      ],
    },
    {
      title: 'VerBI',
      description: [
        'An innovative web application independently developed during my internship period (not affiliated with Meganar Technologies), designed to help users learn English through Tamil. It features two core learning concepts and a real-time doubt clarification service:',
        '1. **Grammar Lesson**: Provides comprehensive grammar tutorials to help users master English grammar using Tamil explanations.',
        '2. **SpeakBytes**: Offers bite-sized mini-lessons focused on practical English speaking and vocabulary skills, tailored for Tamil-speaking learners.',
        '3. **Gemini Service**: Enables real-time doubt clarification through an integrated AI-powered feature, allowing users to get instant answers to their questions.',
      ],
    },
    {
  title: 'PicMyBus',
  description: [
    'A user-friendly web application developed using **PHP**, designed to display detailed information about buses, including their routes, origins, destinations, and timings. PicMyBus helps commuters quickly access real-time and static information about buses operating between locations.',
    'Key Features:',
    '1. **Bus Route Details**: Displays where each bus is coming from and where it is headed.',
    '2. **Timing Information**: Shows departure and arrival times for each bus on its route.',
    '3. **Search Functionality**: Allows users to search for buses by location or route number.',
    '4. **User Interface**: Clean and intuitive UI that provides a seamless experience for users looking for quick bus updates.',
    'This project was built to simplify public transport usage and provide essential bus information at a glance.'
  ]
},
{
  title: 'Basic CRUD Operation',
  description: [
    'A foundational web application developed using **PHP** for our college **IRP (Institutional Research Project) Team**, aimed at performing basic **CRUD (Create, Read, Update, Delete)** operations efficiently.',
    'This project was built to manage data records in a user-friendly interface, allowing the IRP team to handle entries such as project details, student information, or research logs with ease.',
    'Key Features:',
    '1. **Create**: Add new records to the database through a secure input form.',
    '2. **Read**: View and list all records in a structured tabular format.',
    '3. **Update**: Edit existing records with real-time updates.',
    '4. **Delete**: Remove unnecessary or outdated records from the system.',
    'The project emphasizes clean code structure, simple design, and core PHP functionalities to support learning and usability within the academic context.'
  ]
},


  ];

  return (
    <div className="experience" id="Exp&Projects">
      <div className="experience-title">
        <h1 className="text-white">My Experience</h1>
        <div className="title-underline"></div>
      </div>

      <div className="experience-section">
        <div className="experience-intro text-white">
          <p>
            As a <strong>Java Full Stack Developer</strong> at <strong>Meganar Technologies</strong>, I contributed to building a sophisticated chatbot web application using <strong>Java Spring Boot</strong>, <strong>ReactJS</strong>, <strong>PostgreSQL</strong>, and <strong>MySQL</strong>. My work focused on creating a scalable, user-centric solution to enhance brand engagement through a single application with the following features:
          </p>
        </div>
        <div className="experience-title">
          <h1 className="text-white">My Projects</h1>
          <div className="title-underline"></div>
        </div>
        <div className="experience-chatbots">
          {chatbots.map((bot, index) => (
            <div key={index} className="chatbot-card">
              <div className="chatbot-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#6B46C1' }} />
                      <stop offset="100%" style={{ stopColor: '#F687B3' }} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="chatbot-details p-2 text-center ">
                <h3 className="bot-title">{bot.title}</h3>
                {bot.description.map((line, idx) => (
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