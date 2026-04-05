"use client";

import { AgentNetwork } from "@/components/AgentNetwork";
import { useLang } from "@/context/LangContext";

export default function AgentsPage() {
  const { tr } = useLang();
  const platforms = [
    { key: "openclaw", color: "border-neural-green" },
    { key: "claude", color: "border-neural-blue" },
    { key: "mindos", color: "border-neural-cyan" },
    { key: "supabase", color: "border-neural-purple" },
  ] as const;

  return (
    <div className="min-h-screen">
      <header className="text-center pt-12 pb-4">
        <h1 className="text-4xl font-display font-light tracking-[0.12em] text-gray-200 uppercase transition-all duration-500">
          {tr.agents.title}
        </h1>
        <p className="text-[10px] text-gray-500 mt-3 tracking-[0.25em] font-mono uppercase">
          {tr.agents.subtitle}
        </p>
      </header>

      <div className="gradient-border" />

      <AgentNetwork />

      {/* Platform bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-4 sm:px-8 pb-8">
        {platforms.map((p) => {
          const platform = tr.agents.platforms[p.key];
          return (
            <div
              key={p.key}
              className={`bg-dbos-card border border-dbos-border rounded-lg p-4 border-t-2 ${p.color} text-center hover:scale-[1.02] transition-transform duration-200 cursor-default`}
            >
              <div className="text-xs font-bold tracking-[0.15em] font-display text-gray-300">
                {platform.name}
              </div>
              <div className="text-[10px] text-gray-500 mt-1 font-mono">
                {platform.desc}
              </div>
            </div>
          );
        })}
      </div>

      <footer className="text-center py-6 border-t border-dbos-border">
        <p className="text-[10px] text-gray-600 tracking-[0.12em] font-mono">
          {tr.agents.footer}
        </p>
      </footer>
    </div>
  );
}
