"use client";

import { Box } from '@mui/material';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);
    
    // Disable scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Remove any hash from the URL
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        scrollBehavior: 'smooth',
        overflowX: 'hidden', // Prevent horizontal scroll
      }}
    >
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
} 