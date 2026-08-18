import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { easeOutCustom, heroTimeline } from '../utils/motion';
import { AcdyonLogoIcon } from './AcdyonLogo';

interface NavbarProps {
  onOpenConsultation: () => void;
  onLogoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('product-demo');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { id: 'product-demo', label: 'Interactive Demo', href: '#product-demo' },
    { id: 'how-it-works', label: 'How It Works', href: '#how-it-works' },
    { id: 'programs', label: 'AcdyOn Programs', href: '#programs' },
    { id: 'consultation', label: 'Advisory', href: '#consultation' },
  ];

  // Scroll Morph & Active Section Observer
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard accessibility for mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleLogoPress = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onLogoClick();
  };

  const getNavDelay = (id: string, idx: number) => {
    if (id === 'product-demo') return heroTimeline.navInteractiveDemo?.delay ?? 0.18;
    if (id === 'how-it-works') return heroTimeline.navHowItWorks?.delay ?? 0.24;
    if (id === 'programs') return heroTimeline.navPrograms?.delay ?? 0.3;
    if (id === 'consultation') return heroTimeline.navAdvisory?.delay ?? 0.36;
    return 0.18 + idx * 0.06;
  };

  return (
    <>
      {/* Signature Floating Navigation Bar */}
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: heroTimeline.navbar?.duration ?? 0.5, delay: heroTimeline.navbar?.delay ?? 0.1, ease: easeOutCustom }}
        className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 transition-all duration-300 pt-4 md:pt-5 pointer-events-none"
      >
        <div className="max-w-[1240px] mx-auto pointer-events-auto">
          <motion.div
            animate={{
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.88)' : 'rgba(250, 249, 245, 0)',
              backdropFilter: isScrolled ? 'blur(18px)' : 'blur(0px)',
              borderColor: isScrolled ? 'rgba(226, 232, 240, 0.85)' : 'rgba(226, 232, 240, 0)',
              boxShadow: isScrolled ? '0 8px 30px rgba(0, 0, 0, 0.05)' : '0 0 0 rgba(0,0,0,0)',
              paddingTop: isScrolled ? '0.65rem' : '0.85rem',
              paddingBottom: isScrolled ? '0.65rem' : '0.85rem',
            }}
            transition={{ duration: 0.35, ease: easeOutCustom }}
            className={`rounded-2xl border px-5 md:px-7 flex items-center justify-between transition-all duration-300 ${
              isScrolled ? 'glass-nav' : ''
            }`}
          >
            {/* LEFT: Logo Matching Image (Executive Monogram + AcdyOn Pathway) */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: heroTimeline.logo?.duration ?? 0.4, delay: heroTimeline.logo?.delay ?? 0.1, ease: easeOutCustom }}
              onClick={handleLogoPress}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center space-x-2.5 cursor-pointer group select-none"
            >
              <AcdyonLogoIcon className="w-8 h-8 rounded-xl shadow-subtle" idSuffix="nav" />
              <div className="flex items-center space-x-1.5">
                <span className="text-lg font-bold tracking-tight text-navy-950 group-hover:text-acdyon-blue transition-colors duration-200">
                  AcdyOn
                </span>
                <span className="text-base font-semibold text-slate-600 group-hover:text-navy-950 transition-colors duration-200">
                  Pathway
                </span>
              </div>
            </motion.div>

            {/* CENTER: Navigation Links with Shared Animated Active Indicator */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 relative">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                const isHovered = hoveredLink === link.id;
                const delay = getNavDelay(link.id, idx);

                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay, ease: easeOutCustom }}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg ${
                      isActive ? 'text-navy-950' : 'text-slate-600 hover:text-navy-950'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>

                    {/* Shared Active Indicator Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-acdyon-blue rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}

                    {/* Hover Expansion Background Tint */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="hoverNavBg"
                        className="absolute inset-0 bg-slate-100/70 rounded-lg -z-0"
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* RIGHT: Book Consultation CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: heroTimeline.navCta?.delay ?? 0.42, ease: easeOutCustom }}
              className="hidden md:flex items-center space-x-4"
            >
              <motion.button
                onClick={onOpenConsultation}
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12)' }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-4.5 py-2 rounded-xl text-xs font-bold text-navy-950 bg-slate-100 hover:bg-navy-950 hover:text-white border border-slate-200/90 transition-all duration-200 shadow-subtle group focus:outline-none"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-slate-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </motion.button>
            </motion.div>

            {/* Mobile Hamburger Toggle Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-navy-950 hover:bg-slate-100 transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-navy-950/40 backdrop-blur-md md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: easeOutCustom }}
              className="pt-24 pb-8 px-6 bg-white border-b border-slate-200 shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.07, duration: 0.3, ease: easeOutCustom }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-semibold text-navy-950 py-2 border-b border-slate-100 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </motion.a>
                ))}
                <div className="pt-2">
                  <motion.button
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full inline-flex items-center justify-center px-5 py-3.5 rounded-xl text-sm font-bold text-white bg-acdyon-blue hover:bg-acdyon-blueHover shadow-card transition-colors"
                  >
                    <span>Book Advisory Consultation</span>
                    <ArrowUpRight className="w-4 h-4 ml-1.5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
