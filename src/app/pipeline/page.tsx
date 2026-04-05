"use client";

import { useState } from "react";
import { pipelineStages } from "@/lib/data";
import { useLang } from "@/context/LangContext";

const colorMap: Record<string, string> = {
  observe: "bg-pipeline-observe",
  filter: "bg-pipeline-filter",
  meaning: "bg-pipeline-meaning",
  response: "bg-pipeline-response",
  wisdom: "bg-pipeline-wisdom",
};

const textColorMap: Record<string, string> = {
  observe: "text-pipeline-observe",
  filter: "text-pipeline-filter",
  meaning: "text-pipeline-meaning",
  response: "text-pipeline-response",
  wisdom: "text-pipeline-wisdom",
};

const borderColorMap: Record<string, string> = {
  observe: "border-pipeline-observe",
  filter: "border-pipeline-filter",
  meaning: "border-pipeline-meaning",
  response: "border-pipeline-response",
  wisdom: "border-pipeline-wisdom",
};

export default function PipelinePage() {
  const { tr } = useLang();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <header className="text-center pt-12 pb-4">
        <h1 className="text-4xl font-display font-light tracking-[0.12em] text-gray-200 uppercase transition-all duration-500">
          {tr.pipeline.title}
        </h1>
        <p className="text-sm text-gray-500 mt-2 font-mono transition-all duration-500">
          {tr.pipeline.subtitle}
        </p>
      </header>

      <div className="gradient-border mb-8" />

      {/* Pipeline stages */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 px-4 sm:px-8 pb-8">
        {pipelineStages.map((stage) => {
          const stageKey = stage.id as keyof typeof tr.pipeline.stages;
          const stageTr = tr.pipeline.stages[stageKey];
          const isActive = active === stage.id;

          return (
            <div
              key={stage.id}
              onClick={() => setActive(isActive ? null : stage.id)}
              className={`
                bg-dbos-card border border-dbos-border rounded-xl overflow-hidden flex flex-col
                cursor-pointer transition-all duration-300
                ${isActive ? `${borderColorMap[stage.id]}/50 shadow-xl scale-[1.03]` : "hover:border-dbos-border-light hover:scale-[1.01]"}
              `}
            >
              {/* Color bar */}
              <div className={`h-1.5 ${colorMap[stage.id]} transition-all duration-300 ${isActive ? "h-2" : ""}`} />

              {/* Number */}
              <div className={`pt-8 pb-4 text-center transition-transform duration-300 ${isActive ? "pt-6" : ""}`}>
                <span className={`text-5xl font-display font-light ${textColorMap[stage.id]} ${isActive ? "opacity-90" : "opacity-60"} transition-opacity duration-300`}>
                  {stage.number}
                </span>
              </div>

              {/* Title */}
              <div className="text-center pb-2">
                <h2 className={`text-sm font-bold tracking-[0.2em] font-display ${textColorMap[stage.id]}`}>
                  {stageTr.title}
                </h2>
              </div>

              {/* Question */}
              <div className="text-center pb-4 px-3">
                <p className="text-[10px] text-gray-500 font-mono italic">
                  {stageTr.question}
                </p>
              </div>

              {/* Items — always visible, but highlighted on active */}
              <div className="flex-1 px-4 pb-4 space-y-3">
                {stageTr.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${colorMap[stage.id]} opacity-70 shrink-0`} />
                    <span className={`text-xs font-mono transition-colors duration-200 ${isActive ? "text-gray-300" : "text-gray-500"}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tool tag */}
              <div className="px-3 pb-4">
                <div className={`
                  text-center py-1.5 rounded border text-[10px] font-mono transition-all duration-200
                  ${borderColorMap[stage.id]}/30 ${textColorMap[stage.id]}/70
                  ${isActive ? "opacity-100" : "opacity-60"}
                `}>
                  {stage.tool}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-dbos-border">
        <p className="text-sm text-gray-500 italic font-display transition-all duration-500">
          {tr.pipeline.quote}
        </p>
        <p className="text-[9px] text-gray-600 mt-2 tracking-[0.2em] font-mono uppercase">
          {tr.pipeline.footer}
        </p>
      </footer>
    </div>
  );
}
