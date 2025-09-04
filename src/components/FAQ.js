import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './FAQ.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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

  const faqData = [
    {
      question: "What makes the Su-57 a 5th generation fighter?",
      answer: "The Su-57 features stealth technology, supercruise capability, advanced avionics with sensor fusion, and networked warfare capabilities that define 5th generation aircraft."
    },
    {
      question: "How does the Su-57's stealth compare to other fighters?",
      answer: "The Su-57 uses planform alignment, internal weapon bays, and radar-absorbing materials to reduce its radar cross-section, though specific stealth metrics remain classified."
    },
    {
      question: "What weapons can the Su-57 carry?",
      answer: "Internal bays can house air-to-air missiles like R-77M and R-74M, while external hardpoints allow for additional missiles, bombs, and fuel tanks when stealth is not required."
    },
    {
      question: "What is the Su-57's operational range?",
      answer: "With internal fuel, the Su-57 has a combat radius of approximately 1,200 km, extendable with external fuel tanks or air-to-air refueling."
    }
  ];

  return (
    <motion.section 
      id="faq"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <motion.div className="chip" variants={itemVariants}>
              FAQ
            </motion.div>
            <motion.h2 variants={itemVariants}>
              Questions, Answered
            </motion.h2>
          </div>
          <motion.p variants={itemVariants}>
            Technical details and specifications about the Su-57 Felon fighter aircraft.
          </motion.p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openItems[index] ? 'open' : ''}`}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <motion.button
                className="faq-question"
                onClick={() => toggleItem(index)}
                whileTap={{ scale: 0.98 }}
              >
                {item.question}
                <motion.span
                  className="faq-icon"
                  animate={{ rotate: openItems[index] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </motion.button>
              
              <AnimatePresence>
                {openItems[index] && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQ;
