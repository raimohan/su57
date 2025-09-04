import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Avionics = () => {
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

  const avionicsData = [
    {
      title: "Multifunction AESA",
      description: "Active electronically scanned arrays enable simultaneous air‑to‑air and air‑to‑surface modes, track‑while‑scan, and LPI/LPR strategies."
    },
    {
      title: "Distributed Sensors",
      description: "IRST, MAWS, and ESM nodes offer hemispheric coverage, feeding fused tracks to the pilot and to networked assets."
    },
    {
      title: "Electronic Warfare",
      description: "Digital RF memory jamming, towed decoys, and smart expendables increase survivability in dense IADS environments."
    }
  ];

  return (
    <motion.section 
      id="avionics"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <motion.div className="chip" variants={itemVariants}>
              Avionics & Stealth
            </motion.div>
            <motion.h2 variants={itemVariants}>
              Sensor Fusion. Low Observable. High Awareness.
            </motion.h2>
          </div>
          <motion.p variants={itemVariants}>
            A multi‑band sensor suite and modern EW stack unify data for the pilot, while carefully 
            managed signatures and internal bays maintain low observability across mission phases.
          </motion.p>
        </div>

        <div className="grid cards-grid">
          {avionicsData.map((item, index) => (
            <motion.div 
              key={index}
              className="card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Avionics;
