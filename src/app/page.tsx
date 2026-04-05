import { StatsBar } from "@/components/StatsBar";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { PipelineCards } from "@/components/PipelineCards";

export default function DashboardPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="text-center pt-12 pb-4">
        <h1 className="text-4xl font-display font-light tracking-[0.15em] text-gray-200 uppercase">
          Digital Brain OS
        </h1>
        <p className="text-sm text-gray-500 mt-2 font-mono">
          Mind OS v3 — Cognitive Operating System
        </p>
        <p className="text-[10px] text-gray-600 mt-1 tracking-[0.3em] font-mono uppercase">
          22 MCP Tools · 44 Tests · 158 Connections · 10 Agents
        </p>
      </header>

      {/* Gradient divider */}
      <div className="gradient-border mb-0" />

      {/* Stats */}
      <StatsBar />

      {/* Neural Network */}
      <NeuralNetwork />

      {/* Pipeline Overview */}
      <PipelineCards />

      {/* Footer */}
      <footer className="text-center py-6 border-t border-dbos-border">
        <p className="text-[10px] text-gray-600 tracking-[0.2em] font-mono">
          The brain thinks, connects, decides, and evolves itself
        </p>
        <p className="text-[9px] text-gray-700 mt-1 tracking-[0.15em] font-mono">
          DBOS v3 · BUILT 2025-04-04 · ~/ziyad-brain · SUPABASE pgvector:768 · ap-northeast-1
        </p>
      </footer>
    </div>
  );
}
