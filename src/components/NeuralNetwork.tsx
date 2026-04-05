"use client";

import { coreNodes } from "@/lib/data";

export function NeuralNetwork() {
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

  return (
    <div className="flex items-center justify-center py-12">
      <svg width="600" height="560" viewBox="0 0 600 560" className="max-w-full">
        {/* Connection lines */}
        {nodePositions.map((node) => (
          <line
            key={`line-${node.id}`}
            x1={cx}
            y1={cy}
            x2={node.x}
            y2={node.y}
            stroke={node.color}
            strokeOpacity={0.12}
            strokeWidth={1}
          />
        ))}

        {/* Cross connections */}
        {nodePositions.map((a, i) =>
          nodePositions.slice(i + 1).map((b) => {
            const dist = Math.abs(a.angle - b.angle);
            if (dist > 60 && dist < 200) return null;
            return (
              <line
                key={`cross-${a.id}-${b.id}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="#5B8DEF"
                strokeOpacity={0.06}
                strokeWidth={0.5}
              />
            );
          })
        )}

        {/* Center node */}
        <circle cx={cx} cy={cy} r={40} fill="#5B8DEF" fillOpacity={0.15} />
        <circle cx={cx} cy={cy} r={32} fill="#5B8DEF" fillOpacity={0.25} />
        <circle cx={cx} cy={cy} r={24} fill="#5B8DEF" fillOpacity={0.5} />
        <text x={cx} y={cy - 6} textAnchor="middle" fill="white" fontSize="10" fontFamily="Space Grotesk" fontWeight="600">
          MIND
        </text>
        <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize="10" fontFamily="Space Grotesk" fontWeight="600">
          OS
        </text>

        {/* Nodes */}
        {nodePositions.map((node) => (
          <g key={node.id} className="animate-pulse-glow" style={{ animationDelay: `${Math.random() * 2}s` }}>
            {/* Outer glow */}
            <circle cx={node.x} cy={node.y} r={22} fill={node.color} fillOpacity={0.08} />
            {/* Node */}
            <circle cx={node.x} cy={node.y} r={16} fill={node.color} fillOpacity={0.7} />
            <circle cx={node.x} cy={node.y} r={10} fill={node.color} fillOpacity={0.9} />
            {/* Label */}
            <text
              x={node.x}
              y={node.y + 32}
              textAnchor="middle"
              fill="#e2e8f0"
              fontSize="11"
              fontFamily="Space Grotesk"
              fontWeight="500"
            >
              {node.label}
            </text>
            {/* Tool name */}
            <text
              x={node.x}
              y={node.y + 45}
              textAnchor="middle"
              fill={node.color}
              fontSize="8"
              fontFamily="JetBrains Mono"
              opacity={0.6}
            >
              {node.tool}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
