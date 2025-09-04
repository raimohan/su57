import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x: x * 20, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  return (
    <motion.header 
      className="hero container" 
      id="home"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="hero-inner">
        <div className="hero-content">
          <motion.div className="chip eyebrow" variants={itemVariants}>
            FIFTH‑GENERATION • STEALTH MULTI‑ROLE
          </motion.div>
          
          <motion.h2 className="title" variants={itemVariants}>
            Sukhoi <span className="grad">Su‑57</span> "Felon"
          </motion.h2>
          
          <motion.p className="subtitle" variants={itemVariants}>
            A showcase of agility, stealth, and avionics — presented in a modern, 
            high‑performance React application with buttery‑smooth motion and premium typography.
          </motion.p>
          
          <motion.div className="actions" variants={itemVariants}>
            <motion.a 
              className="btn primary" 
              href="#overview"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Explore the Aircraft
            </motion.a>
            <motion.a 
              className="btn ghost" 
              href="#gallery"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              View Gallery
            </motion.a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          variants={imageVariants}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.img
            id="heroImg"
            src="https://i.postimg.cc/mk3TWsWt/Picsart-25-09-03-06-15-43-420.png"
            alt="Sukhoi Su‑57 stealth fighter"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              scale: mousePosition.x !== 0 || mousePosition.y !== 0 ? 1.05 : 1
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              mass: 0.1
            }}
          />
          <div className="glow"></div>
        </motion.div>
      </div>

      {/* Floating background elements */}
      <motion.div
        className="bg-element bg-element-1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="bg-element bg-element-2"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </motion.header>
  );
};

export default Hero;
