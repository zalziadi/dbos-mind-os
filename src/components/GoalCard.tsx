"use client";

import { brainMeta } from "@/lib/data";
import { useLang } from "@/context/LangContext";

export function GoalCard() {
  const { lang } = useLang();

  return (
    <div className="bg-dbos-card border border-dbos-border rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
          {lang === "ar" ? "الهدف النشط" : "Active Goal"}
        </span>
        <span className="text-neural-green text-xs font-mono tabular-nums">
          {brainMeta.activeGoals}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-neural-green animate-pulse shrink-0" />
        <span className="text-sm text-gray-300 font-mono">
          {lang === "ar" ? "هدف واحد نشط الآن" : "1 goal currently active"}
        </span>
      </div>

      {/* Registry breakdown */}
      <div className="grid grid-cols-4 gap-2 mt-1">
        {(Object.entries(brainMeta.registryBreakdown) as [string, number][]).map(([key, val]) => (
          <div key={key} className="text-center">
            <div className="text-lg font-display font-bold text-neural-cyan tabular-nums">{val}</div>
            <div className="text-[9px] text-gray-500 font-mono uppercase">{key}</div>
          </div>
        ))}
      </div>

      {/* Sources */}
      <div className="border-t border-dbos-border pt-2 mt-1">
        <span className="text-[9px] text-gray-600 font-mono uppercase tracking-wider">
          {lang === "ar" ? "المصادر" : "Sources"}
        </span>
        <div className="flex gap-3 mt-1.5">
          {(Object.entries(brainMeta.sources) as [string, number][]).map(([src, count]) => (
            <div key={src} className="flex items-center gap-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${count > 0 ? "bg-neural-blue" : "bg-gray-700"}`} />
              <span className="text-[10px] text-gray-400 font-mono">
                {src} <span className="text-gray-600">{count}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
