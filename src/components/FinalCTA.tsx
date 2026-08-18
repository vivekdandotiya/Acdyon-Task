import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onDiscoverClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onDiscoverClick }) => {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-acdyon-blue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-acdyon-indigo/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle AI Visual Motif Background Nodes */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20%" cy="25%" r="2.5" fill="#2563EB" />
        <circle cx="80%" cy="30%" r="2" fill="#6366F1" />
        <circle cx="50%" cy="85%" r="2" fill="#2563EB" />
        <line x1="20%" y1="25%" x2="50%" y2="85%" stroke="#2563EB" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="80%" y1="30%" x2="50%" y2="85%" stroke="#6366F1" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950 text-acdyon-indigoLight text-xs font-bold uppercase tracking-wider mb-6 border border-indigo-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pathway AI Experience</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Your next chapter should build on what you've already achieved.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-10">
            Explore a more guided approach to professional advancement and future-ready capability.
          </p>

          <div className="flex justify-center">
            <button
              onClick={onDiscoverClick}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-navy-950 bg-white hover:bg-slate-100 shadow-elevated hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus:outline-none"
            >
              <span>Discover Your Path</span>
              <ArrowRight className="w-5 h-5 ml-2.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
