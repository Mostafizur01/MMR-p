import React from 'react'
import { motion } from 'framer-motion';
import './assets/About.css'

function About() {
  // অ্যানিমেশন ভেরিয়েন্ট (Variants)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // প্রতিটি লাইনের মধ্যে সময়ের ব্যবধান
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section id='about' className="about-section">
      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2 variants={itemVariants} className="about-title">
          About Me
        </motion.h2>

        <motion.p variants={itemVariants} className="about-text">
          Hi, I am a passionate <span>Full Stack Web Developer</span>.
        </motion.p>

        <motion.p variants={itemVariants} className="about-text">
          I recently completed my Diploma in Computer Technology from 
          <span> Magura Polytechnic Institute</span>.
        </motion.p>

        <motion.p variants={itemVariants} className="about-text">
          I love building clean, functional, and user-friendly web applications. 
          My goal is to transform complex ideas into simple, beautiful digital solutions.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About