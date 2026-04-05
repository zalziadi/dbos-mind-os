export const stats = [
  { label: "MCP TOOLS", value: 22, color: "text-neural-blue" },
  { label: "TESTS PASSING", value: 44, color: "text-neural-green" },
  { label: "CONNECTIONS", value: 158, color: "text-neural-cyan" },
  { label: "HEALTH SCORE", value: 66, color: "text-neural-amber" },
  { label: "AI AGENTS", value: 10, color: "text-neural-purple" },
];

export type NodeData = {
  id: string;
  label: string;
  tool: string;
  color: string;
  glowClass: string;
  angle: number; // degrees around the circle
};

export const coreNodes: NodeData[] = [
  { id: "connections", label: "Connections", tool: "brain_connect", color: "#F5A623", glowClass: "glow-amber", angle: 90 },
  { id: "goals", label: "Goals", tool: "brain_goal", color: "#4ADE80", glowClass: "glow-green", angle: 150 },
  { id: "reasoning", label: "Reasoning", tool: "brain_reason", color: "#5B8DEF", glowClass: "glow-blue", angle: 30 },
  { id: "decisions", label: "Decisions", tool: "brain_decide", color: "#F5A623", glowClass: "glow-amber", angle: 180 },
  { id: "rag", label: "RAG Pipeline", tool: "brain_search", color: "#8B6CEF", glowClass: "glow-purple", angle: 0 },
  { id: "loop", label: "Loop Guard", tool: "brain_awareness", color: "#EF5B5B", glowClass: "glow-red", angle: 210 },
  { id: "wisdom", label: "Wisdom", tool: "brain_process", color: "#C4B5FD", glowClass: "glow-lavender", angle: 330 },
  { id: "evolve", label: "Self-Improve", tool: "brain_evolve", color: "#5BE0EF", glowClass: "glow-cyan", angle: 270 },
];

export type AgentData = {
  id: string;
  name: string;
  tools: string[];
  color: string;
  glowClass: string;
  angle: number;
};

export const agents: AgentData[] = [
  { id: "musakhar", name: "MUSAKHAR", tools: ["process", "awareness", "attention"], color: "#5B8DEF", glowClass: "glow-blue", angle: 90 },
  { id: "burhan", name: "BURHAN", tools: ["decide", "goal", "awareness"], color: "#F5A623", glowClass: "glow-amber", angle: 135 },
  { id: "mustashar", name: "MUSTASHAR", tools: ["filter", "attention", "decide"], color: "#C4B5FD", glowClass: "glow-lavender", angle: 45 },
  { id: "wolf", name: "WOLF", tools: ["think", "search", "connect"], color: "#4ADE80", glowClass: "glow-green", angle: 180 },
  { id: "najm", name: "NAJM", tools: ["search", "ingest"], color: "#8B6CEF", glowClass: "glow-purple", angle: 0 },
  { id: "warda", name: "WARDA", tools: ["process", "awareness", "search"], color: "#E879A8", glowClass: "glow-pink", angle: 225 },
  { id: "shaheen", name: "SHAHEEN", tools: ["filter", "decide", "goal"], color: "#A3E635", glowClass: "glow-lime", angle: 345 },
  { id: "cj", name: "CJ", tools: ["evolve", "judge", "connect"], color: "#5BE0EF", glowClass: "glow-cyan", angle: 255 },
  { id: "sham", name: "SHAM", tools: ["connect", "path", "attention"], color: "#F5A623", glowClass: "glow-amber", angle: 315 },
  { id: "samraa", name: "SAMRAA", tools: ["search", "feedback", "ingest"], color: "#EF5B5B", glowClass: "glow-red", angle: 270 },
];

export type PipelineStage = {
  id: string;
  number: number;
  title: string;
  question: string;
  color: string;
  borderColor: string;
  tool: string;
  items: string[];
};

export const pipelineStages: PipelineStage[] = [
  {
    id: "observe",
    number: 1,
    title: "OBSERVE",
    question: '"What am I seeing?"',
    color: "text-pipeline-observe",
    borderColor: "border-pipeline-observe",
    tool: "brain_filter",
    items: ["Emotional detection", "Reactivity check", "Fight-or-flight scan", "Intensity mapping"],
  },
  {
    id: "filter",
    number: 2,
    title: "FILTER",
    question: '"Is this important?"',
    color: "text-pipeline-filter",
    borderColor: "border-pipeline-filter",
    tool: "brain_awareness",
    items: ["7 cognitive distortions", "Projection detection", "Loop guard scan", "Noise vs signal"],
  },
  {
    id: "meaning",
    number: 3,
    title: "MEANING",
    question: '"What does this mean for me?"',
    color: "text-pipeline-meaning",
    borderColor: "border-pipeline-meaning",
    tool: "brain_think",
    items: ["Goal alignment check", "Thought simulation", "Network activation", "Pattern discovery"],
  },
  {
    id: "response",
    number: 4,
    title: "RESPONSE",
    question: '"What do I do now?"',
    color: "text-pipeline-response",
    borderColor: "border-pipeline-response",
    tool: "brain_decide",
    items: ["Recommendation", "Coaching question", "Suggested action", "Confidence score"],
  },
  {
    id: "wisdom",
    number: 5,
    title: "WISDOM",
    question: '"Science + belief?"',
    color: "text-pipeline-wisdom",
    borderColor: "border-pipeline-wisdom",
    tool: "brain_process",
    items: ["Scientific insight", "Spiritual insight", "The bridge", "Daily practice"],
  },
];
