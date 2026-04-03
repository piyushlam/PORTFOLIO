import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (event) => setPosition({ x: event.clientX, y: event.clientY });
    const enter = () => setActive(true);
    const leave = () => setActive(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseenter', enter);
    window.addEventListener('mouseleave', leave);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseenter', enter);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <motion.div
      className={`custom-cursor ${active ? 'visible' : ''}`}
      animate={{ x: position.x - 14, y: position.y - 14 }}
      transition={{ type: 'spring', damping: 35, stiffness: 500, mass: 0.2 }}
    >
      <div className="custom-cursor__arrow" />
      <div className="custom-cursor__pulse" />
    </motion.div>
  );
}

export default CustomCursor;
