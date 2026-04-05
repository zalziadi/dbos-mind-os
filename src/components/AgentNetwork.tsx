"use client";

import { useState } from "react";
import { agents } from "@/lib/data";

export function AgentNetwork() {
  const [activeAgent, setActiveAgent] = useState<string | null>(null);

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
      <svg
        width="700"
        height="640"
        viewBox="0 0 700 640"
        className="max-w-full"
        style={{ overflow: "visible" }}
      >
        {/* Center pulse */}
        <circle cx={cx} cy={cy} r={100} fill="#5B8DEF" fillOpacity={0.03}>
          <animate attributeName="r" values="90;115;90" dur="5s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.03;0.07;0.03" dur="5s" repeatCount="indefinite" />
        </circle>

        {/* Connection lines */}
        {agentPositions.map((agent) => {
          const isActive = activeAgent === agent.id;
          return (
            <line
              key={`line-${agent.id}`}
              x1={cx} y1={cy}
              x2={agent.x} y2={agent.y}
              stroke={agent.color}
              strokeOpacity={isActive ? 0.5 : 0.1}
              strokeWidth={isActive ? 1.5 : 1}
              style={{ transition: "stroke-opacity 0.3s, stroke-width 0.3s" }}
            />
          );
        })}

        {/* Cross connections */}
        {agentPositions.map((a, i) =>
          agentPositions.slice(i + 2, i + 3).map((b) => (
            <line
              key={`cross-${a.id}-${b.id}`}
              x1={a.x} y1={a.y}
              x2={b.x} y2={b.y}
              stroke="#F5A623"
              strokeOpacity={0.06}
              strokeWidth={0.5}
            />
          ))
        )}

        {/* Center node */}
        <circle cx={cx} cy={cy} r={50} fill="#5B8DEF" fillOpacity={0.1} />
        <circle cx={cx} cy={cy} r={40} fill="#5B8DEF" fillOpacity={0.18} />
        <circle cx={cx} cy={cy} r={30} fill="#5B8DEF" fillOpacity={0.45} />
        <text x={cx} y={cy - 8} textAnchor="middle" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">
          MIND
        </text>
        <text x={cx} y={cy + 6} textAnchor="middle" fill="white" fontSize="11" fontFamily="Space Grotesk" fontWeight="700">
          OS v3
        </text>

        {/* Agent nodes */}
        {agentPositions.map((agent) => {
          const isActive = activeAgent === agent.id;
          return (
            <g
              key={agent.id}
              onMouseEnter={() => setActiveAgent(agent.id)}
              onMouseLeave={() => setActiveAgent(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Glow ring */}
              <circle
                cx={agent.x} cy={agent.y}
                r={isActive ? 34 : 0}
                fill={agent.color}
                fillOpacity={0.12}
                style={{ transition: "r 0.25s ease" }}
              />
              {/* Node */}
              <circle
                cx={agent.x} cy={agent.y}
                r={isActive ? 24 : 20}
                fill={agent.color}
                fillOpacity={isActive ? 0.75 : 0.55}
                style={{ transition: "r 0.2s ease, fill-opacity 0.2s" }}
              />
              <circle
                cx={agent.x} cy={agent.y}
                r={isActive ? 14 : 12}
                fill={agent.color}
                fillOpacity={1}
                style={{ transition: "r 0.2s ease" }}
              />

              {/* Name */}
              <text
                x={agent.x}
                y={agent.y + 40}
                textAnchor="middle"
                fill={isActive ? "#fff" : "#e2e8f0"}
                fontSize="11"
                fontFamily="Space Grotesk"
                fontWeight={isActive ? "700" : "500"}
                letterSpacing="0.1em"
                style={{ transition: "fill 0.2s" }}
              >
                {agent.name}
              </text>
              {/* Tools */}
              <text
                x={agent.x}
                y={agent.y + 54}
                textAnchor="middle"
                fill={agent.color}
                fontSize="8"
                fontFamily="JetBrains Mono"
                opacity={isActive ? 0.8 : 0.4}
                style={{ transition: "opacity 0.2s" }}
              >
                {agent.tools.join(" · ")}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
