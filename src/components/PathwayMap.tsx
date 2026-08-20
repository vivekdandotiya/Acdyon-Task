import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Brain, Layers, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { easeOutCustom } from '../utils/motion';

interface MapNode {
  id: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  details: string[];
}

export const PathwayMap: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('capability');

  const nodes: MapNode[] = [
    {
      id: 'goal',
      step: '01',
      title: 'GOAL',
      tagline: 'Define Ambition & Direction',
      description: 'Identify your target professional role, technology focus, or executive milestone.',
      icon: Target,
      details: ['Target Outcomes', 'Career Benchmarks', 'Leadership Ambition'],
    },
    {
      id: 'context',
      step: '02',
      title: 'CONTEXT',
      tagline: 'Map Current Expertise',
      description: 'Factor in your existing background, technical skills, and organizational domain context.',
      icon: Compass,
      details: ['Domain Experience', 'Technical Baseline', 'Role Context'],
    },
    {
      id: 'capability',
      step: '03',
      title: 'CAPABILITY',
      tagline: 'Applied Skills & Workflows',
      description: 'Identify core AI automation, governance, and architectural capabilities required.',
      icon: Brain,
      details: ['Applied AI Workflows', 'Agent Orchestration', 'Security & Governance'],
    },
    {
      id: 'pathway',
      step: '04',
      title: 'PATHWAY',
      tagline: 'Structured Learning Track',
      description: 'Match your goal and context with a tailored AcdyOn pathway discovery track.',
      icon: Layers,
      details: ['Tailored Track', 'Modular Progress', 'Executive Mentorship'],
    },
    {
      id: 'next-step',
      step: '05',
      title: 'NEXT STEP',
      tagline: 'Practical Execution',
      description: 'Transition from discovery into actionable certification, training, or advising.',
      icon: ArrowUpRight,
      details: ['Enrollment Action', 'Advisory Call', 'Team Cohorts'],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-border relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-950 bg-slate-100 px-3.5 py-1 rounded-xl border border-slate-900/15 shadow-[0_4px_14px_rgba(0,0,0,0.05)]">
            Pathway Mapping Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mt-4 mb-4">
            How individual progress is mapped.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A structured visual map guiding professionals from goal definition to practical execution.
          </p>
        </Reveal>

        {/* Desktop Interactive Pathway Map View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Vertical Node Timeline (Nodes 01 to 05) */}
          <div className="lg:col-span-5 relative pl-6 sm:pl-8">
            {/* Animated Vertical Connection Line */}
            <div className="absolute top-4 bottom-4 left-[27px] sm:left-[35px] w-[2px] bg-slate-200 -z-0">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: easeOutCustom }}
                className="w-full h-full bg-navy-950 origin-top"
              />
            </div>

            <div className="space-y-6 relative z-10">
              {nodes.map((node, idx) => {
                const isActive = activeNodeId === node.id;
                const IconComp = node.icon;

                return (
                  <motion.div
                    key={node.id}
                    initial={{ opacity: 0, x: -16, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.12, ease: easeOutCustom }}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onClick={() => setActiveNodeId(node.id)}
                    className={`flex items-center p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer select-none ${
                      isActive
                        ? 'bg-navy-950 text-white border-navy-950 shadow-[0_12px_32px_rgba(0,0,0,0.22)] translate-x-2'
                        : 'bg-white text-slate-700 border-slate-900/15 hover:border-slate-900/30 hover:bg-slate-50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                    }`}
                  >
                    {/* Defined Rounded-XL Node Badge Box (NOT CIRCLE) */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mr-3.5 shrink-0 border transition-transform duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.14)] ${
                        isActive
                          ? 'bg-white text-navy-950 border-white'
                          : 'bg-slate-100 text-slate-700 border-slate-900/15'
                      }`}
                    >
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-0.5">
                        <span className={`text-[10px] font-extrabold uppercase tracking-widest ${isActive ? 'text-slate-300' : 'text-slate-400'}`}>
                          Node {node.step}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold tracking-tight truncate">
                        {node.title}: <span className="font-semibold text-xs sm:text-sm opacity-90">{node.tagline}</span>
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Node Detail Spotlight Panel */}
          <div className="lg:col-span-7">
            {nodes.map((node) => {
              if (node.id !== activeNodeId) return null;
              const IconComp = node.icon;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: easeOutCustom }}
                  className="glass-card-light rounded-3xl p-8 border border-slate-900/15 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-900/10">
                    <div className="flex items-center space-x-3">
                      {/* Defined Rounded-2XL Spotlight Icon Box */}
                      <div className="w-12 h-12 rounded-2xl bg-navy-950 text-white border border-slate-800 flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.2)]">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-acdyon-blue">
                          Phase {node.step} Spotlight
                        </span>
                        <h3 className="text-2xl font-bold text-navy-950 tracking-tight">
                          {node.title} Stage
                        </h3>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-700 bg-white border border-slate-900/15 px-3 py-1 rounded-xl shadow-subtle">
                      Interactive Map Node
                    </span>
                  </div>

                  <p className="text-base text-slate-700 leading-relaxed mb-6">
                    {node.description}
                  </p>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Core Node Deliverables & Focus Points:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {node.details.map((detail, dIdx) => (
                        <div
                          key={dIdx}
                          className="bg-white p-3.5 rounded-xl border border-slate-900/15 text-xs font-semibold text-navy-950 flex items-center shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
                        >
                          <span className="w-2 h-2 rounded-sm bg-navy-950 mr-2 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
