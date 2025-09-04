import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Specs.css';

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      let startTime;
      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(end * easeOutCubic);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {end >= 1000 ? count.toLocaleString() : count.toFixed(1)}{suffix}
    </span>
  );
};

const Specs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const specs = [
    { value: 2.0, label: "Max Mach", description: "Top speed at altitude (approx.)" },
    { value: 3500, label: "Range (km)", description: "Ferry range with reserves" },
    { value: 20000, label: "Ceiling (m)", description: "Operational service ceiling" },
    { value: 10000, label: "Payload (kg)", description: "Internal + external stores", suffix: "+" }
  ];

  const stats = [
    { value: "5th‑Gen", label: "Stealth & Sensor Fusion" },
    { value: "360°", label: "Spherical IRST Coverage" },
    { value: "6", label: "Internal Hardpoints" }
  ];

  return (
    <motion.section 
      id="specs"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <motion.div className="chip" variants={itemVariants}>
              Key Specifications
            </motion.div>
            <motion.h2 variants={itemVariants}>
              Performance at a Glance
            </motion.h2>
          </div>
          <motion.p variants={itemVariants}>
            Indicative metrics for demonstration purposes. Replace with official figures where required.
          </motion.p>
        </div>

        <div className="grid specs-grid">
          {specs.map((spec, index) => (
            <motion.div 
              key={index}
              className="spec-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="metric">
                <AnimatedCounter 
                  end={spec.value} 
                  suffix={spec.suffix || ""} 
                />
              </div>
              <h3>{spec.label}</h3>
              <p>{spec.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid stats-grid" style={{ marginTop: '1.25rem' }}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <div className="num">{stat.value}</div>
              <div className="lbl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Specs;
