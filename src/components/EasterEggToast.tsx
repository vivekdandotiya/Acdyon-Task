import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

interface EasterEggToastProps {
  isVisible: boolean;
  onClose: () => void;
}

export const EasterEggToast: React.FC<EasterEggToastProps> = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm bg-navy-950 text-white rounded-2xl p-4 shadow-elevated border border-acdyon-indigo/40 flex items-start space-x-3"
        >
          <div className="w-9 h-9 rounded-xl bg-acdyon-indigo/30 text-acdyon-indigoLight flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold uppercase tracking-wider text-acdyon-indigoLight">
              Hidden Path Unlocked 🎯
            </h4>
            <p className="text-xs text-slate-300 font-medium mt-1 leading-snug">
              You found the hidden path! Thank you for exploring the AcdyOn Pathway AI concept submission.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 focus:outline-none"
            aria-label="Dismiss easter egg"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
