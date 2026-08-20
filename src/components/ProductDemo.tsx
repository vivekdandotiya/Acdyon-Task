import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Brain, ShieldCheck, Target, Compass, Code, Workflow, Users, Zap, Check, Sparkles, ArrowRight, ArrowLeft, Loader2, GraduationCap, TrendingUp, Layers } from 'lucide-react';
import { PATHWAYS, CONTEXT_OPTIONS, PRIORITY_OPTIONS } from '../data/pathways';
import { PathwayRecommendationCard } from './PathwayRecommendationCard';
import { easeOutCustom } from '../utils/motion';

interface ProductDemoProps {
  onBookConsultation: () => void;
}

export const ProductDemo: React.FC<ProductDemoProps> = ({ onBookConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedGoal, setSelectedGoal] = useState<string>('ai-automation');
  const [selectedContext, setSelectedContext] = useState<string>('technical-pro');
  const [selectedPriority, setSelectedPriority] = useState<string>('hands-on-capability');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    { number: '01', title: 'Goal', short: 'Goal' },
    { number: '02', title: 'Context', short: 'Context' },
    { number: '03', title: 'Priority', short: 'Priority' },
    { number: '04', title: 'Pathway', short: 'Pathway' },
  ];

  const handleNextFromPriority = () => {
    setIsGenerating(true);
    const t = setTimeout(() => {
      setIsGenerating(false);
      setActiveStep(4);
    }, 850);
    timerRef.current = t;
  };

  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSelectedGoal('ai-automation');
    setSelectedContext('technical-pro');
    setSelectedPriority('hands-on-capability');
    setIsGenerating(false);
    setActiveStep(1);
  };

  const getGoalIcon = (id: string) => {
    switch (id) {
      case 'ai-automation':
        return <Bot className="w-5 h-5 text-acdyon-blue" />;
      case 'ai-leadership':
        return <Brain className="w-5 h-5 text-acdyon-indigo" />;
      case 'cybersecurity':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'executive-growth':
        return <Target className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getContextIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-acdyon-blue" />;
      case 'Workflow':
        return <Workflow className="w-5 h-5 text-acdyon-indigo" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-purple-600" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const getPriorityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-5 h-5 text-acdyon-blue" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-acdyon-indigo" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-amber-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-600" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="product-demo" className="py-20 lg:py-28 bg-background-alt relative">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white border border-slate-900/15 text-navy-950 text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
            <Sparkles className="w-3.5 h-3.5 text-acdyon-blue" />
            <span>Interactive Pathway Discovery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 tracking-tight mb-4">
            From ambition to a recommended pathway.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Provide your goal, current context, and primary priority to generate a tailored AI-guided pathway preview.
          </p>
        </div>

        {/* Multi-Step Glassy Interactive Container with Black Edges */}
        <div className="glass-card-light rounded-3xl border border-slate-900/15 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.16)] p-6 sm:p-8 lg:p-10">
          {/* Progress Header Indicator Bar */}
          <div className="relative mb-8 sm:mb-10 pb-6 border-b border-slate-900/10">
            {/* Animated Connecting Progress Line */}
            <div className="absolute top-[28px] sm:top-[34px] left-[12%] right-[12%] h-[2px] bg-slate-200 -z-0 hidden sm:block">
              <motion.div
                className="h-full bg-navy-950 rounded-full"
                initial={{ width: '0%' }}
                animate={{
                  width:
                    activeStep === 1
                      ? '0%'
                      : activeStep === 2
                      ? '33.3%'
                      : activeStep === 3
                      ? '66.6%'
                      : '100%',
                }}
                transition={{ duration: 0.35, ease: easeOutCustom }}
              />
            </div>

            {/* 4 Step Navigation Buttons with Circular Step Badges */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 relative z-10">
              {steps.map((step, idx) => {
                const stepNum = idx + 1;
                const isActive = activeStep === stepNum;
                const isCompleted = activeStep > stepNum;

                return (
                  <button
                    key={step.number}
                    onClick={() => {
                      if (stepNum < activeStep || isCompleted) {
                        setActiveStep(stepNum);
                      }
                    }}
                    disabled={stepNum > activeStep && !isCompleted}
                    className={`flex flex-col sm:flex-row items-center sm:items-start p-2.5 sm:p-3.5 rounded-2xl border text-left transition-all duration-200 focus:outline-none ${
                      isActive
                        ? 'bg-navy-950 text-white border-navy-950 shadow-[0_8px_24px_rgba(0,0,0,0.22)]'
                        : isCompleted
                        ? 'bg-white border-slate-900/20 text-navy-950 cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.06)]'
                        : 'bg-slate-100/70 border-slate-900/10 text-slate-400 opacity-75 cursor-not-allowed'
                    }`}
                  >
                    {/* Circular Step Badge with Black Edge & Black Shadow */}
                    <div
                      className={`w-6.5 h-6.5 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center font-bold text-xs mr-0 sm:mr-2.5 mb-1.5 sm:mb-0 shrink-0 border shadow-[0_4px_12px_rgba(0,0,0,0.12)] ${
                        isActive
                          ? 'bg-white text-navy-950 border-white'
                          : isCompleted
                          ? 'bg-navy-950 text-white border-navy-950'
                          : 'bg-slate-200 text-slate-500 border-slate-300'
                      }`}
                    >
                      {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : step.number}
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider truncate ${
                          isActive ? 'text-slate-300' : 'text-slate-500'
                        }`}
                      >
                        0{stepNum}
                      </p>
                      <p className="text-xs font-bold truncate hidden sm:block">
                        {step.title}
                      </p>
                      <p className="text-[11px] font-bold sm:hidden">{step.short}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Generating Indicator Overlay */}
          {isGenerating ? (
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-navy-950 text-white border border-slate-800 shadow-[0_8px_24px_rgba(0,0,0,0.2)] flex items-center justify-center">
                <Loader2 className="w-6 h-6 animate-spin text-acdyon-blueLight" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-navy-950">Mapping your direction...</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Matching selected goal, context, and priority against AcdyOn pathway models
                </p>
              </div>
            </div>
          ) : (
            /* Step Content Panels */
            <AnimatePresence mode="wait">
              {/* STEP 1: GOAL */}
              {activeStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.35, ease: easeOutCustom }}
                >
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-acdyon-blue">
                      Step 1 of 3 — Direction Focus
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight mt-1">
                      What primary direction are you looking to develop?
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                      Select the domain that best aligns with your target trajectory.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {Object.values(PATHWAYS).map((pathway) => {
                      const isSelected = selectedGoal === pathway.id;
                      return (
                        <button
                          key={pathway.id}
                          onClick={() => setSelectedGoal(pathway.id)}
                          className={`p-5 rounded-2xl border text-left transition-all duration-200 focus:outline-none flex items-start space-x-4 ${
                            isSelected
                              ? 'bg-white border-navy-950 shadow-[0_10px_25px_rgba(0,0,0,0.12)] ring-1 ring-navy-950/20 -translate-y-0.5'
                              : 'bg-white/90 border-slate-900/15 hover:border-slate-900/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                          }`}
                        >
                          {/* Circular Circle Icon Badge */}
                          <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-900/15 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                            {getGoalIcon(pathway.id)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <h4 className="text-base font-bold text-navy-950">
                                {pathway.title}
                              </h4>
                              {isSelected && (
                                <span className="text-xs font-bold text-navy-950 flex items-center">
                                  Selected <Check className="w-4 h-4 ml-1 stroke-[3]" />
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 font-medium">
                              {pathway.subtitle}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Step Button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => setActiveStep(2)}
                      className="px-6 py-3.5 rounded-xl font-bold text-sm bg-navy-950 text-white hover:bg-slate-800 transition-all duration-200 flex items-center shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-slate-800"
                    >
                      <span>Next: Select your context</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: CONTEXT */}
              {activeStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.35, ease: easeOutCustom }}
                >
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-acdyon-blue">
                      Step 2 of 3 — Current Context
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight mt-1">
                      What's your current context?
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                      Select your current role and operational environment.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
                    {CONTEXT_OPTIONS.map((ctx) => {
                      const isSelected = selectedContext === ctx.id;
                      return (
                        <button
                          key={ctx.id}
                          onClick={() => setSelectedContext(ctx.id)}
                          className={`p-4 rounded-2xl border text-left transition-all duration-200 focus:outline-none flex items-start space-x-3 ${
                            isSelected
                              ? 'bg-white border-navy-950 shadow-[0_10px_25px_rgba(0,0,0,0.12)] ring-1 ring-navy-950/20 -translate-y-0.5'
                              : 'bg-white/90 border-slate-900/15 hover:border-slate-900/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                          }`}
                        >
                          {/* Circular Circle Icon Badge */}
                          <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-900/15 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                            {getContextIcon(ctx.iconName)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <h4 className="text-sm font-bold text-navy-950 truncate">
                                {ctx.title}
                              </h4>
                              {isSelected && <Check className="w-4 h-4 text-navy-950 stroke-[3] shrink-0 ml-1" />}
                            </div>
                            <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                              {ctx.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setActiveStep(1)}
                      className="px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 border border-slate-900/15 hover:bg-slate-100 transition-colors flex items-center shadow-subtle"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1.5" />
                      <span>Back</span>
                    </button>

                    <button
                      onClick={() => setActiveStep(3)}
                      className="px-6 py-3.5 rounded-xl font-bold text-sm bg-navy-950 text-white hover:bg-slate-800 transition-all duration-200 flex items-center shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-slate-800"
                    >
                      <span>Next: Choose your priority</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: PRIORITY */}
              {activeStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.35, ease: easeOutCustom }}
                >
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-acdyon-blue">
                      Step 3 of 3 — Primary Priority
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight mt-1">
                      What matters most right now?
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                      Select the primary focus for your development pathway.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
                    {PRIORITY_OPTIONS.map((prio) => {
                      const isSelected = selectedPriority === prio.id;
                      return (
                        <button
                          key={prio.id}
                          onClick={() => setSelectedPriority(prio.id)}
                          className={`p-4 rounded-2xl border text-left transition-all duration-200 focus:outline-none flex items-start space-x-3 ${
                            isSelected
                              ? 'bg-white border-navy-950 shadow-[0_10px_25px_rgba(0,0,0,0.12)] ring-1 ring-navy-950/20 -translate-y-0.5'
                              : 'bg-white/90 border-slate-900/15 hover:border-slate-900/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
                          }`}
                        >
                          {/* Circular Circle Icon Badge */}
                          <div className="w-9 h-9 rounded-full bg-slate-50 border border-slate-900/15 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                            {getPriorityIcon(prio.iconName)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-0.5">
                              <h4 className="text-sm font-bold text-navy-950 truncate">
                                {prio.title}
                              </h4>
                              {isSelected && <Check className="w-4 h-4 text-navy-950 stroke-[3] shrink-0 ml-1" />}
                            </div>
                            <p className="text-xs text-slate-500 leading-snug line-clamp-2">
                              {prio.description}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setActiveStep(2)}
                      className="px-5 py-3 rounded-xl font-semibold text-sm text-slate-700 border border-slate-900/15 hover:bg-slate-100 transition-colors flex items-center shadow-subtle"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1.5" />
                      <span>Back</span>
                    </button>

                    <button
                      onClick={handleNextFromPriority}
                      className="px-7 py-3.5 rounded-xl font-bold text-sm bg-acdyon-blue text-white hover:bg-acdyon-blueHover shadow-[0_8px_24px_rgba(37,99,235,0.25)] transition-all duration-200 flex items-center"
                    >
                      <span>Generate Pathway Recommendation</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: RECOMMENDATION RESULT SCREEN */}
              {activeStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.35, ease: easeOutCustom }}
                >
                  <PathwayRecommendationCard
                    goalId={selectedGoal}
                    contextId={selectedContext}
                    priorityId={selectedPriority}
                    onBookConsultation={onBookConsultation}
                    onResetPathway={handleReset}
                    onEditStep={(stepNum) => setActiveStep(stepNum)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};
