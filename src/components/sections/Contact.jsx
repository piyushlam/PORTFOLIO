import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../layout/SectionHeading';

function Contact({ portfolio }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || `Portfolio inquiry for ${portfolio.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name || 'Not provided'}\nEmail: ${form.email || 'Not provided'}\n\nMessage:\n${form.message || ''}`,
    );
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="content-section">
      <SectionHeading
        eyebrow="CONTACT"
        title="Contact"
        description="Send me a message."
      />

      <motion.div
        className="contact-card glass-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <span className="project-kicker">Reach Out</span>
          <h3>Let&apos;s build something meaningful.</h3>
          <p>
            I am open to internships, collaborations, and software development opportunities. Anyone can
            message me directly from this portfolio, and it will open an email draft to my mailbox.
          </p>
          <div className="contact-links contact-links--info">
            <a href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
            <a href={`tel:${portfolio.phone.replace(/\s+/g, '')}`}>{portfolio.phone}</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contact-submit">
            Send via Email
          </button>
        </form>

        <div className="contact-links">
          {portfolio.socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span>{link.short}</span>
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
