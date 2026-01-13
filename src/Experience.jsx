import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import './assets/Experience.css';

const Experience = () => {
  const sectionRef = useRef(null);

  // সেকশনের শুরু থেকে শেষ পর্যন্ত স্ক্রলিং ট্র্যাক করা হচ্ছে
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const dotY = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  const educationData = [
    {
      degree: "Diploma in Engineering",
      department: "Computer Technology",
      institute: "Magura Polytechnic Institute",
      status: "COMPLETED",
      duration: "2021 - 2025",
      description: "Focused on Software Development, Networking, and Database Management. Built several web projects as part of the curriculum."
    },
    {
      degree: "Secondary School Certificate (SSC)",
      department: "Science",
      institute: "Government Naldanga Bhushan Pilot Secondary School",
      status: "COMPLETED",
      duration: "2016 - 2021",
      description: "Successfully completed secondary education with a focus on science subjects like Physics, Chemistry, and Higher Math."
    },
    {
      degree: "Primary Education Completion (PEC)",
      department: "General Studies",
      institute: "Helai Government Primary School",
      status: "COMPLETED",
      duration: "2010 - 2015",
      description: "Successfully completed primary foundation with a focus on core subjects."
    }
  ];

  return (
    <section id='experience' className="experience-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          <motion.div 
            className="moving-dot"
            style={{ top: dotY }}
          ></motion.div>

          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="experience-card">
                <span className="status-badge">{edu.status}</span>
                <h3 className="degree-title">{edu.degree}</h3>
                <h4 className="dept-text">{edu.department}</h4>
                <p className="institute-name">{edu.institute}</p>
                <p className="duration">{edu.duration}</p>
                <div className="card-footer">
                  <p>{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;