import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Overview.css';

const Overview = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

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

  return (
    <motion.section 
      id="overview"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <motion.div className="chip" variants={itemVariants}>
              Overview
            </motion.div>
            <motion.h2 variants={itemVariants}>
              Air Superiority. Multi‑Role Mastery.
            </motion.h2>
          </div>
          <motion.p variants={itemVariants}>
            Designed for dominance in contested skies, the Su‑57 integrates stealth geometry, 
            powerful sensors, and advanced flight controls — balancing agility with range and 
            payload for missions that span interception, strike, and ISR.
          </motion.p>
        </div>

        <div className="grid overview-grid">
          <motion.article 
            className="glass"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <h3>Design Philosophy</h3>
            <p>
              The airframe blends planform alignment, internal weapon bays, and advanced 
              composites to reduce radar signature while sustaining high‑alpha maneuverability. 
              A wide lifting body and all‑moving tail surfaces enable super‑maneuvering without 
              compromising stability.
            </p>
          </motion.article>

          <motion.aside 
            className="glass"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <h3>Mission Highlights</h3>
            <ul>
              <li>Low‑observable strike and interdiction</li>
              <li>Network‑centric air dominance</li>
              <li>Long‑range sensor fusion & targeting</li>
              <li>High endurance with internal stores</li>
            </ul>
          </motion.aside>
        </div>
      </div>
    </motion.section>
  );
};

export default Overview;
