import React from 'react';
import { ArrowRight, Calendar, MessageSquare, Compass } from 'lucide-react';

interface ConsultationSectionProps {
  onBookConsultation: () => void;
  onExplorePrograms: () => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  onBookConsultation,
  onExplorePrograms,
}) => {
  return (
    <section id="consultation" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="glass-card-light rounded-3xl border border-slate-900/15 p-8 sm:p-12 lg:p-16 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.16)] relative overflow-hidden subtle-grid-bg">
          <div className="max-w-3xl">
            {/* Eyebrow Box */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-slate-100 text-navy-950 text-xs font-bold uppercase tracking-wider mb-6 border border-slate-900/15 shadow-[0_4px_14px_rgba(0,0,0,0.05)]">
              <Calendar className="w-3.5 h-3.5 text-acdyon-blue" />
              <span>Personalized Advisory</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight leading-tight mb-6">
              Not sure which direction fits?
            </h2>

            {/* Supporting Copy */}
            <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
              Start with a guided conversation about your professional background, goals, and the pathway you're considering. Our advisors help bring clarity to your next career milestone.
            </p>

            {/* Principles Cards with Glass Box Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="p-4 rounded-2xl bg-white border border-slate-900/15 flex items-start space-x-3 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <div className="w-9 h-9 rounded-xl bg-navy-950 text-white border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 shadow-subtle">
                  <MessageSquare className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950">1-on-1 Executive Discussion</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Explore tailored academic and capability tracks with experienced mentors.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-900/15 flex items-start space-x-3 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
                <div className="w-9 h-9 rounded-xl bg-navy-950 text-white border border-slate-800 flex items-center justify-center shrink-0 mt-0.5 shadow-subtle">
                  <Compass className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-navy-950">No Commitment Consultation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Objective evaluation of your prior experience and target outcomes.</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-bold text-white bg-navy-950 hover:bg-slate-800 shadow-[0_8px_24px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none border border-slate-800"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2.5" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-900/20 transition-all duration-200 focus:outline-none shadow-subtle"
              >
                <span>Explore Programs</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
