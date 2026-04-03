import { motion } from 'framer-motion';

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="section-heading"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
