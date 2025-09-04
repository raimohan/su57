import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="container foot">
        <div>© {currentYear} SU‑57 Showcase • Crafted with React & Framer Motion.</div>
        <div>Design by <span title="AI assistant">Radha</span> ✨</div>
      </div>
    </motion.footer>
  );
};

export default Footer;
