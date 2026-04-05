"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/context/LangContext";

const statsConfig = [
  { value: 22, colorClass: "text-neural-blue", key: "mcpTools" as const },
  { value: 44, colorClass: "text-neural-green", key: "tests" as const },
  { value: 158, colorClass: "text-neural-cyan", key: "connections" as const },
  { value: 66, colorClass: "text-neural-amber", key: "health" as const },
  { value: 10, colorClass: "text-neural-purple", key: "agents" as const },
];

function AnimatedCounter({ target, color }: { target: number; color: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1200;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className={`text-4xl font-bold font-display tabular-nums ${color} transition-all duration-300`}>
      {count}
    </div>
  );
}

export function StatsBar() {
  const { tr } = useLang();

  return (
    <div className="grid grid-cols-5 gap-4 px-8 py-6 border-b border-dbos-border">
      {statsConfig.map((stat) => (
        <div key={stat.key} className="text-center group cursor-default">
          <AnimatedCounter target={stat.value} color={stat.colorClass} />
          <div className="text-[10px] tracking-[0.2em] text-gray-500 mt-1 font-mono uppercase group-hover:text-gray-400 transition-colors">
            {tr.stats[stat.key]}
          </div>
        </div>
      ))}
    </div>
  );
}
