"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/context/LangContext";

type Verdict = "proceed" | "pause" | "reject" | null;

interface DecisionState {
  step: number;
  input: string;
  aligned: boolean | null;
  energy: "high" | "low" | "neutral" | null;
  verdict: Verdict;
}

interface SavedDecision {
  input: string;
  aligned: boolean;
  energy: string;
  verdict: string;
  timestamp: string;
}

function loadHistory(): SavedDecision[] {
  try {
    const raw = localStorage.getItem("dbos-court-history");
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveDecision(d: SavedDecision) {
  const history = loadHistory();
  history.unshift(d);
  localStorage.setItem("dbos-court-history", JSON.stringify(history.slice(0, 20)));
}

export default function CourtPage() {
  const { tr, isRTL, lang } = useLang();
  const [state, setState] = useState<DecisionState>({
    step: 0,
    input: "",
    aligned: null,
    energy: null,
    verdict: null,
  });
  const [history, setHistory] = useState<SavedDecision[]>([]);

  useEffect(() => {
    setHistory(loadHistory());
  }, []);

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
    // Save to localStorage
    const decision: SavedDecision = {
      input: state.input,
      aligned: state.aligned!,
      energy: value,
      verdict: verdict!,
      timestamp: new Date().toISOString(),
    };
    saveDecision(decision);
    setHistory(loadHistory());
  };

  const reset = () => {
    setState({ step: 0, input: "", aligned: null, energy: null, verdict: null });
  };

  const verdictConfig = {
    proceed: {
      label: tr.court.verdicts.proceed,
      color: "text-neural-green",
      border: "border-neural-green",
      glow: "glow-green",
      icon: "✓",
    },
    pause: {
      label: tr.court.verdicts.pause,
      color: "text-neural-amber",
      border: "border-neural-amber",
      glow: "glow-amber",
      icon: "⏸",
    },
    reject: {
      label: tr.court.verdicts.reject,
      color: "text-neural-red",
      border: "border-neural-red",
      glow: "glow-red",
      icon: "✕",
    },
  };

  // Progress steps indicator
  const steps = [
    { n: 0, icon: "✎" },
    { n: 1, icon: "◎" },
    { n: 2, icon: "⚡" },
    { n: 3, icon: "⚖" },
  ];

  return (
    <div className="min-h-screen">
      <header className="text-center pt-12 pb-4">
        <h1 className="text-4xl font-display font-light tracking-[0.12em] text-gray-200 uppercase transition-all duration-500">
          {tr.court.title}
        </h1>
        <p className="text-sm text-gray-500 mt-2 font-mono transition-all duration-500">
          {tr.court.subtitle}
        </p>
      </header>

      <div className="gradient-border mb-8" />

      {/* Step progress */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {steps.map((s, i) => (
          <div key={s.n} className="flex items-center gap-3">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm
              transition-all duration-300 border
              ${state.step === s.n
                ? "bg-neural-blue/20 border-neural-blue text-neural-blue scale-110 glow-blue"
                : state.step > s.n
                  ? "bg-neural-green/15 border-neural-green/40 text-neural-green"
                  : "bg-dbos-card border-dbos-border text-gray-600"
              }
            `}>
              {state.step > s.n ? "✓" : s.icon}
            </div>
            {i < steps.length - 1 && (
              <div className={`w-8 h-px transition-colors duration-500 ${state.step > s.n ? "bg-neural-green/40" : "bg-dbos-border"}`} />
            )}
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto px-8">
        {/* Step 0: Input */}
        <div
          className="transition-all duration-400"
          style={{ display: state.step === 0 ? "block" : "none" }}
        >
          <div className="space-y-4">
            <label className={`block text-xs text-gray-400 font-mono tracking-wider uppercase ${isRTL ? "text-right" : ""}`}>
              {tr.court.inputLabel}
            </label>
            <textarea
              value={state.input}
              onChange={(e) => setState((s) => ({ ...s, input: e.target.value }))}
              dir={isRTL ? "rtl" : "ltr"}
              className="w-full bg-dbos-card border border-dbos-border rounded-lg p-4 text-sm text-gray-200 font-mono resize-none h-28 focus:outline-none focus:border-neural-blue/50 transition-colors"
              placeholder={tr.court.inputPlaceholder}
            />
            <button
              onClick={handleStart}
              disabled={!state.input.trim()}
              className="w-full py-3 bg-neural-blue/15 border border-neural-blue/30 rounded-lg text-neural-blue text-sm font-mono tracking-wider hover:bg-neural-blue/25 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
            >
              {tr.court.beginBtn}
            </button>
          </div>
        </div>

        {/* Step 1: Aligned? */}
        {state.step === 1 && (
          <div className="space-y-6">
            <div className="bg-dbos-card border border-dbos-border rounded-lg p-4">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{tr.court.labels.decision}</p>
              <p className={`text-sm text-gray-300 mt-1 font-mono ${isRTL ? "text-right" : ""}`}>{state.input}</p>
            </div>
            <p className={`text-center text-lg text-gray-300 font-display`}>
              {tr.court.alignedQuestion}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAligned(true)}
                className="py-4 bg-dbos-card border border-neural-green/30 rounded-lg text-neural-green font-mono text-sm hover:bg-neural-green/10 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
              >
                {tr.court.yesAligned}
              </button>
              <button
                onClick={() => handleAligned(false)}
                className="py-4 bg-dbos-card border border-neural-red/30 rounded-lg text-neural-red font-mono text-sm hover:bg-neural-red/10 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
              >
                {tr.court.noAligned}
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Energy? */}
        {state.step === 2 && (
          <div className="space-y-6">
            <div className="bg-dbos-card border border-dbos-border rounded-lg p-4">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{tr.court.labels.decision}</p>
              <p className={`text-sm text-gray-300 mt-1 font-mono ${isRTL ? "text-right" : ""}`}>{state.input}</p>
              <div className="mt-2">
                <span className={`text-[10px] font-mono ${state.aligned ? "text-neural-green" : "text-neural-red"}`}>
                  {state.aligned ? tr.court.labels.aligned : tr.court.labels.misaligned}
                </span>
              </div>
            </div>
            <p className="text-center text-lg text-gray-300 font-display">
              {tr.court.energyQuestion}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: "high" as const, label: tr.court.energyHigh, cls: "border-neural-green/30 text-neural-green hover:bg-neural-green/10" },
                { val: "neutral" as const, label: tr.court.energyNeutral, cls: "border-neural-amber/30 text-neural-amber hover:bg-neural-amber/10" },
                { val: "low" as const, label: tr.court.energyLow, cls: "border-neural-red/30 text-neural-red hover:bg-neural-red/10" },
              ].map((btn) => (
                <button
                  key={btn.val}
                  onClick={() => handleEnergy(btn.val)}
                  className={`py-4 bg-dbos-card border ${btn.cls} rounded-lg font-mono text-xs hover:scale-[1.03] active:scale-[0.98] transition-all duration-200`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Verdict */}
        {state.step === 3 && state.verdict && (
          <div className="space-y-6">
            <div className="bg-dbos-card border border-dbos-border rounded-lg p-4">
              <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{tr.court.labels.decision}</p>
              <p className={`text-sm text-gray-300 mt-1 font-mono ${isRTL ? "text-right" : ""}`}>{state.input}</p>
            </div>

            <div className={`border ${verdictConfig[state.verdict].border}/30 rounded-xl p-8 text-center ${verdictConfig[state.verdict].glow} animate-pulse-glow`}>
              <div className="text-4xl mb-3">{verdictConfig[state.verdict].icon}</div>
              <div className={`text-2xl font-display font-bold tracking-[0.15em] ${verdictConfig[state.verdict].color}`}>
                {verdictConfig[state.verdict].label}
              </div>
              <div className="mt-4 space-y-1 text-xs text-gray-500 font-mono">
                <p>{tr.court.labels.alignment}: {state.aligned ? tr.court.labels.yes : tr.court.labels.no}</p>
                <p>{tr.court.labels.energy}: {state.energy}</p>
              </div>
            </div>

            <button
              onClick={reset}
              className="w-full py-3 bg-dbos-card border border-dbos-border rounded-lg text-gray-400 text-sm font-mono tracking-wider hover:border-neural-blue/30 hover:text-gray-300 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            >
              {tr.court.newDecision}
            </button>
          </div>
        )}
      </div>

      {/* Decision History */}
      {history.length > 0 && (
        <div className="max-w-xl mx-auto px-4 sm:px-8 mt-8">
          <h3 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
            {lang === "ar" ? "سجل القرارات" : "Decision History"}
          </h3>
          <div className="space-y-2">
            {history.slice(0, 5).map((d, i) => (
              <div key={i} className="bg-dbos-card border border-dbos-border rounded-lg p-3 flex items-center justify-between gap-3">
                <p className={`text-[11px] text-gray-400 font-mono truncate flex-1 ${isRTL ? "text-right" : ""}`}>
                  {d.input}
                </p>
                <span className={`text-[10px] font-mono shrink-0 px-2 py-0.5 rounded border ${
                  d.verdict === "proceed" ? "text-neural-green border-neural-green/30" :
                  d.verdict === "reject" ? "text-neural-red border-neural-red/30" :
                  "text-neural-amber border-neural-amber/30"
                }`}>
                  {d.verdict}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <footer className="text-center py-12 mt-8 border-t border-dbos-border">
        <p className="text-[10px] text-gray-600 tracking-[0.15em] font-mono">
          {tr.court.footer}
        </p>
      </footer>
    </div>
  );
}
