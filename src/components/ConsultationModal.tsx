import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar, Sparkles, ArrowRight, AlertCircle } from 'lucide-react';
import { easeOutCustom } from '../utils/motion';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    exploration: 'AI & Automation',
    message: '',
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      role: '',
      exploration: 'AI & Automation',
      message: '',
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-navy-950/60 backdrop-blur-md"
        />

        {/* Modal Dialog Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 16 }}
          transition={{ duration: 0.35, ease: easeOutCustom }}
          className="relative bg-white rounded-3xl border border-slate-200 shadow-elevated w-full max-w-lg p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-navy-950 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Eyebrow */}
              <div className="flex items-center space-x-2 text-acdyon-blue mb-2">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  EXECUTIVE CONSULTATION
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold text-navy-950 tracking-tight mb-2">
                Let's find the right direction.
              </h3>

              {/* Supporting Text */}
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Share what you're exploring and use the conversation to identify a suitable next step.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Name Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 bg-red-50/50'
                        : 'border-slate-200 focus:border-acdyon-blue focus:ring-2 focus:ring-acdyon-blue/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 font-medium mt-1 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. sarah@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 bg-red-50/50'
                        : 'border-slate-200 focus:border-acdyon-blue focus:ring-2 focus:ring-acdyon-blue/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 font-medium mt-1 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Exploration Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    What are you exploring? *
                  </label>
                  <select
                    value={formData.exploration}
                    onChange={(e) => setFormData({ ...formData, exploration: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-acdyon-blue focus:ring-2 focus:ring-acdyon-blue/20 text-sm text-navy-950 focus:outline-none bg-white"
                  >
                    <option>AI & Automation</option>
                    <option>Executive Development</option>
                    <option>Corporate Training</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Current Role / Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. VP of Product / Exploring AI workflow automation..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-acdyon-blue focus:ring-2 focus:ring-acdyon-blue/20 text-sm text-navy-950 focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-acdyon-blue hover:bg-acdyon-blueHover shadow-subtle hover:shadow-glow transition-all duration-200 flex items-center justify-center"
                  >
                    <span>Request a Conversation</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 px-2">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-navy-950 mb-2">
                You're on the path.
              </h3>
              <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                Your consultation request has been captured for this demo experience.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 mb-6 flex items-center justify-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5 text-acdyon-blue" />
                <span>Exploration track: {formData.exploration}</span>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl font-bold text-xs text-navy-950 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Close & Return to Pathway AI
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
