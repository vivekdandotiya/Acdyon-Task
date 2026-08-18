export interface PathwayModule {
  title: string;
  duration: string;
  focus: string;
}

export interface PathwayData {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  targetPersona: string;
  keyCapabilities: string[];
  recommendedModules: PathwayModule[];
  suggestedProgramCategory: string;
  alignmentNote: string;
}

export const PATHWAYS: Record<string, PathwayData> = {
  'ai-automation': {
    id: 'ai-automation',
    title: 'AI & Automation',
    subtitle: 'Applied AI, Agents & Workflow Automation',
    tagline: 'Master autonomous AI agents, practical automation, and no-code/low-code workflows.',
    description: 'Designed for professionals seeking hands-on expertise in building production-ready AI workflows, autonomous agent swarms, and enterprise process automation.',
    targetPersona: 'Engineers, Product Managers, Technologists & Operations Leaders',
    keyCapabilities: ['Autonomous AI Agents', 'LLM Workflow Orchestration', 'Applied Automation', 'No-Code/Low-Code Pipelines'],
    recommendedModules: [
      { title: 'Autonomous Agent Architecture', duration: '4 Weeks', focus: 'Multi-agent coordination & tool invocation' },
      { title: 'Enterprise Process Automation', duration: '3 Weeks', focus: 'Integrating LLMs into existing IT systems' },
      { title: 'Applied RAG & Knowledge Systems', duration: '3 Weeks', focus: 'Vector databases & domain grounding' }
    ],
    suggestedProgramCategory: 'Applied AI & Automation Program',
    alignmentNote: 'Optimal alignment for professionals focused on execution & technical implementation.'
  },
  'ai-leadership': {
    id: 'ai-leadership',
    title: 'AI Leadership',
    subtitle: 'Strategic AI Decision-Making & Governance',
    tagline: 'Navigate AI strategy, enterprise risk, ethics, and organizational AI transformation.',
    description: 'Developed for senior decision-makers, executives, and leaders responsible for steering organization-wide AI adoption, capital allocation, and governance.',
    targetPersona: 'CEOs, VPs, Directors & Strategic Business Leaders',
    keyCapabilities: ['Enterprise AI Strategy', 'AI Governance & Risk', 'ROI & Capital Allocation', 'AI-Driven Innovation'],
    recommendedModules: [
      { title: 'Executive AI Strategy & Vision', duration: '3 Weeks', focus: 'Identifying high-impact enterprise AI use cases' },
      { title: 'Governance, Ethics & Compliance', duration: '3 Weeks', focus: 'Risk mitigation, safety & policy design' },
      { title: 'Leading AI-Native Organizations', duration: '4 Weeks', focus: 'Cultural alignment & change management' }
    ],
    suggestedProgramCategory: 'Executive AI & Digital Leadership',
    alignmentNote: 'Optimal alignment for executive strategy & enterprise decision-making.'
  },
  'cybersecurity': {
    id: 'cybersecurity',
    title: 'Cybersecurity & AI',
    subtitle: 'AI-Aware Defense, Resilience & SecOps',
    tagline: 'Defend modern infrastructure with AI-driven threat intelligence and robust compliance.',
    description: 'Focuses on integrating AI capabilities into security operations, threat modeling, AI vulnerability management, and executive cyber governance.',
    targetPersona: 'CISOs, Security Engineers, IT Directors & Risk Officers',
    keyCapabilities: ['AI-Enhanced SecOps', 'Threat Vector Modeling', 'AI Vulnerability Management', 'Cyber Resilience'],
    recommendedModules: [
      { title: 'AI-Driven Threat Intelligence', duration: '4 Weeks', focus: 'Automated anomaly detection & response' },
      { title: 'Securing Generative Models', duration: '3 Weeks', focus: 'Prompt injection & data leakage mitigation' },
      { title: 'Executive Risk & Compliance', duration: '3 Weeks', focus: 'NIST/ISO AI governance frameworks' }
    ],
    suggestedProgramCategory: 'Executive Certifications',
    alignmentNote: 'Optimal alignment for security leaders and technical risk specialists.'
  },
  'executive-growth': {
    id: 'executive-growth',
    title: 'Executive Growth',
    subtitle: 'Academic Recognition & Advanced Pathways',
    tagline: 'Elevate your professional trajectory with executive academic credentials and doctoral guidance.',
    description: 'Tailored for senior accomplished leaders looking to formalize their experience through executive doctorates, research, and global academic recognition.',
    targetPersona: 'Senior Executives, Board Members, & Academic Researchers',
    keyCapabilities: ['Executive Doctorate Guidance', 'Applied Industry Research', 'Global Academic Standing', 'Thought Leadership'],
    recommendedModules: [
      { title: 'Applied Research Methodology', duration: '4 Weeks', focus: 'Structuring executive dissertation proposals' },
      { title: 'Global Industry Leadership', duration: '4 Weeks', focus: 'Publishing peer-reviewed industry insights' },
      { title: 'Academic Peer Mentorship', duration: 'Ongoing', focus: '1-on-1 advisor matching & guidance' }
    ],
    suggestedProgramCategory: 'Executive Doctoral Research Track',
    alignmentNote: 'Optimal alignment for senior executives pursuing formal academic credentials.'
  }
};

