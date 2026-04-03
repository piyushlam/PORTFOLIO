import { motion } from 'framer-motion';
import SectionHeading from '../layout/SectionHeading';

function Skills({ portfolio }) {
  return (
    <section id="skills" className="content-section">
      <SectionHeading
        eyebrow="SKILLS"
        title="Skills"
        description="Technologies and tools I work with."
      />

      <div className="skills-layout">
        <motion.div
          className="skill-galaxy glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="galaxy-core">
            <span>SL</span>
          </div>

          {portfolio.skillGroups.map((group, groupIndex) => (
            <div
              className="orbit-ring"
              key={group.title}
              style={{
                width: `${group.orbit}px`,
                height: `${group.orbit}px`,
                animationDuration: `${24 + groupIndex * 8}s`,
              }}
            >
              {group.skills.map((skill, skillIndex) => {
                const angle = (360 / group.skills.length) * skillIndex;
                return (
                  <div
                    className="skill-node"
                    key={skill}
                    style={{
                      transform: `rotate(${angle}deg) translateX(${group.orbit / 2}px) rotate(-${angle}deg)`,
                    }}
                  >
                    <span>{skill}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>

        <div className="skill-groups">
          {portfolio.skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              className="glass-panel skill-group-card"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
