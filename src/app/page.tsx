"use client";

import { StatsBar } from "@/components/StatsBar";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { PipelineCards } from "@/components/PipelineCards";
import { GoalCard } from "@/components/GoalCard";
import { TagCloud } from "@/components/TagCloud";
import { useLang } from "@/context/LangContext";

export default function DashboardPage() {
  const { tr } = useLang();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="text-center pt-8 sm:pt-12 pb-4 px-4">
        <h1 className="text-2xl sm:text-4xl font-display font-light tracking-[0.12em] text-gray-200 uppercase transition-all duration-500">
          {tr.dashboard.title}
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-2 font-mono transition-all duration-500">
          {tr.dashboard.subtitle}
        </p>
        <p className="text-[9px] sm:text-[10px] text-gray-600 mt-1 tracking-[0.15em] sm:tracking-[0.25em] font-mono uppercase">
          {tr.dashboard.tagline}
        </p>
      </header>

      <div className="gradient-border" />

      {/* Stats */}
      <StatsBar />

      {/* Goal + Tags row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-8 py-4">
        <GoalCard />
        <TagCloud />
      </div>

      {/* Neural Network */}
      <NeuralNetwork />

      {/* Pipeline Overview */}
      <PipelineCards />

      {/* Footer */}
      <footer className="text-center py-6 border-t border-dbos-border px-4">
        <p className="text-[10px] text-gray-600 tracking-[0.2em] font-mono">
          {tr.dashboard.footer}
        </p>
        <p className="text-[9px] text-gray-700 mt-1 tracking-[0.12em] font-mono">
          {tr.dashboard.meta}
        </p>
      </footer>
    </div>
  );
}
