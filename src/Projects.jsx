import React from 'react';
import { motion } from 'framer-motion';
import './assets/Projects.css';

const FeaturedProject = () => {
  return (
    <section id='projects' className="featured-section">
      <h2 className="section-title">Featured Work</h2>

      <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="card-content">
          <span className="project-tag">Major Project</span>
          <h3 className="project-name">Magura Polytechnic Institute Website</h3>

          <p className="project-desc">
            A complete web solution for my institute, featuring student
            information management and a responsive UI.
            <strong> Improved digital accessibility for students and teachers.</strong>
          </p>

          <div className="tech-stack">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Express</span>
          </div>

          <div className="project-links">
            <a href="https://github.com/Mostafizur01/MAPI.C-Data-hub  " className="btn-primary">View Case Study</a>
            <a href="https://github.com/Mostafizur01/MAPI.C-Data-hub" className="btn-outline">
              Live Demo
              <svg
                style={{ marginLeft: '8px' }}
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="card-visual">
          <div className="mockup-container">
            <div className="glass-overlay"></div>
            <img src="./public\Screenshot 2026-01-13 231154.png" className='img0' alt="Institute Website Mockup" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProject;