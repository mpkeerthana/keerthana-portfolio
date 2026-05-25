import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(height > 0 ? scrollTop / height : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-violet-400 via-cyan-300 to-slate-100 shadow-lg"
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress * 100}%` }}
        transition={{ ease: 'easeOut', duration: 0.2 }}
      />
    </div>
  );
};

export default ScrollProgress;
