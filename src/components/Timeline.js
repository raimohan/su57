import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Timeline.css';

const Timeline = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 0.61, 0.36, 1]
      }
    }
  };

  const timelineData = [
    {
      title: "Concept Initiation",
      description: "Early 2000s — Requirements set for a fifth‑generation, multi‑role fighter."
    },
    {
      title: "First Flight",
      description: "2010 — Prototype takes to the skies, validating core aerodynamics and systems."
    },
    {
      title: "Initial Deliveries",
      description: "Late 2010s — Limited induction, continued testing and refinement."
    }
  ];

  return (
    <motion.section 
      id="timeline"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <motion.div className="chip" variants={itemVariants}>
              Timeline
            </motion.div>
            <motion.h2 variants={itemVariants}>
              From Prototype to Service
            </motion.h2>
          </div>
          <motion.p variants={itemVariants}>
            Key milestones summarised for layout — replace with authoritative dates as needed.
          </motion.p>
        </div>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              className="tl-item"
              variants={itemVariants}
            >
              <span className="dot" aria-hidden="true"></span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Timeline;
