import { motion } from 'framer-motion';
import SectionHeading from '../layout/SectionHeading';

function About({ portfolio }) {
  return (
    <section id="about" className="content-section">
      <SectionHeading
        eyebrow="ABOUT"
        title="About"
        description="Software engineer, builder, and learner."
      />

      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <article className="glass-panel about-card">
          <h3>Profile Overview</h3>
          <p>{portfolio.about}</p>
        </article>
        <article className="glass-panel about-card">
          <h3>Internship Experience</h3>
          <p>{portfolio.internship}</p>
        </article>
        <article className="glass-panel about-card">
          <h3>What Drives Me</h3>
          <p>{portfolio.passion}</p>
        </article>
      </motion.div>
    </section>
  );
}

export default About;
