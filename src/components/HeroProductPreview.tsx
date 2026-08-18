import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Bot, ShieldCheck, Brain, Target, Layers, Loader2 } from 'lucide-react';
import { PATHWAYS, type PathwayData } from '../data/pathways';
import { easeOutCustom } from '../utils/motion';

interface HeroProductPreviewProps {
  selectedPathwayId: string;
  onSelectPathway: (id: string) => void;
  onExploreClick: (pathwayId: string) => void;
}

export const HeroProductPreview: React.FC<HeroProductPreviewProps> = ({
  selectedPathwayId,
  onSelectPathway,
  onExploreClick,
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisStepIndex, setAnalysisStepIndex] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const analysisSteps = [
    'Analyzing focus area...',
    'Mapping capability requirements...',
    'Building your pathway...',
  ];

  const currentPathway: PathwayData = PATHWAYS[selectedPathwayId] || PATHWAYS['ai-automation'];

  const handlePathwayClick = (id: string) => {
    if (id === selectedPathwayId && !isAnalyzing) return;
    
    if (timerRef.current) clearTimeout(timerRef.current);

    onSelectPathway(id);
    setIsAnalyzing(true);
    setAnalysisStepIndex(0);

    const t1 = setTimeout(() => setAnalysisStepIndex(1), 280);
    const t2 = setTimeout(() => setAnalysisStepIndex(2), 560);
    const t3 = setTimeout(() => {
      setIsAnalyzing(false);
    }, 850);

    timerRef.current = t3;
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-automation':
        return <Bot className="w-4 h-4" />;
      case 'ai-leadership':
        return <Brain className="w-4 h-4" />;
      case 'cybersecurity':
        return <ShieldCheck className="w-4 h-4" />;
      case 'executive-growth':
        return <Target className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.08)] p-5 sm:p-7 relative overflow-hidden subtle-grid-bg transition-shadow duration-300">
      {/* 1. Simplified Product Header: PATHWAY AI (left) | ● LIVE PREVIEW (right) */}
      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-100 relative z-10 select-none">
        <span className="text-xs font-extrabold uppercase tracking-widest text-slate-800">
          PATHWAY AI
        </span>

        <div className="flex items-center space-x-1.5 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>LIVE PREVIEW</span>
        </div>
      </div>

      {/* 2. Step Label & Question */}
      <div className="mb-4 relative z-10">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
          <span>STEP 01</span>
          <span>•</span>
          <span>Focus</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-navy-950 tracking-tight">
          What direction are you building toward?
        </h3>
      </div>

      {/* 3. Simplified Option Cards (Icon + Title Only) */}
      <div className="grid grid-cols-2 gap-2.5 mb-5 relative z-10">
        {Object.values(PATHWAYS).map((pathway) => {
          const isSelected = pathway.id === selectedPathwayId;
          return (
            <button
              key={pathway.id}
              onClick={() => handlePathwayClick(pathway.id)}
              className={`relative flex items-center p-3 rounded-xl border text-left transition-all duration-200 focus:outline-none group ${
                isSelected
                  ? 'bg-acdyon-blueLight/40 border-acdyon-blue text-navy-950 shadow-[0_4px_14px_rgba(37,99,235,0.08)]'
                  : 'bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:shadow-[0_4px_14px_rgba(0,0,0,0.04)] hover:-translate-y-0.5'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center mr-2.5 shrink-0 transition-transform duration-200 ${
                  isSelected
                    ? 'bg-acdyon-blue text-white'
                    : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                }`}
              >
                {getIcon(pathway.id)}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-bold truncate leading-tight">
                  {pathway.title}
                </p>
              </div>

              {isSelected && (
                <motion.div
                  layoutId="selectedCheck"
                  className="ml-1 text-acdyon-blue"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.18 }}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </motion.div>
              )}
            </button>
          );
        })}
      </div>

      {/* 4. Streamlined Recommendation Card */}
      <div className="rounded-2xl bg-slate-900 text-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.12)] relative overflow-hidden min-h-[190px] flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
            RECOMMENDED PATHWAY
          </span>
        </div>

        <AnimatePresence mode="wait">
          {isAnalyzing ? (
            <motion.div
              key="analyzing"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="py-6 flex flex-col items-center justify-center text-center space-y-2.5"
            >
              <div className="flex items-center space-x-2">
                <Loader2 className="w-4 h-4 text-acdyon-blueLight animate-spin" />
                <span className="text-xs font-semibold text-slate-200">
                  {analysisSteps[analysisStepIndex]}
                </span>
              </div>
              <div className="w-32 h-1 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-acdyon-blue"
                  initial={{ width: '0%' }}
                  animate={{ width: `${(analysisStepIndex + 1) * 33.3}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={currentPathway.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: easeOutCustom }}
            >
              {/* Dominant Title */}
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5 tracking-tight">
                {currentPathway.subtitle}
              </h4>

              {/* Short One-Line Explanation */}
              <p className="text-xs text-slate-300 mb-3.5 line-clamp-1 leading-relaxed">
                {currentPathway.description}
              </p>

              {/* 3 Capability Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {currentPathway.keyCapabilities.slice(0, 3).map((cap, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-200 border border-slate-700/60"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              {/* Small Action Link */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">
                  AcdyOn Direction Track
                </span>

                <button
                  onClick={() => onExploreClick(currentPathway.id)}
                  className="inline-flex items-center text-xs font-bold text-acdyon-blueLight hover:text-white transition-colors duration-180 focus:outline-none group/btn"
                >
                  <span>Explore pathway</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/btn:translate-x-1 transition-transform duration-180" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
