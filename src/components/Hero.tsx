import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';
import { HeroProductPreview } from './HeroProductPreview';
import { heroTimeline, easeOutCustom } from '../utils/motion';

interface HeroProps {
  selectedPathwayId: string;
  onSelectPathway: (id: string) => void;
  onDiscoverClick: () => void;
  onExploreAcdyonClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  selectedPathwayId,
  onSelectPathway,
  onDiscoverClick,
  onExploreAcdyonClick,
}) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Soft Ambient Radial Glow (28s Ambient Loop) */}
      <motion.div
        animate={{ opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none -z-10"
      >
        <div className="absolute top-10 left-1/4 w-[420px] h-[420px] rounded-full bg-acdyon-blueLight/35 blur-3xl" />
        <div className="absolute top-20 right-1/4 w-[380px] h-[380px] rounded-full bg-acdyon-indigoLight/25 blur-3xl" />
      </motion.div>

      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Clean Editorial Hero Typography & CTAs (~50% width) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Editorial Eyebrow Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: heroTimeline.eyebrow.duration, delay: heroTimeline.eyebrow.delay, ease: easeOutCustom }}
              className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-lg bg-white border border-slate-900/15 text-xs font-extrabold uppercase tracking-widest text-navy-950 mb-6 shadow-[0_4px_14px_rgba(0,0,0,0.06)] select-none"
            >
              <span className="w-2 h-2 rounded-sm bg-navy-950" />
              <span>ACDYON PATHWAY AI</span>
            </motion.div>

            {/* Line-Based Dominant Headline Reveal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[60px] font-bold text-navy-950 tracking-tight leading-[1.04] mb-7">
              {/* Line 1 (280ms) */}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: heroTimeline.headingLine1.duration, delay: heroTimeline.headingLine1.delay, ease: easeOutCustom }}
                className="block"
              >
                Find the{' '}
                <span className="relative inline-block text-navy-950">
                  AI pathway
                  {/* Subtle 2px Dark Accent Line Underneath "AI" */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: heroTimeline.blueHighlight.duration, delay: heroTimeline.blueHighlight.delay, ease: easeOutCustom }}
                    className="absolute -bottom-0.5 left-0 w-12 h-[2.5px] bg-navy-950 rounded-full origin-left"
                  />
                </span>
              </motion.span>

              {/* Line 2 (380ms) */}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: heroTimeline.headingLine2.duration, delay: heroTimeline.headingLine2.delay, ease: easeOutCustom }}
                className="block"
              >
                built for where
              </motion.span>

              {/* Line 3 (480ms) */}
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: heroTimeline.headingLine3.duration, delay: heroTimeline.headingLine3.delay, ease: easeOutCustom }}
                className="block text-slate-700 font-semibold"
              >
                you're going.
              </motion.span>
            </h1>

            {/* Supporting Paragraph (720ms) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: heroTimeline.paragraph.duration, delay: heroTimeline.paragraph.delay, ease: easeOutCustom }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 font-normal leading-relaxed mb-9 max-w-xl"
            >
              Turn your experience, goals, and ambitions into a clearer next step with an AI-guided pathway experience.
            </motion.p>

            {/* CTA Group (820ms) - Defined Black Edge Buttons & Black Box Shadows */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: heroTimeline.ctaButtons.duration, delay: heroTimeline.ctaButtons.delay, ease: easeOutCustom }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <motion.button
                onClick={onDiscoverClick}
                whileHover={{ y: -2, boxShadow: '0 12px 30px rgba(15, 23, 42, 0.28)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-7 py-3.5 sm:py-4 rounded-xl text-base font-bold text-white bg-navy-950 hover:bg-slate-800 shadow-[0_8px_24px_rgba(0,0,0,0.2)] border border-slate-800 transition-all duration-200 focus:outline-none group overflow-hidden"
              >
                <span>Discover My Path</span>
                <ArrowRight className="w-5 h-5 ml-2.5 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={onExploreAcdyonClick}
                whileHover={{ y: -1, borderColor: '#0f172a' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-xl text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-900/20 shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all duration-200 focus:outline-none group"
              >
                <Compass className="w-4 h-4 mr-2 text-slate-600 group-hover:translate-x-0.5 transition-transform duration-200" />
                <span>Explore AcdyOn</span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Refined Hero Product UI Preview (~50% width) */}
          <motion.div
            id="hero-preview"
            className="lg:col-span-6 w-full relative"
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: heroTimeline.productPreview.duration, delay: heroTimeline.productPreview.delay, ease: easeOutCustom }}
          >
            {/* Subtle Float Loop */}
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}
            >
              <HeroProductPreview
                selectedPathwayId={selectedPathwayId}
                onSelectPathway={onSelectPathway}
                onExploreClick={(pathwayId) => {
                  onSelectPathway(pathwayId);
                  onDiscoverClick();
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
