export interface ProgramItem {
  id: string;
  category: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  recommendedFor: string;
}

export const ACDYON_PROGRAMS: ProgramItem[] = [
  {
    id: 'ai-automation-track',
    category: 'AI & Automation',
    badge: 'Applied Technical Track',
    title: 'Applied AI & Automation Program',
    description: 'Covers practical implementation of autonomous AI agents, workflow automation, LLM orchestration, and modern no-code enterprise integration.',
    highlights: [
      'Autonomous agent design patterns',
      'Production LLM workflow integration',
      'No-code process automation tools',
      'Hands-on project deliverables'
    ],
    recommendedFor: 'Engineers, product leaders, & technical managers seeking practical AI execution skills.'
  },
  {
    id: 'executive-certifications',
    category: 'Executive Certifications',
    badge: 'Outcome-Oriented',
    title: 'Executive AI & Digital Leadership',
    description: 'Compact, high-impact certification modules designed around strategic decision-making, enterprise AI adoption, and risk governance for leaders.',
    highlights: [
      'Enterprise AI risk & governance frameworks',
      'Strategic ROI assessment methodologies',
      'Executive peer cohort discussions',
      'Flexible modular scheduling'
    ],
    recommendedFor: 'Directors, VPs, and C-suite leaders responsible for digital transformation.'
  },
  {
    id: 'corporate-training',
    category: 'Corporate Training',
    badge: 'Organizational Cohorts',
    title: 'Enterprise AI Capabilities Track',
    description: 'Custom learning pathways designed specifically for organizations upskilling teams in modern AI tools, security, and automated workflows.',
    highlights: [
      'Tailored company-specific use cases',
      'Team-wide workflow standardization',
      'Security & data policy alignment',
      'Dedicated enterprise advisors'
    ],
    recommendedFor: 'Enterprise teams, department heads, and human capital leads.'
  },
  {
    id: 'doctoral-pathways',
    category: 'Doctoral Pathways',
    badge: 'Academic Recognition',
    title: 'Executive Doctoral Research Track',
    description: 'Flexible, research-driven academic pathways enabling experienced leaders to formalize senior industry expertise into recognized doctoral credentials.',
    highlights: [
      'Structured dissertation guidance',
      'Senior academic advisor matching',
      'Focus on applied industry research',
      'Global academic standing'
    ],
    recommendedFor: 'Accomplished senior executives & seasoned industry specialists.'
  }
];
