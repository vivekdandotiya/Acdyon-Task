import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { easeOutCustom } from '../utils/motion';

export const BrandStory: React.FC = () => {
  const stages = [
    {
      step: '01',
      title: 'Where you are',
      subtitle: 'Existing Expertise',
      description: 'Your existing domain knowledge, technical background, and leadership experience serve as the foundation.',
      icon: ShieldCheck,
    },
    {
      step: '02',
      title: "Where you're going",
      subtitle: 'Target Direction',
      description: 'Identify specific capabilities—whether LLM orchestration, AI risk governance, or team workflow automation.',
      icon: TrendingUp,
    },
    {
      step: '03',
      title: "What's next",
      subtitle: 'Executable Action',
      description: 'Connect directly with verified AcdyOn certification tracks, executive modules, or structured advisory cohorts.',
      icon: Layers,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Dark Ambient Grid Background Layer */}
      <div className="absolute inset-0 dot-pattern-dark opacity-75 pointer-events-none -z-0" />

      {/* Ambient Glow */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-acdyon-blue/20 blur-[140px] pointer-events-none -z-0"
      />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Executive Messaging */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 mb-6 text-slate-200 shadow-subtle">
                <Sparkles className="w-3.5 h-3.5 text-acdyon-blueLight" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Executive Positioning
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Your experience is the starting point.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                AI capability development shouldn't force professionals to start from scratch. AcdyOn Pathway AI maps existing expertise into intentional forward momentum.
              </p>
            </Reveal>

            {/* 3 Staggered Narrative Stage Cards with Glass Effect */}
            <div className="space-y-4">
              {stages.map((stg, idx) => {
                const IconComp = stg.icon;
                return (
                  <motion.div
                    key={stg.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: idx * 0.12, ease: easeOutCustom }}
                    whileHover={{ y: -3, boxShadow: '0 20px 45px rgba(0,0,0,0.35)' }}
                    className="p-5 rounded-2xl glass-card-dark border border-slate-700/80 hover:border-slate-600 transition-all duration-300 flex items-start space-x-4 group shadow-[0_16px_35px_rgba(0,0,0,0.28)]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 text-white flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-navy-950 transition-colors duration-200 shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-xs font-extrabold uppercase text-acdyon-blueLight tracking-wider">
                          Phase {stg.step}
                        </span>
                        <span className="text-slate-500 text-xs">•</span>
                        <span className="text-slate-400 text-xs font-semibold">
                          {stg.subtitle}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">
                        {stg.title}
                      </h4>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                        {stg.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sophisticated Executive Editorial Visual */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: easeOutCustom }}
              className="glass-card-dark rounded-3xl p-7 border border-slate-700 shadow-[0_24px_60px_rgba(0,0,0,0.45)] relative overflow-hidden"
            >
              {/* Executive Architecture Mockup */}
              <div className="pb-4 mb-6 border-b border-slate-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    AcdyOn Governance Architecture
                  </span>
                </div>
                <span className="text-[11px] font-bold text-white bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-700">
                  Applied Framework
                </span>
              </div>

              {/* Graphic Process Cards */}
              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-between shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-xs font-bold text-white">Domain Expertise Integration</p>
                      <p className="text-[11px] text-slate-400">Contextual alignment with company goals</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">VERIFIED</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-between shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-xs font-bold text-white">AI Automation Capability</p>
                      <p className="text-[11px] text-slate-400">LLM orchestration & process mapping</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-acdyon-blueLight bg-slate-800 px-2 py-1 rounded">ACTIVE</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 flex items-center justify-between shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-xs font-bold text-white">Executive Track Certification</p>
                      <p className="text-[11px] text-slate-400">Practical outcome verification</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-slate-800 px-2 py-1 rounded">READY</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 text-center">
                <p className="text-xs text-slate-400 font-medium">
                  Designed around real enterprise transformation requirements.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
