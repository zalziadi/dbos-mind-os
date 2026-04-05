"use client";

import { useState } from "react";

type Verdict = "proceed" | "pause" | "reject" | null;

interface DecisionState {
  step: number;
  input: string;
  aligned: boolean | null;
  energy: "high" | "low" | "neutral" | null;
  verdict: Verdict;
}

export default function CourtPage() {
  const [state, setState] = useState<DecisionState>({
    step: 0,
    input: "",
    aligned: null,
    energy: null,
    verdict: null,
  });

  const handleStart = () => {
    if (!state.input.trim()) return;
    setState((s) => ({ ...s, step: 1 }));
  };

  const handleAligned = (value: boolean) => {
    setState((s) => ({ ...s, aligned: value, step: 2 }));
  };

  const handleEnergy = (value: "high" | "low" | "neutral") => {
    let verdict: Verdict;
    if (state.aligned && value === "high") verdict = "proceed";
    else if (!state.aligned && value === "low") verdict = "reject";
    else verdict = "pause";
    setState((s) => ({ ...s, energy: value, verdict, step: 3 }));
  };

  const reset = () => {
    setState({ step: 0, input: "", aligned: null, energy: null, verdict: null });
  };

  const verdictConfig = {
    proceed: { label: "PROCEED", color: "text-neural-green", border: "border-neural-green", glow: "glow-green", icon: "✓" },
    pause: { label: "PAUSE & REFLECT", color: "text-neural-amber", border: "border-neural-amber", glow: "glow-amber", icon: "⏸" },
    reject: { label: "REJECT", color: "text-neural-red", border: "border-neural-red", glow: "glow-red", icon: "✕" },
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="text-center pt-12 pb-4">
        <h1 className="text-4xl font-display font-light tracking-[0.15em] text-gray-200 uppercase">
          Decision Court
        </h1>
        <p className="text-sm text-gray-500 mt-2 font-mono">
          Aligned → Energy → Verdict
        </p>
      </header>

      <div className="gradient-border mb-8" />

      <div className="max-w-xl mx-auto px-8">
        {/* Step 0: Input */}
        {state.step === 0 && (
          <div className="space-y-4">
            <label className="block text-xs text-gray-400 font-mono tracking-wider uppercase">
              What decision are you facing?
            </label>
            <textarea
              value={state.input}
              onChange={(e) => setState((s) => ({ ...s, input: e.target.value }))}
              className="w-full bg-dbos-card border border-dbos-border rounded-lg p-4 text-sm text-gray-200 font-mono resize-none h-28 focus:outline-none focus:border-neural-blue/50 transition-colors"
              placeholder="Describe the decision..."
            />
            <button
              onClick={handleStart}
              className="w-full py-3 bg-neural-blue/15 border border-neural-blue/30 rounded-lg text-neural-blue text-sm font-mono tracking-wider hover:bg-neural-blue/25 transition-colors"
            >
              BEGIN EVALUATION
            </button>
          </div>
        )}

        {/* Step 1: Aligned? */}
        {state.step === 1 && (
          <div className="space-y-6">
            <div className="bg-dbos-card border border-dbos-border rounded-lg p-4">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Decision</p>
              <p className="text-sm text-gray-300 mt-1 font-mono">{state.input}</p>
            </div>
            <p className="text-center text-lg text-gray-300 font-display">
              Is this aligned with your goals?
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAligned(true)}
                className="py-4 bg-dbos-card border border-neural-green/30 rounded-lg text-neural-green font-mono text-sm hover:bg-neural-green/10 transition-colors"
              >
                YES — ALIGNED
              </button>
              <button
                onClick={() => handleAligned(false)}
                className="py-4 bg-dbos-card border border-neural-red/30 rounded-lg text-neural-red font-mono text-sm hover:bg-neural-red/10 transition-colors"
              >
                NO — MISALIGNED
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Energy? */}
        {state.step === 2 && (
          <div className="space-y-6">
            <div className="bg-dbos-card border border-dbos-border rounded-lg p-4">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Decision</p>
              <p className="text-sm text-gray-300 mt-1 font-mono">{state.input}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className={`text-[10px] font-mono ${state.aligned ? "text-neural-green" : "text-neural-red"}`}>
                  {state.aligned ? "✓ ALIGNED" : "✕ MISALIGNED"}
                </span>
              </div>
            </div>
            <p className="text-center text-lg text-gray-300 font-display">
              What&apos;s your energy level for this?
            </p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleEnergy("high")}
                className="py-4 bg-dbos-card border border-neural-green/30 rounded-lg text-neural-green font-mono text-xs hover:bg-neural-green/10 transition-colors"
              >
                HIGH
              </button>
              <button
                onClick={() => handleEnergy("neutral")}
                className="py-4 bg-dbos-card border border-neural-amber/30 rounded-lg text-neural-amber font-mono text-xs hover:bg-neural-amber/10 transition-colors"
              >
                NEUTRAL
              </button>
              <button
                onClick={() => handleEnergy("low")}
                className="py-4 bg-dbos-card border border-neural-red/30 rounded-lg text-neural-red font-mono text-xs hover:bg-neural-red/10 transition-colors"
              >
                LOW
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Verdict */}
        {state.step === 3 && state.verdict && (
          <div className="space-y-6">
            <div className="bg-dbos-card border border-dbos-border rounded-lg p-4">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Decision</p>
              <p className="text-sm text-gray-300 mt-1 font-mono">{state.input}</p>
            </div>

            <div className={`border ${verdictConfig[state.verdict].border}/30 rounded-xl p-8 text-center ${verdictConfig[state.verdict].glow}`}>
              <div className={`text-4xl mb-3`}>
                {verdictConfig[state.verdict].icon}
              </div>
              <div className={`text-2xl font-display font-bold tracking-[0.15em] ${verdictConfig[state.verdict].color}`}>
                {verdictConfig[state.verdict].label}
              </div>
              <div className="mt-4 space-y-1 text-xs text-gray-500 font-mono">
                <p>Alignment: {state.aligned ? "✓ Yes" : "✕ No"}</p>
                <p>Energy: {state.energy}</p>
              </div>
            </div>

            <button
              onClick={reset}
              className="w-full py-3 bg-dbos-card border border-dbos-border rounded-lg text-gray-400 text-sm font-mono tracking-wider hover:border-neural-blue/30 transition-colors"
            >
              NEW DECISION
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center py-12 mt-8 border-t border-dbos-border">
        <p className="text-[10px] text-gray-600 tracking-[0.15em] font-mono">
          3 QUESTIONS · ALIGNED → ENERGY → VERDICT
        </p>
      </footer>
    </div>
  );
}
