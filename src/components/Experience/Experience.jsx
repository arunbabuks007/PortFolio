import React from 'react';
import './Experience.css';
import { experience } from '../../data/profile';

const Experience = () => {
  const projects = [
    ...experience.map(job => ({
      title: `${job.company} — ${job.role}`,
      technologies: job.technologies.join(', '),
      description: [job.period, job.summary, ...job.contributions.map(point => `• ${point}`)],
    })),
    {
      title: 'Freely (Soul) & VerBI',
      technologies: 'React, React Native, Node.js, Express, MongoDB, Socket.IO, Gemini API; earlier Spring Boot and PostgreSQL',
      description: [
        'Independent English-learning products for web and mobile:',
        '• Grammar, vocabulary, speaking practice, AI conversations and synced learning progress',
        '• Ported the VerBI API from Spring Boot to Node.js and integrated it into Freely with separate accounts and data',
        '• Authentication, document Q&A, usage limits and deployment on Render and Netlify',
      ],
    },
    {
      title: 'EditHero (VidhAstra)',
      technologies: 'React, TypeScript, Spring Boot, ExtendScript, CEP / UXP, Razorpay, Gemini API',
      description: [
        'Adobe Premiere Pro extension suite with an AI backend (in active development):',
        '• AI transcription, captions, editing automation and an ExtendScript host bridge',
        '• Publishing workflows, plan quotas and Razorpay integration',
      ],
    },
    {
      title: 'Chrome Extensions',
      technologies: 'JavaScript, Chrome MV3 APIs, Canvas, IndexedDB, Node.js, Gemini API',
      description: [
        'Published browser products and their supporting websites:',
        '• YouScript: YouTube transcripts, chapters, exports and AI-backed summaries, Q&A and translations',
        '• SnapMaster: screenshot capture, canvas stitching, annotation, layers, blur and PDF export',
        '• YouNo: granular distraction controls, presets, scheduling and local preferences',
        '• PromptEdge: prompt creation and optimization for AI tools',
      ],
    },
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
working with <strong>Node.js, Redux Toolkit, PostgreSQL, Redis, MQTT and WebSockets</strong>, and
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