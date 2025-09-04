import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const Gallery = () => {
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

  const images = [
    {
      src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1600&auto=format&fit=crop",
      alt: "Fighter jet banking in the sky"
    },
    {
      src: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1200&auto=format&fit=crop",
      alt: "Close up of aircraft silhouette at dusk"
    },
    {
      src: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=800&auto=format&fit=crop",
      alt: "Jet detail"
    }
  ];

  return (
    <motion.section 
      id="gallery"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <motion.div className="chip" variants={itemVariants}>
              Gallery
            </motion.div>
            <motion.h2 variants={itemVariants}>
              Operational Presence
            </motion.h2>
          </div>
          <motion.p variants={itemVariants}>
            A visual sweep — swap these placeholders with your own high‑res media for production.
          </motion.p>
        </div>

        <div className="grid gallery-grid">
          {images.map((image, index) => (
            <motion.img
              key={index}
              className="gallery-image"
              src={image.src}
              alt={image.alt}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.4 }
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
