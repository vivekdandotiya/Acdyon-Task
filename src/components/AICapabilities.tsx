import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Sparkles, Brain, ArrowUpRight } from 'lucide-react';
import { AI_CAPABILITIES, type CapabilityItem } from '../data/capabilities';
import { easeOutCustom } from '../utils/motion';

export const AICapabilities: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-white" />;
      case 'Workflow':
        return <Workflow className="w-6 h-6 text-acdyon-blueLight" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Dark Ambient Grid Background Layer */}
      <div className="absolute inset-0 dot-pattern-dark opacity-80 pointer-events-none -z-0" />

      {/* Slow Background Ambient Radial Gradient */}
      <motion.div
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-acdyon-blue/15 blur-[130px] pointer-events-none -z-0"
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-white bg-slate-900 px-3 py-1 rounded-lg border border-slate-700 shadow-subtle">
            Applied Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-4 mb-4">
            AI capability should move beyond theory.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            AcdyOn brings applied AI capability into a broader professional advancement experience.
          </p>
        </div>

        {/* 4 Cards Grid with Dark Glassmorphism & Defined Edges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_CAPABILITIES.map((cap: CapabilityItem, idx: number) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: idx * 0.09, ease: easeOutCustom }}
              whileHover={{ y: -4, boxShadow: '0 28px 60px rgba(0,0,0,0.5)' }}
              className="glass-card-dark rounded-3xl p-6 sm:p-7 border border-slate-700/80 shadow-[0_24px_50px_rgba(0,0,0,0.38)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.25)] group-hover:-translate-y-0.5 transition-transform duration-200">
                    {getIcon(cap.iconName)}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-acdyon-blueLight">
                  {cap.tag}
                </span>

                <h3 className="text-xl font-bold text-white tracking-tight mt-1 mb-3">
                  {cap.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400">
                <span>Domain Focus</span>
                <span className="text-slate-200 font-bold">Practical & Executable</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
