import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, Clock, CheckCircle2, ChevronDown, ChevronUp, Target, Users, Zap, RotateCcw, Edit3 } from 'lucide-react';
import { PATHWAYS, CONTEXT_OPTIONS, PRIORITY_OPTIONS, recommendPathway } from '../data/pathways';
import { easeOutCustom } from '../utils/motion';

interface PathwayRecommendationCardProps {
  goalId: string;
  contextId: string;
  priorityId: string;
  onBookConsultation: () => void;
  onResetPathway?: () => void;
  onEditStep?: (step: number) => void;
}

export const PathwayRecommendationCard: React.FC<PathwayRecommendationCardProps> = ({
  goalId,
  contextId,
  priorityId,
  onBookConsultation,
  onResetPathway,
  onEditStep,
}) => {
  const [showWhyPathway, setShowWhyPathway] = useState<boolean>(true);
  const result = recommendPathway(goalId, contextId, priorityId);
  const pathway = result.pathway;

  const goalObj = PATHWAYS[goalId] || PATHWAYS['ai-automation'];
  const contextObj = CONTEXT_OPTIONS.find((c) => c.id === contextId) || CONTEXT_OPTIONS[0];
  const priorityObj = PRIORITY_OPTIONS.find((p) => p.id === priorityId) || PRIORITY_OPTIONS[0];

  const scrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: easeOutCustom }}
      className="glass-card-light rounded-3xl border border-slate-900/15 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.16)] p-6 sm:p-8 relative overflow-hidden"
    >
      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-900/10">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-navy-950" />
          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-600">
            RECOMMENDED PATHWAY
          </span>
        </div>
        <div className="flex items-center space-x-3">
          {onResetPathway && (
            <button
              onClick={onResetPathway}
              className="inline-flex items-center text-xs font-bold text-slate-700 hover:text-navy-950 hover:bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-900/15 transition-colors shadow-subtle"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1" />
              <span>Reset Pathway</span>
            </button>
          )}
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-navy-950 text-white text-xs font-bold border border-slate-900 shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-acdyon-blueLight" />
            <span>AI-Guided Pathway Preview</span>
          </div>
        </div>
      </div>

      {/* Recommended Pathway Title & Overview */}
      <div className="mb-6">
        <span className="text-xs font-extrabold text-acdyon-indigo uppercase tracking-wider">
          {pathway.subtitle}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 tracking-tight mt-1 mb-3">
          {pathway.title} Direction
        </h3>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {pathway.description}
        </p>
      </div>

      {/* Expandable "WHY THIS PATHWAY?" Rationale Accordion */}
      <div className="mb-6">
        <button
          onClick={() => setShowWhyPathway(!showWhyPathway)}
          className="inline-flex items-center text-xs font-bold text-navy-950 hover:text-acdyon-blue py-1.5 focus:outline-none group/why"
        >
          <span>Why this pathway?</span>
          {showWhyPathway ? (
            <ChevronUp className="w-4 h-4 ml-1 transition-transform group-hover/why:-translate-y-0.5" />
          ) : (
            <ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover/why:translate-y-0.5" />
          )}
        </button>

        <AnimatePresence>
          {showWhyPathway && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: easeOutCustom }}
              className="overflow-hidden"
            >
              <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-slate-950 text-white border border-slate-800 space-y-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {result.whyItFits}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center space-x-1.5 text-acdyon-blueLight mb-1">
                      <Target className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Goal</span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium truncate">{goalObj.title}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center space-x-1.5 text-acdyon-indigoLight mb-1">
                      <Users className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Context</span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium truncate">{contextObj.title}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    <div className="flex items-center space-x-1.5 text-emerald-400 mb-1">
                      <Zap className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-bold uppercase tracking-wider">Priority</span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium truncate">{priorityObj.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* YOUR DIRECTION Summary Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-900/15 mb-6 shadow-[0_6px_20px_rgba(0,0,0,0.06)]">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          YOUR DIRECTION SUMMARY
        </h4>
        <div className="space-y-2 text-xs sm:text-sm">
          <div className="flex items-center justify-between py-1 border-b border-slate-900/10">
            <span className="text-slate-500 font-medium">Selected Goal:</span>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-navy-950">{goalObj.title}</span>
              {onEditStep && (
                <button
                  onClick={() => onEditStep(1)}
                  className="text-acdyon-blue hover:underline text-xs flex items-center font-semibold"
                >
                  <Edit3 className="w-3 h-3 mr-0.5" /> Edit
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-slate-900/10">
            <span className="text-slate-500 font-medium">Current Context:</span>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-navy-950">{contextObj.title}</span>
              {onEditStep && (
                <button
                  onClick={() => onEditStep(2)}
                  className="text-acdyon-blue hover:underline text-xs flex items-center font-semibold"
                >
                  <Edit3 className="w-3 h-3 mr-0.5" /> Edit
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-slate-500 font-medium">Primary Priority:</span>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-navy-950">{priorityObj.title}</span>
              {onEditStep && (
                <button
                  onClick={() => onEditStep(3)}
                  className="text-acdyon-blue hover:underline text-xs flex items-center font-semibold"
                >
                  <Edit3 className="w-3 h-3 mr-0.5" /> Edit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Core Capability Badges */}
      <div className="mb-6">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
          CORE FOCUS CAPABILITIES:
        </h4>
        <div className="flex flex-wrap gap-2">
          {pathway.keyCapabilities.map((cap, idx) => (
            <div
              key={idx}
              className="inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-semibold bg-navy-950 text-white border border-slate-800 shadow-[0_4px_14px_rgba(0,0,0,0.18)]"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-acdyon-blueLight mr-1.5" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Curriculum Modules */}
      <div className="mb-8">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center">
          <BookOpen className="w-3.5 h-3.5 mr-1.5 text-acdyon-blue" />
          RECOMMENDED DEVELOPMENT MODULES:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {pathway.recommendedModules.map((mod, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-slate-900/15 hover:border-slate-900/30 transition-colors shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy-950 bg-slate-100 border border-slate-900/10 px-2 py-0.5 rounded-md">
                  Module 0{idx + 1}
                </span>
                <span className="inline-flex items-center text-[10px] font-semibold text-slate-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {mod.duration}
                </span>
              </div>
              <h5 className="text-xs sm:text-sm font-bold text-navy-950 mb-1 leading-snug">
                {mod.title}
              </h5>
              <p className="text-[11px] text-slate-500 font-normal">
                {mod.focus}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer & Next Actions */}
      <div className="pt-6 border-t border-slate-900/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xs text-slate-500 font-medium">
            Relevant AcdyOn Offering:
          </p>
          <p className="text-sm font-bold text-navy-950">
            {result.suggestedProgramCategory}
          </p>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto">
          {/* Secondary Action */}
          <button
            onClick={onBookConsultation}
            className="flex-1 sm:flex-none inline-flex items-center justify-center px-4.5 py-3 rounded-xl text-xs sm:text-sm font-bold text-navy-950 bg-white hover:bg-slate-100 border border-slate-900/20 transition-colors focus:outline-none shadow-subtle"
          >
            Talk to an advisor
          </button>

          {/* Primary Action */}
          <button
            onClick={scrollToPrograms}
            className="flex-1 sm:flex-none inline-flex items-center justify-center px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-navy-950 hover:bg-slate-800 shadow-[0_8px_24px_rgba(0,0,0,0.22)] transition-all duration-200 focus:outline-none group/btn border border-slate-800"
          >
            <span>Explore this pathway</span>
            <ArrowRight className="w-4 h-4 ml-1.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
