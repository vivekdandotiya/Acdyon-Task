import React from 'react';
import { Compass, Zap, Shield, Sparkles } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const principles = [
    { title: 'Guided', icon: Compass, desc: 'Personalized pathway mapping' },
    { title: 'Practical', icon: Zap, desc: 'Hands-on workflow execution' },
    { title: 'Executive-Friendly', icon: Shield, desc: 'Tailored for decision-makers' },
    { title: 'AI-Aware', icon: Sparkles, desc: 'Grounded in modern capability' },
  ];

  return (
    <section className="py-8 bg-slate-950 text-white border-y border-slate-800">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Section Headline */}
          <div className="text-center md:text-left max-w-md">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Core Principles
            </p>
            <h2 className="text-base sm:text-lg font-semibold text-slate-100 leading-snug">
              Built around professional goals, existing expertise, and future-ready capability.
            </h2>
          </div>

          {/* 4 Principles Glassy Box Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full md:w-auto">
            {principles.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-white flex items-center justify-center shrink-0 shadow-subtle">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-100">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
