import type { Variants } from 'framer-motion';

// Primary Executive Easing Curve
export const easeOutCustom = [0.22, 1, 0.36, 1];
export const easeInOutCustom = [0.4, 0, 0.2, 1];

// Timing Scale Constants (in seconds for Framer Motion)
export const TIMING = {
  FAST: 0.18,        // 150-220ms (buttons, icons, link hover)
  INTERACTION: 0.28, // 220-350ms (card lift, nav morph, active indicator)
  CONTENT: 0.55,     // 450-700ms (scroll reveals, step transitions)
  HERO: 0.85,        // 700-1000ms (cinematic hero reveals, product entrance)
  AMBIENT: 28,       // 8-30s (background dot grid drift, radial light loops)
};

// Reusable Scroll Reveal Fade Up
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(2px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: TIMING.CONTENT,
      ease: easeOutCustom,
    },
  },
};

// Simple Fade In
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: TIMING.INTERACTION,
      ease: easeOutCustom,
    },
  },
};

// Scale In for Modals
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: TIMING.INTERACTION,
      ease: easeOutCustom,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 12,
    transition: {
      duration: TIMING.FAST,
      ease: easeOutCustom,
    },
  },
};

// Stagger Container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

// Card Hover Physics System
export const cardHover = {
  rest: { y: 0, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: {
    y: -3,
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
    transition: { duration: TIMING.INTERACTION, ease: 'easeOut' },
  },
  tap: {
    y: -1,
    scale: 0.995,
    transition: { duration: TIMING.FAST, ease: 'easeOut' },
  },
};

// Hero Staged Entrance Timeline Sequence
export const heroTimeline = {
  navbar: { delay: 0.1, duration: 0.5 },
  logo: { delay: 0.1, duration: 0.4 },
  navInteractiveDemo: { delay: 0.18, duration: 0.4 },
  navHowItWorks: { delay: 0.24, duration: 0.4 },
  navPrograms: { delay: 0.3, duration: 0.4 },
  navAdvisory: { delay: 0.36, duration: 0.4 },
  navCta: { delay: 0.42, duration: 0.4 },
  eyebrow: { delay: 0.15, duration: 0.45 },
  headingLine1: { delay: 0.28, duration: 0.7 },
  headingLine2: { delay: 0.38, duration: 0.7 },
  headingLine3: { delay: 0.48, duration: 0.7 },
  blueHighlight: { delay: 0.65, duration: 0.55 },
  paragraph: { delay: 0.72, duration: 0.55 },
  ctaButtons: { delay: 0.82, duration: 0.5 },
  productPreview: { delay: 0.7, duration: 0.85 },
};
