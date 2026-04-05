"use client";

import { useLang } from "@/context/LangContext";
import { brainMeta } from "@/lib/data";

export function TagCloud() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <div className="bg-dbos-card border border-dbos-border rounded-lg p-4 hover:border-neural-blue/30 transition-colors">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-mono text-neural-blue uppercase tracking-wider">
          {isAr ? "أكثر الوسوم" : "Top Tags"}
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {brainMeta.topTags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-neural-blue/8 border border-neural-blue/15 rounded text-[10px] text-neural-blue/80 font-mono hover:bg-neural-blue/15 hover:border-neural-blue/30 transition-colors cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Sources breakdown */}
      <div className="mt-3 pt-2 border-t border-dbos-border flex gap-4">
        {Object.entries(brainMeta.sources).map(([source, count]) => (
          <div key={source} className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-neural-purple/60" />
            <span className="text-[9px] text-gray-500 font-mono">
              {source}: {count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
