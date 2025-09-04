import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Specs from './components/Specs';
import Avionics from './components/Avionics';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Overview />
      <Specs />
      <Avionics />
      <Gallery />
      <Timeline />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
