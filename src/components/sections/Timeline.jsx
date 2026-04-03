import { motion } from 'framer-motion';
import SectionHeading from '../layout/SectionHeading';

function Timeline({ portfolio }) {
  return (
    <section id="timeline" className="content-section">
      <SectionHeading
        eyebrow="EXPERIENCE & EDUCATION"
        title="Experience & Education"
        description="My learning and internship journey."
      />

      <div className="timeline-shell">
        {portfolio.timeline.map((item, index) => (
          <motion.article
            key={`${item.year}-${item.title}`}
            className="glass-panel timeline-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <span className="timeline-year">{item.year}</span>
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
