import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [hasMoved, setHasMoved] = useState<boolean>(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Organic lag behind real cursor
  const springConfig = { damping: 30, stiffness: 350, mass: 0.35 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch screens or reduced-motion
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!hasMoved) {
        setHasMoved(true);
        setIsVisible(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY, hasMoved]);

  if (!isVisible || !hasMoved) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-slate-900/50 border border-slate-900/40 pointer-events-none z-50 hidden lg:block"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    />
  );
};
