import { useState } from 'react';
import { motion } from 'framer-motion';

function MagneticButton({ href, children, className = '', download = false, onClick, ariaLabel }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - (bounds.left + bounds.width / 2);
    const y = event.clientY - (bounds.top + bounds.height / 2);
    setOffset({ x: x * 0.12, y: y * 0.12 });
  };

  const reset = () => setOffset({ x: 0, y: 0 });

  const content = (
    <motion.span
      className={`magnetic-button ${className}`}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', stiffness: 220, damping: 16 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a
        className="magnetic-link"
        href={href}
        download={download}
        target={download ? undefined : '_blank'}
        rel={download ? undefined : 'noreferrer'}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="magnetic-link button-reset"
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

export default MagneticButton;
