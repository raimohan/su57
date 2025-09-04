import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container nav-inner">
        <motion.div 
          className="brand"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="brand-badge" aria-hidden="true"></span>
          <h1>SU‑57</h1>
        </motion.div>
        
        <div className="nav-links">
          <a href="#overview" onClick={(e) => { e.preventDefault(); scrollToSection('overview'); }}>
            Overview
          </a>
          <a href="#specs" onClick={(e) => { e.preventDefault(); scrollToSection('specs'); }}>
            Specs
          </a>
          <a href="#avionics" onClick={(e) => { e.preventDefault(); scrollToSection('avionics'); }}>
            Avionics
          </a>
          <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>
            Gallery
          </a>
          <a href="#timeline" onClick={(e) => { e.preventDefault(); scrollToSection('timeline'); }}>
            Timeline
          </a>
          <motion.a 
            className="btn primary cta" 
            href="#faq" 
            onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
