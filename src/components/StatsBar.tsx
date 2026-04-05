import { stats } from "@/lib/data";

export function StatsBar() {
  return (
    <div className="grid grid-cols-5 gap-4 px-8 py-6 border-b border-dbos-border">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className={`text-4xl font-bold font-display ${stat.color}`}>
            {stat.value}
          </div>
          <div className="text-[10px] tracking-[0.2em] text-gray-500 mt-1 font-mono uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
