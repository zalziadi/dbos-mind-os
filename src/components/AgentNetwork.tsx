"use client";

import { agents } from "@/lib/data";

export function AgentNetwork() {
  const cx = 350;
  const cy = 320;
  const radius = 220;

  const agentPositions = agents.map((agent) => {
    const rad = (agent.angle * Math.PI) / 180;
    return {
      ...agent,
      x: cx + radius * Math.cos(rad),
      y: cy - radius * Math.sin(rad),
    };
  });

  return (
    <div className="flex items-center justify-center py-8">
      <svg width="700" height="640" viewBox="0 0 700 640" className="max-w-full">
        {/* Connection lines */}
        {agentPositions.map((agent) => (
          <line
            key={`line-${agent.id}`}
            x1={cx}
            y1={cy}
            x2={agent.x}
            y2={agent.y}
            stroke={agent.color}
            strokeOpacity={0.12}
            strokeWidth={1}
          />
        ))}

        {/* Highlighted connections (some agents connected to each other) */}
        {agentPositions.map((a, i) =>
          agentPositions.slice(i + 2, i + 3).map((b) => (
            <line
              key={`cross-${a.id}-${b.id}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#F5A623"
              strokeOpacity={0.08}
              strokeWidth={0.5}
            />
          ))
        )}

        {/* Center node */}
        <circle cx={cx} cy={cy} r={48} fill="#5B8DEF" fillOpacity={0.12} />
        <circle cx={cx} cy={cy} r={38} fill="#5B8DEF" fillOpacity={0.2} />
        <circle cx={cx} cy={cy} r={28} fill="#5B8DEF" fillOpacity={0.45} />
        <text x={cx} y={cy - 8} textAnchor="middle" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="600">
          MIND
        </text>
        <text x={cx} y={cy + 6} textAnchor="middle" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="600">
          OS v3
        </text>

        {/* Agent nodes */}
        {agentPositions.map((agent) => (
          <g key={agent.id} className="animate-pulse-glow" style={{ animationDelay: `${Math.random() * 3}s` }}>
            {/* Outer glow */}
            <circle cx={agent.x} cy={agent.y} r={28} fill={agent.color} fillOpacity={0.06} />
            {/* Node */}
            <circle cx={agent.x} cy={agent.y} r={20} fill={agent.color} fillOpacity={0.6} />
            <circle cx={agent.x} cy={agent.y} r={12} fill={agent.color} fillOpacity={0.85} />
            {/* Name */}
            <text
              x={agent.x}
              y={agent.y + 38}
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="11"
              fontFamily="Space Grotesk"
              fontWeight="600"
              letterSpacing="0.1em"
            >
              {agent.name}
            </text>
            {/* Tools */}
            <text
              x={agent.x}
              y={agent.y + 52}
              textAnchor="middle"
              fill={agent.color}
              fontSize="7.5"
              fontFamily="JetBrains Mono"
              opacity={0.5}
            >
              {agent.tools.join(" · ")}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
