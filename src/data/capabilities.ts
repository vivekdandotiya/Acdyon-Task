export interface CapabilityItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  tag: string;
}

export const AI_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    iconName: 'Bot',
    description: 'Design and deploy multi-agent swarms capable of executing complex multi-step reasoning and system integrations.',
    tag: 'Autonomous Capability'
  },
  {
    id: 'applied-automation',
    title: 'Automation',
    iconName: 'Workflow',
    description: 'Streamline repetitive operational tasks using event-driven LLM triggers, RAG pipelines, and API connectors.',
    tag: 'Operational Efficiency'
  },
  {
    id: 'applied-ai',
    title: 'Applied AI',
    iconName: 'Sparkles',
    description: 'Move from theoretical models to production-ready applications with fine-tuned domain knowledge and vector search.',
    tag: 'Production Execution'
  },
  {
    id: 'ai-leadership',
    title: 'AI Leadership',
    iconName: 'Brain',
    description: 'Build strategic governance, evaluate AI investments, and guide organizations through rapid technology transitions.',
    tag: 'Executive Strategy'
  }
];
