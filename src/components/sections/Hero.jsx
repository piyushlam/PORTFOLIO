import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../layout/MagneticButton';
import MatrixPanel from '../three/MatrixPanel';

const codeLines = [
  'const mission = "Build interfaces that feel alive";',
  'function renderExperience() { return premium && performant; }',
  'portfolio.skills.push("React", "Three.js", "Motion Design");',
  'while (learning) { innovate(); refine(); ship(); }',
];

function Hero({ portfolio }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState('');

  useEffect(() => {
    const role = portfolio.roles[roleIndex];
    let currentIndex = 0;

    const typingInterval = window.setInterval(() => {
      currentIndex += 1;
      setTypedRole(role.slice(0, currentIndex));
      if (currentIndex >= role.length) {
        window.clearInterval(typingInterval);
        window.setTimeout(() => {
          setTypedRole('');
          setRoleIndex((prev) => (prev + 1) % portfolio.roles.length);
        }, 1400);
      }
    }, 80);

    return () => window.clearInterval(typingInterval);
  }, [portfolio.roles, roleIndex]);

  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-code">
        {codeLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </div>

      <motion.div
        className="hero-profile glass-panel"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="profile-glow" />
        <motion.div
          className="profile-frame"
          animate={{ y: [0, -10, 0], rotate: [0, 1.5, -1.5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="profile-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="profile-ring secondary"
            animate={{ rotate: -360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="profile-photo"
            whileHover={{ scale: 1.04, rotateX: 8, rotateY: -8 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18 }}
          >
           <img src="/profile.png" alt="Siddhesh Lambade" />
          </motion.div>
        </motion.div>
        <div className="profile-meta">
          <span>Developer Node</span>
          <strong>{portfolio.location}</strong>
        </div>
      </motion.div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      >
        <div className="eyebrow-chip">AI SYSTEM INTERFACE / PORTFOLIO</div>
        <h1 className="hero-title">
          <small>Hi, I&apos;m</small>
          <span>{portfolio.name}</span>
        </h1>
        <p className="hero-role">
          {typedRole}
          <em />
        </p>
        <p className="hero-description">{portfolio.intro}</p>
        <div className="hero-actions">
          <MagneticButton href="/resume.pdf" download className="primary-button" ariaLabel="Download resume">
            Download Resume
          </MagneticButton>
          <MagneticButton onClick={scrollToProjects} className="secondary-button" ariaLabel="View projects">
            View Projects
          </MagneticButton>
        </div>
        <div className="hero-stats">
          <div className="glass-panel stat-card">
            <strong>03</strong>
            <span>Internships Completed</span>
          </div>
          <div className="glass-panel stat-card">
            <strong>04</strong>
            <span>Projects Delivered</span>
          </div>
          <div className="glass-panel stat-card">
            <strong>15+</strong>
            <span>Core Skills</span>
          </div>
        </div>

        <button type="button" className="scroll-indicator" onClick={scrollToProjects} aria-label="Scroll to projects">
          <span>Explore Projects</span>
          <div className="scroll-indicator__arrow">
            <i />
            <i />
          </div>
        </button>
      </motion.div>

      <motion.div
        className="hero-avatar glass-panel"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <span className="avatar-label">Matrix Signal Module</span>
        <MatrixPanel />
      </motion.div>
    </section>
  );
}

export default Hero;
