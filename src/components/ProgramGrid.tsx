import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Star } from 'lucide-react';
import { ACDYON_PROGRAMS, type ProgramItem } from '../data/programs';
import { Reveal } from './Reveal';
import { easeOutCustom } from '../utils/motion';

interface ProgramGridProps {
  onSelectCategory: (categoryId: string) => void;
}

export const ProgramGrid: React.FC<ProgramGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="programs" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-navy-950 bg-slate-100 px-3 py-1 rounded-lg border border-slate-900/15 shadow-[0_4px_14px_rgba(0,0,0,0.05)]">
            Official AcdyOn Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mt-4 mb-4">
            Connect pathways directly to AcdyOn programs.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Pathways map directly to real AcdyOn learning tracks, executive certifications, and institutional programs.
          </p>
        </Reveal>

        {/* 4 Cards Grid with Glass Effect & Defined Black Edges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACDYON_PROGRAMS.map((program: ProgramItem, idx: number) => {
            const isFeatured = idx === 0;

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: idx * 0.09, ease: easeOutCustom }}
                whileHover={{ y: -4, boxShadow: isFeatured ? '0 25px 60px rgba(0, 0, 0, 0.45)' : '0 25px 55px -10px rgba(0, 0, 0, 0.18)' }}
                className={`rounded-3xl p-8 border transition-all duration-300 group flex flex-col justify-between relative overflow-hidden ${
                  isFeatured
                    ? 'glass-card-dark text-white border-slate-700 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.4)]'
                    : 'glass-card-light text-navy-950 border-slate-900/15 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.12)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-200 group-hover:-translate-y-0.5 ${
                        isFeatured
                          ? 'bg-white text-navy-950 border-white shadow-subtle'
                          : 'bg-navy-950 text-white border-navy-950 shadow-[0_6px_18px_rgba(0,0,0,0.18)]'
                      }`}
                    >
                      <BookOpen className="w-6 h-6" />
                    </div>

                    <div className="flex items-center space-x-2">
                      {isFeatured && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white text-navy-950 border border-white shadow-subtle">
                          <Star className="w-3 h-3 mr-1 fill-navy-950 text-navy-950" />
                          Featured Offering
                        </span>
                      )}
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-lg border ${
                          isFeatured
                            ? 'bg-slate-900 text-slate-200 border-slate-700'
                            : 'bg-slate-100 text-navy-950 border-slate-900/15'
                        }`}
                      >
                        {program.category}
                      </span>
                    </div>
                  </div>

                  <span className={`text-xs font-extrabold uppercase tracking-wider block mb-1 ${isFeatured ? 'text-acdyon-blueLight' : 'text-acdyon-indigo'}`}>
                    {program.badge}
                  </span>

                  <h3 className={`text-2xl font-bold tracking-tight mb-3 ${isFeatured ? 'text-white' : 'text-navy-950'}`}>
                    {program.title}
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed mb-6 ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                    {program.description}
                  </p>

                  {/* Offerings Bullet List */}
                  <div className="space-y-2.5 mb-8">
                    {program.highlights.map((highlight, tIdx) => (
                      <div key={tIdx} className={`flex items-center text-xs sm:text-sm font-medium ${isFeatured ? 'text-slate-200' : 'text-slate-700'}`}>
                        <span className={`w-2 h-2 rounded-sm mr-2.5 shrink-0 ${isFeatured ? 'bg-white' : 'bg-navy-950'}`} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Audience & Action */}
                <div>
                  <p className={`text-[11px] font-semibold uppercase tracking-wider mb-3 ${isFeatured ? 'text-slate-400' : 'text-slate-500'}`}>
                    Recommended Audience: <span className={isFeatured ? 'text-slate-200 font-normal' : 'text-slate-700 font-normal'}>{program.recommendedFor}</span>
                  </p>

                  <button
                    onClick={() => onSelectCategory(program.id)}
                    className={`w-full inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-sm font-bold transition-all duration-200 focus:outline-none group/btn border ${
                      isFeatured
                        ? 'bg-white text-navy-950 hover:bg-slate-100 border-white shadow-[0_6px_20px_rgba(255,255,255,0.2)]'
                        : 'bg-navy-950 text-white hover:bg-slate-800 border-navy-950 shadow-[0_8px_24px_rgba(0,0,0,0.2)]'
                    }`}
                  >
                    <span>Explore {program.category}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
