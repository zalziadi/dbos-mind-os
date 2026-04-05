import { AgentNetwork } from "@/components/AgentNetwork";

export default function AgentsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="text-center pt-12 pb-4">
        <h1 className="text-4xl font-display font-light tracking-[0.15em] text-gray-200 uppercase">
          Agent Network
        </h1>
        <p className="text-[10px] text-gray-500 mt-3 tracking-[0.25em] font-mono uppercase">
          10 Agents · 1 Brain · 22 MCP Tools · OpenClaw + Claude Code
        </p>
      </header>

      <div className="gradient-border" />

      {/* Agent Network Visualization */}
      <AgentNetwork />

      {/* Platform bar */}
      <div className="grid grid-cols-4 gap-3 px-8 pb-8">
        {[
          { name: "OPENCLAW", desc: "WhatsApp + Gateway", color: "border-neural-green" },
          { name: "CLAUDE CODE", desc: "Technical Execution", color: "border-neural-blue" },
          { name: "MIND OS", desc: "22 MCP Tools", color: "border-neural-cyan" },
          { name: "SUPABASE", desc: "pgvector + Goals", color: "border-neural-purple" },
        ].map((platform) => (
          <div
            key={platform.name}
            className={`bg-dbos-card border border-dbos-border rounded-lg p-4 border-t-2 ${platform.color} text-center`}
          >
            <div className="text-xs font-bold tracking-[0.15em] font-display text-gray-300">
              {platform.name}
            </div>
            <div className="text-[10px] text-gray-500 mt-1 font-mono">
              {platform.desc}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-dbos-border">
        <p className="text-[10px] text-gray-600 tracking-[0.15em] font-mono">
          ALL AGENTS CONNECTED TO ONE BRAIN · EACH KNOWS WHICH TOOLS TO USE · DBOS.md UPDATES
        </p>
      </footer>
    </div>
  );
}
