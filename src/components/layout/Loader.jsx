import { motion } from 'framer-motion';

function Loader() {
  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeOut' } }}
    >
      <div className="loader-core">
        <motion.div
          className="loader-ring"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
        />
        <motion.div
          className="loader-ring secondary"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'linear' }}
        />
        <div className="loader-text">
          <span>SYSTEM BOOTING</span>
          <strong>Initializing Siddhesh.OS</strong>
          <motion.div
            className="loader-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
