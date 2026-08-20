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
        return <Bot className="w-4.5 h-4.5" />;
      case 'ai-leadership':
        return <Brain className="w-4.5 h-4.5" />;
      case 'cybersecurity':
        return <ShieldCheck className="w-4.5 h-4.5" />;
      case 'executive-growth':
        return <Target className="w-4.5 h-4.5" />;
      default:
        return <Layers className="w-4.5 h-4.5" />;
    }
  };

  return (
    <div className="w-full glass-card-light rounded-3xl border border-slate-900/15 shadow-[0_24px_55px_-10px_rgba(0,0,0,0.16)] p-5 sm:p-7 relative overflow-hidden subtle-grid-bg transition-all duration-300 hover:shadow-[0_28px_65px_-10px_rgba(0,0,0,0.2)]">
      {/* 1. Glass Header: PATHWAY AI (left) | LIVE PREVIEW BOX (right) */}
      <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-slate-900/10 relative z-10 select-none">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-sm bg-navy-950 shadow-sm" />
          <span className="text-xs font-extrabold uppercase tracking-widest text-navy-950">
            PATHWAY AI
          </span>
        </div>

        {/* Defined Box Status Badge */}
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-slate-100 border border-slate-900/15 text-[11px] font-bold text-navy-950 uppercase tracking-wider shadow-subtle">
          <span className="w-2 h-2 rounded-sm bg-emerald-500" />
          <span>LIVE PREVIEW</span>
        </div>
      </div>

      {/* 2. Step Label & Question */}
      <div className="mb-4 relative z-10">
        <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
          <span className="px-2 py-0.5 rounded-lg bg-slate-200/80 border border-slate-900/15 text-[10px] text-navy-950 font-mono shadow-subtle">
            STEP 01
          </span>
          <span>•</span>
          <span>Focus</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-navy-950 tracking-tight">
          What direction are you building toward?
        </h3>
      </div>

      {/* 3. Option Box Cards with Defined Box Icon Containers (NOT CIRCLES), Black Edges & Black Shadows */}
      <div className="grid grid-cols-2 gap-3 mb-5 relative z-10">
        {Object.values(PATHWAYS).map((pathway) => {
          const isSelected = pathway.id === selectedPathwayId;
          return (
            <button
              key={pathway.id}
              onClick={() => handlePathwayClick(pathway.id)}
              className={`relative flex items-center p-3.5 rounded-2xl border text-left transition-all duration-200 focus:outline-none group ${
                isSelected
                  ? 'bg-white border-navy-950 text-navy-950 shadow-[0_10px_25px_rgba(0,0,0,0.16)] ring-1 ring-navy-950/20 -translate-y-0.5'
                  : 'bg-white/90 border-slate-900/15 text-slate-700 hover:border-slate-900/30 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] hover:-translate-y-0.5'
              }`}
            >
              {/* Defined Rounded-XL Box Icon Container (NOT CIRCLE) with Black Edge & Black Shadow */}
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center mr-3 shrink-0 transition-all duration-200 border ${
                  isSelected
                    ? 'bg-navy-950 text-white border-navy-950 shadow-[0_4px_14px_rgba(0,0,0,0.25)]'
                    : 'bg-slate-100 text-slate-800 border-slate-900/15 shadow-[0_3px_10px_rgba(0,0,0,0.08)] group-hover:bg-slate-200'
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
                  className="ml-1 text-navy-950"
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

      {/* 4. Streamlined Glassy Dark Recommendation Card */}
      <div className="rounded-2xl bg-slate-950/95 backdrop-blur-xl text-white p-5 border border-slate-800 shadow-[0_18px_45px_rgba(0,0,0,0.35)] relative overflow-hidden min-h-[190px] flex flex-col justify-between">
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
              <div className="w-32 h-1 bg-slate-800 rounded-xl overflow-hidden">
                <motion.div
                  className="h-full bg-acdyon-blue rounded-xl"
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

              {/* 3 Capability Tags with Rounded Box Edge Design */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {currentPathway.keyCapabilities.slice(0, 3).map((cap, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-2.5 py-1 rounded-xl text-[11px] font-medium bg-slate-900 text-slate-200 border border-slate-800 shadow-sm"
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
