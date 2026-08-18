import React from 'react';
import { AcdyonLogoIcon } from './AcdyonLogo';

interface FooterProps {
  onLogoClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onLogoClick }) => {
  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <button
              onClick={onLogoClick}
              className="flex items-center space-x-2.5 text-left group focus:outline-none mb-4"
              title="AcdyOn Pathway AI (Click 5x for Easter Egg)"
            >
              <AcdyonLogoIcon className="w-9 h-9 rounded-xl shadow-sm" idSuffix="footer" />
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-xl text-white tracking-tight">
                  AcdyOn
                </span>
                <span className="font-medium text-base text-slate-400">
                  Pathway
                </span>
              </div>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-4">
              Global Executive Education & Academic Recognition Platform. Enabling future-ready professional growth through AI-guided pathway discovery.
            </p>

            <p className="text-xs text-slate-500 font-medium">
              AcdyOn Technologies Frontend Challenge Submission
            </p>
          </div>

          {/* Navigation Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Explore */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Explore
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#product-demo" className="hover:text-white transition-colors">
                    Pathway AI Demo
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-white transition-colors">
                    AI & Technology Tracks
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-white transition-colors">
                    Doctoral Pathways
                  </a>
                </li>
                <li>
                  <a href="#programs" className="hover:text-white transition-colors">
                    Executive Certifications
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="#consultation" className="hover:text-white transition-colors">
                    About AcdyOn
                  </a>
                </li>
                <li>
                  <a href="#consultation" className="hover:text-white transition-colors">
                    Advisory Services
                  </a>
                </li>
                <li>
                  <a href="#consultation" className="hover:text-white transition-colors">
                    Contact Advisors
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
                Legal & Concept
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <span className="text-slate-500 cursor-default">Privacy Policy</span>
                </li>
                <li>
                  <span className="text-slate-500 cursor-default">Terms of Service</span>
                </li>
                <li>
                  <span className="text-slate-500 cursor-default">Challenge Prototype</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AcdyOn Technologies. Concept prototype submission for assessment.</p>
          <p className="flex items-center space-x-2">
            <span>Built with React + Vite + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
