"use client";

import { StatsBar } from "@/components/StatsBar";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { PipelineCards } from "@/components/PipelineCards";
import { useLang } from "@/context/LangContext";

export default function DashboardPage() {
  const { tr } = useLang();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="text-center pt-12 pb-4">
        <h1 className="text-4xl font-display font-light tracking-[0.12em] text-gray-200 uppercase transition-all duration-500">
          {tr.dashboard.title}
        </h1>
        <p className="text-sm text-gray-500 mt-2 font-mono transition-all duration-500">
          {tr.dashboard.subtitle}
        </p>
        <p className="text-[10px] text-gray-600 mt-1 tracking-[0.25em] font-mono uppercase">
          {tr.dashboard.tagline}
        </p>
      </header>

      {/* Gradient divider */}
      <div className="gradient-border" />

      {/* Stats */}
      <StatsBar />

      {/* Neural Network */}
      <NeuralNetwork />

      {/* Pipeline Overview */}
      <PipelineCards />

      {/* Footer */}
      <footer className="text-center py-6 border-t border-dbos-border">
        <p className="text-[10px] text-gray-600 tracking-[0.2em] font-mono">
          {tr.dashboard.footer}
        </p>
        <p className="text-[9px] text-gray-700 mt-1 tracking-[0.15em] font-mono">
          {tr.dashboard.meta}
        </p>
      </footer>
    </div>
  );
}
