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

export function PipelineCards() {
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const { tr } = useLang();

  return (
    <div className="grid grid-cols-5 gap-3 px-8 pb-8">
      {pipelineStages.map((stage) => {
        const stageKey = stage.id as keyof typeof tr.pipeline.stages;
        const stageTr = tr.pipeline.stages[stageKey];
        const isActive = activeStage === stage.id;

        return (
          <div
            key={stage.id}
            className={`
              bg-dbos-card border border-dbos-border rounded-lg overflow-hidden
              cursor-pointer transition-all duration-300
              ${isActive ? `${borderColorMap[stage.id]}/60 shadow-lg scale-[1.02]` : "hover:border-dbos-border-light hover:scale-[1.01]"}
            `}
            onClick={() => setActiveStage(isActive ? null : stage.id)}
          >
            {/* Color bar */}
            <div className={`h-1 ${colorMap[stage.id]}`} />

            <div className="p-4">
              <div className={`text-xs font-bold tracking-[0.15em] font-display ${textColorMap[stage.id]}`}>
                {stageTr.title}
              </div>
              <div className="text-[10px] text-gray-500 mt-1 font-mono italic">
                {stageTr.question}
              </div>

              {/* Expanded items */}
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: isActive ? "200px" : "0px", opacity: isActive ? 1 : 0 }}
              >
                <div className="mt-3 space-y-1.5 pt-2 border-t border-dbos-border">
                  {stageTr.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full ${colorMap[stage.id]} opacity-70 shrink-0`} />
                      <span className="text-[10px] text-gray-400 font-mono">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tool tag */}
              <div className={`mt-3 text-[9px] font-mono ${textColorMap[stage.id]} opacity-50`}>
                {stage.tool}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
