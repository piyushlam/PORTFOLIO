import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <span style={{ transform: `scaleY(${progress / 100})` }} />
    </div>
  );
}

export default ScrollProgress;
