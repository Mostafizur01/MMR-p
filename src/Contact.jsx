import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import './assets/Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_spe700c', 
      'template_68l7qgs', 
      form.current, 
      '5nPsjPOTNvrfBp3HD'
    )
    .then((result) => {
        console.log(result.text);
        setStatus("Success! Your message has been sent.");
        e.target.reset();
        
        setTimeout(() => setStatus(""), 5000);
    }, (error) => {
        console.log(error.text);
        setStatus("Failed to send message. Please try again.");
    });
  };

  return (
    <section className="contact-section" id="contact" data-scroll-section>
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <FaEnvelope className="icon" />
              <p>mostafizurrahmanmd43@gmail.com</p>
            </div>
            
            <div className="social-links">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="social-icon linkedin">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/8801893583621" target="_blank" rel="noreferrer" className="social-icon whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            
            <button type="submit" className="submit-btn">
              Send Message <FaPaperPlane style={{marginLeft: '10px'}} />
            </button>
            
            {status && (
              <p className={`status-msg ${status.includes("Success") ? "success" : "error"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;