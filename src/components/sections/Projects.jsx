import { motion } from 'framer-motion';
import SectionHeading from '../layout/SectionHeading';
import MagneticButton from '../layout/MagneticButton';

function Projects({ portfolio }) {
  const { featuredProject, otherProjects } = portfolio;

  return (
    <section id="projects" className="content-section">
      <SectionHeading
        eyebrow="PROJECTS"
        title="Projects"
        description="Selected work and hands-on builds."
      />

      <motion.article
        className="featured-project glass-panel"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="featured-copy">
          <span className="project-kicker">Latest Project</span>
          <h3>{featuredProject.title}</h3>
          <p>{featuredProject.description}</p>
          <div className="stack-row">
            {featuredProject.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="featured-metrics">
            {featuredProject.metrics.map((metric) => (
              <div key={metric}>
                <strong>{metric}</strong>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <MagneticButton href={featuredProject.github} className="primary-button" ariaLabel="Open GitHub">
              GitHub
            </MagneticButton>
            <MagneticButton href={featuredProject.demo} className="secondary-button" ariaLabel="Open live demo">
              Live Demo
            </MagneticButton>
          </div>
        </div>
        <div className="featured-preview">
          <div className="preview-screen">
            <img
              src={featuredProject.image}
              alt={`${featuredProject.title} preview`}
              className="project-preview-image"
            />
          </div>
        </div>
      </motion.article>

      <div className="other-projects">
        {otherProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="glass-panel project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, rotateX: 4, rotateY: index % 2 === 0 ? 4 : -4 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <span className="project-kicker">Other Project</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-row">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <a href={project.github} target="_blank" rel="noreferrer">
              View GitHub
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
