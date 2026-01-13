import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './assets/nav.css';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <h1 className="logo">MMR</h1>
            
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'}
            </div>

            <ul className={isOpen ? "nav-links active" : "nav-links"}>
                <li><Link to='home' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Home</Link></li>
                <li><Link to='about' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>About</Link></li>
                <li><Link to='skills' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Skills</Link></li>
                <li><Link to='projects' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Projects</Link></li>
                <li><Link to='experience' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Experience</Link></li>
                <li><Link to='contact' spy={true} smooth={true} offset={-70} duration={500} onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;