"use client";

import { useState } from "react";
import { coreNodes, NodeData } from "@/lib/data";
import { useLang } from "@/context/LangContext";

export function NeuralNetwork() {
  const { tr } = useLang();
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const cx = 300;
  const cy = 280;
  const radius = 180;

  const nodePositions = coreNodes.map((node) => {
    const rad = (node.angle * Math.PI) / 180;
    return {
      ...node,
      x: cx + radius * Math.cos(rad),
      y: cy - radius * Math.sin(rad),
    };
  });

  // Map node id → translation key
  const nodeLabels: Record<string, string> = {
    connections: tr.nodes.connections,
    goals: tr.nodes.goals,
    reasoning: tr.nodes.reasoning,
    decisions: tr.nodes.decisions,
    rag: tr.nodes.rag,
    loop: tr.nodes.loop,
    wisdom: tr.nodes.wisdom,
    evolve: tr.nodes.evolve,
  };

  return (
    <div className="flex items-center justify-center py-12">
      <svg
        width="600"
        height="560"
        viewBox="0 0 600 560"
        className="max-w-full"
        style={{ overflow: "visible" }}
      >
        {/* Background pulse on center */}
        <circle cx={cx} cy={cy} r={90} fill="#5B8DEF" fillOpacity={0.03}>
          <animate attributeName="r" values="80;100;80" dur="4s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.03;0.07;0.03" dur="4s" repeatCount="indefinite" />
        </circle>

        {/* Connection lines */}
        {nodePositions.map((node) => {
          const isActive = activeNode === node.id;
          return (
            <line
              key={`line-${node.id}`}
              x1={cx} y1={cy}
              x2={node.x} y2={node.y}
              stroke={node.color}
              strokeOpacity={isActive ? 0.55 : 0.1}
              strokeWidth={isActive ? 1.5 : 1}
              style={{ transition: "stroke-opacity 0.3s, stroke-width 0.3s" }}
            />
          );
        })}

        {/* Cross connections */}
        {nodePositions.map((a, i) =>
          nodePositions.slice(i + 1).map((b) => {
            const dist = Math.abs(a.angle - b.angle);
            if (dist > 60 && dist < 200) return null;
            const bothActive = activeNode === a.id || activeNode === b.id;
            return (
              <line
                key={`cross-${a.id}-${b.id}`}
                x1={a.x} y1={a.y}
                x2={b.x} y2={b.y}
                stroke="#5B8DEF"
                strokeOpacity={bothActive ? 0.15 : 0.04}
                strokeWidth={0.5}
                style={{ transition: "stroke-opacity 0.3s" }}
              />
            );
          })
        )}

        {/* Center node */}
        <circle cx={cx} cy={cy} r={44} fill="#5B8DEF" fillOpacity={0.12} />
        <circle cx={cx} cy={cy} r={34} fill="#5B8DEF" fillOpacity={0.22} />
        <circle cx={cx} cy={cy} r={26} fill="#5B8DEF" fillOpacity={0.55} />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="white" fontSize="10" fontFamily="Space Grotesk" fontWeight="700">
          MIND
        </text>
        <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize="10" fontFamily="Space Grotesk" fontWeight="700">
          OS
        </text>

        {/* Outer nodes */}
        {nodePositions.map((node) => {
          const isActive = activeNode === node.id;
          const label = nodeLabels[node.id] || node.label;
          return (
            <g
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Hover glow ring */}
              <circle
                cx={node.x} cy={node.y} r={isActive ? 26 : 0}
                fill={node.color}
                fillOpacity={0.15}
                style={{ transition: "r 0.25s ease, fill-opacity 0.25s" }}
              />
              {/* Outer ring */}
              <circle
                cx={node.x} cy={node.y} r={isActive ? 20 : 16}
                fill={node.color}
                fillOpacity={isActive ? 0.85 : 0.65}
                style={{ transition: "r 0.2s ease, fill-opacity 0.2s" }}
              />
              {/* Inner core */}
              <circle
                cx={node.x} cy={node.y} r={isActive ? 12 : 10}
                fill={node.color}
                fillOpacity={1}
                style={{ transition: "r 0.2s ease" }}
              />

              {/* Label */}
              <text
                x={node.x}
                y={node.y + 34}
                textAnchor="middle"
                fill={isActive ? "#fff" : "#e2e8f0"}
                fontSize="11"
                fontFamily="Space Grotesk"
                fontWeight={isActive ? "600" : "400"}
                style={{ transition: "fill 0.2s" }}
              >
                {label}
              </text>
              {/* Tool tag */}
              <text
                x={node.x}
                y={node.y + 48}
                textAnchor="middle"
                fill={node.color}
                fontSize="8"
                fontFamily="JetBrains Mono"
                opacity={isActive ? 0.9 : 0.5}
                style={{ transition: "opacity 0.2s" }}
              >
                {node.tool}
              </text>
            </g>
          );
        })}

        {/* Tooltip box for active node */}
        {activeNode && (() => {
          const node = nodePositions.find((n) => n.id === activeNode);
          if (!node) return null;
          const isLeft = node.x < cx;
          const tooltipX = isLeft ? node.x - 90 : node.x + 20;
          const tooltipY = node.y - 18;
          return (
            <g>
              <rect x={tooltipX} y={tooltipY} width={80} height={22} rx={4} fill="#151B27" stroke={node.color} strokeOpacity={0.4} strokeWidth={1} />
              <text x={tooltipX + 40} y={tooltipY + 14} textAnchor="middle" fill={node.color} fontSize="9" fontFamily="JetBrains Mono">
                {node.tool}
              </text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}
