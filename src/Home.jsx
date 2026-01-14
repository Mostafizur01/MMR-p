import React from 'react'
import './assets/Home.css'
import Typewriter from 'typewriter-effect';
import myphoto from '../public/Gemini_Generated_Image_dyc36xdyc36xdyc3.png'

function Home() {
  return (
    <div id='home'>
      <div className="leftsite">
        <h4>Hello, I'm</h4>
        <h1 style={{ color: 'white' }}>
          <Typewriter
            options={{
              strings: [
                'Md Mostafizur Rahman',
                'Call me MMR',
                'and I am a Full-Stack Developer',
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          /></h1>
        <p>Specializing in MERN Stack (MongoDB, Express, React, Node.js). Passionate about building scalable web applications and digital solutions.</p>
        <div className="btn-group">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>
      <div className="rightsite">
        <img src={myphoto} alt="not found" />
        <h1>
          MD MOSTAFIZUR RAHMAN <br />
            (MMR)
        </h1>
      </div>
    </div>
  )
}

export default Home