export interface OptionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

// Step 2: Context Options (5 max)
export const CONTEXT_OPTIONS: OptionItem[] = [
  {
    id: 'technical-pro',
    title: 'Technical Professional',
    description: 'Engineers, developers, data specialists, and technical architects.',
    iconName: 'Code'
  },
  {
    id: 'business-ops',
    title: 'Business / Operations',
    description: 'Product managers, operations leads, and process strategists.',
    iconName: 'Workflow'
  },
  {
    id: 'leader-decision',
    title: 'Leader / Decision Maker',
    description: 'Directors, VPs, C-suite executives, and department heads.',
    iconName: 'Users'
  },
  {
    id: 'founder-entrepreneur',
    title: 'Founder / Entrepreneur',
    description: 'Startup founders, innovation leads, and venture builders.',
    iconName: 'Zap'
  },
  {
    id: 'career-transition',
    title: 'Career Transition',
    description: 'Experienced leaders shifting focus into modern AI domains.',
    iconName: 'Compass'
  }
];

// Step 3: Priority Options (5 max)
export const PRIORITY_OPTIONS: OptionItem[] = [
  {
    id: 'hands-on-capability',
    title: 'Hands-on Capability',
    description: 'Focus on building, configuring, and orchestrating practical AI workflows.',
    iconName: 'Bot'
  },
  {
    id: 'leadership-strategy',
    title: 'Leadership & Strategy',
    description: 'Focus on executive decision-making, AI governance, and capital allocation.',
    iconName: 'Brain'
  },
  {
    id: 'career-advancement',
    title: 'Career Advancement',
    description: 'Focus on expanding executive scope, promotion, and professional positioning.',
    iconName: 'TrendingUp'
  },
  {
    id: 'academic-recognition',
    title: 'Academic Recognition',
    description: 'Focus on doctoral credentials, formal research, and global standing.',
    iconName: 'GraduationCap'
  },
  {
    id: 'business-transformation',
    title: 'Business Transformation',
    description: 'Focus on scaling AI across an organization and operational efficiency.',
    iconName: 'Layers'
  }
];

export interface RecommendationResult {
  pathway: PathwayData;
  whyItFits: string;
  suggestedProgramCategory: string;
  nextActionLabel: string;
}

// Deterministic Recommendation Engine (Section 10)
export function recommendPathway(
  goalId: string,
  contextId: string,
  priorityId: string
): RecommendationResult {
  const goal = PATHWAYS[goalId] ? goalId : 'ai-automation';
  const context = CONTEXT_OPTIONS.find((c) => c.id === contextId) || CONTEXT_OPTIONS[0];
  const priority = PRIORITY_OPTIONS.find((p) => p.id === priorityId) || PRIORITY_OPTIONS[0];

  let selectedPathwayKey = goal;

  // Sensible deterministic overrides based on Priority & Goal combination
  if (priorityId === 'academic-recognition' || goalId === 'executive-growth') {
    selectedPathwayKey = 'executive-growth';
  } else if (priorityId === 'leadership-strategy' && goalId !== 'cybersecurity') {
    selectedPathwayKey = 'ai-leadership';
  } else if (goalId === 'cybersecurity') {
    selectedPathwayKey = 'cybersecurity';
  } else if (priorityId === 'hands-on-capability') {
    selectedPathwayKey = 'ai-automation';
  }

  const pathway = PATHWAYS[selectedPathwayKey] || PATHWAYS['ai-automation'];

  // Tailored rationale explaining why this specific combination fits
  const whyItFits = `Based on your goal (${pathway.title}), your background as a ${context.title}, and your priority (${priority.title}), this pathway emphasizes ${pathway.keyCapabilities.slice(0, 2).join(' and ')} to deliver practical professional progression.`;

  return {
    pathway,
    whyItFits,
    suggestedProgramCategory: pathway.suggestedProgramCategory,
    nextActionLabel: `Explore ${pathway.suggestedProgramCategory} →`,
  };
}
