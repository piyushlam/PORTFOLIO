import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import portfolio from './data/portfolioData';
import Loader from './components/layout/Loader';
import CustomCursor from './components/layout/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';
import Navbar from './components/layout/Navbar';
import SpaceScene from './components/three/SpaceScene';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Timeline from './components/sections/Timeline';
import Contact from './components/sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [loading]);

  const navItems = useMemo(
    () => [
      { id: 'hero', label: 'Home' },
      { id: 'about', label: 'About' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'timeline', label: 'Journey' },
      { id: 'contact', label: 'Contact' },
    ],
    [],
  );

  return (
    <>
      <AnimatePresence>{loading ? <Loader key="loader" /> : null}</AnimatePresence>
      <CustomCursor />
      <ScrollProgress />
      <div className="app-shell">
        <SpaceScene />
        <div className="ambient-grid" />
        <div className="ambient-noise" />
        <Navbar items={navItems} activeSection={activeSection} />
        <motion.main
          className="app-main"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: loading ? 0 : 1, y: loading ? 24 : 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Hero portfolio={portfolio} />
          <About portfolio={portfolio} />
          <Skills portfolio={portfolio} />
          <Projects portfolio={portfolio} />
          <Timeline portfolio={portfolio} />
          <Contact portfolio={portfolio} />
        </motion.main>
      </div>
    </>
  );
}

export default App;
