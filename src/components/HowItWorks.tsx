import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { easeOutCustom } from '../utils/motion';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      icon: Target,
      tagline: 'Goals & Context',
      description: 'Start with your goals, experience, and professional context to establish clear baseline objectives.',
    },
    {
      num: '02',
      title: 'Guide',
      icon: Compass,
      tagline: 'Pathway Mapping',
      description: 'Explore a pathway specifically aligned with the direction you are trying to build.',
    },
    {
      num: '03',
      title: 'Advance',
      icon: ArrowUpRight,
      tagline: 'Practical Execution',
      description: 'Move seamlessly from exploration toward a structured, practical next step.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white border-y border-border relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header with Reveal */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-950 bg-slate-100 px-3 py-1 rounded-lg border border-slate-900/15 shadow-[0_4px_14px_rgba(0,0,0,0.05)]">
            Guided Framework
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mt-4 mb-4">
            How Pathway AI Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            A structured three-phase experience designed for professionals seeking intentional direction.
          </p>
        </Reveal>

        {/* 3 Step Cards Grid with Glass Effect & Defined Black Edges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Animated Horizontal Connecting Line */}
          <div className="absolute top-1/2 left-[15%] right-[15%] h-[2px] bg-slate-200 -z-0 hidden md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: easeOutCustom, delay: 0.1 }}
              className="h-full bg-navy-950 origin-left"
            />
          </div>

          {steps.map((step, index) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: easeOutCustom }}
                whileHover={{ y: -4, boxShadow: '0 24px 55px -10px rgba(0,0,0,0.18)' }}
                className="glass-card-light rounded-3xl p-8 border border-slate-900/15 shadow-[0_18px_45px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 relative group z-10"
              >
                {/* Large Elegant Number & Defined Box Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-extrabold text-slate-300 group-hover:text-navy-950 transition-colors duration-200 tracking-tighter">
                    {step.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 text-white border border-slate-800 flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.18)] group-hover:-translate-y-0.5 transition-transform duration-200">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-acdyon-indigo">
                  {step.tagline}
                </span>

                <h3 className="text-2xl font-bold text-navy-950 tracking-tight mt-1 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
