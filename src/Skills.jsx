import React from 'react';
import { motion } from 'framer-motion';
import './assets/Skills.css';

const skillsData = [
  { name: "HTML5 & CSS3", level: "95%" },
  { name: "JavaScript (ES6+)", level: "85%" },
  { name: "React.js", level: "30%" },
  { name: "Node.js", level: "75%" },
  { name: "Express.js", level: "78%" },
  { name: "MongoDB", level: "70%" },
  { name: "Git/GitHub", level: "85%" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="skills-title"
      >
        Technical <span>Skills</span>
      </motion.h2>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-box">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            
            <div className="progress-bar">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="progress-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;