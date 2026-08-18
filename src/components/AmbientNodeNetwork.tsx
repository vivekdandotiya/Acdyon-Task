import React from 'react';
import { motion } from 'framer-motion';

export const AmbientNodeNetwork: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Page-Wide Editorial Black Dot Grid Pattern Layer */}
      <motion.div
        animate={{
          backgroundPosition: ['0px 0px', '16px 16px', '0px 0px'],
          opacity: [0.75, 0.95, 0.75],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-full h-full dot-pattern-light"
      />
    </div>
  );
};
