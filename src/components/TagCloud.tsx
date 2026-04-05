"use client";

import { brainMeta } from "@/lib/data";
import { useLang } from "@/context/LangContext";

const tagColors = [
  "border-neural-blue/40 text-neural-blue",
  "border-neural-green/40 text-neural-green",
  "border-neural-amber/40 text-neural-amber",
  "border-neural-purple/40 text-neural-purple",
  "border-neural-cyan/40 text-neural-cyan",
];

export function TagCloud() {
  const { lang } = useLang();

  return (
    <div className="bg-dbos-card border border-dbos-border rounded-lg p-4 flex flex-col gap-3">
      <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
        {lang === "ar" ? "الوسوم الأكثر ظهوراً" : "Top Knowledge Tags"}
      </span>

      <div className="flex flex-wrap gap-2">
        {brainMeta.topTags.map((tag, i) => (
          <span
            key={tag}
            className={`
              px-2.5 py-1 rounded border text-[11px] font-mono
              transition-all duration-200 hover:scale-105 cursor-default
              ${tagColors[i % tagColors.length]}
            `}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-auto pt-2 border-t border-dbos-border">
        <div className="w-1.5 h-1.5 rounded-full bg-neural-green animate-pulse" />
        <span className="text-[10px] text-gray-500 font-mono">
          {lang === "ar"
            ? `${brainMeta.sources.obsidian} قطعة من Obsidian`
            : `${brainMeta.sources.obsidian} chunks from Obsidian`}
        </span>
      </div>
    </div>
  );
}
