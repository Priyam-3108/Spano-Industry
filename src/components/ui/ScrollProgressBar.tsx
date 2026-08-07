'use client';
import { useScroll, useSpring, motion } from 'framer-motion';

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] origin-left h-[3px]"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #66be47 0%, #9bcb3c 60%, #82bc00 100%)',
        boxShadow: '0 0 10px rgba(102,190,71,0.6)',
      }}
    />
  );
}
