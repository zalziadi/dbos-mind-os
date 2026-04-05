import { pipelineStages } from "@/lib/data";

export function PipelineCards() {
  return (
    <div className="grid grid-cols-5 gap-3 px-8 pb-8">
      {pipelineStages.map((stage) => (
        <div
          key={stage.id}
          className={`bg-dbos-card border border-dbos-border rounded-lg p-4 border-t-2 ${stage.borderColor}`}
        >
          <div className={`text-xs font-bold tracking-[0.15em] font-display ${stage.color}`}>
            {stage.title}
          </div>
          <div className="text-[10px] text-gray-500 mt-1 font-mono">
            {stage.question.split(" · ").join(" · ")}
          </div>
        </div>
      ))}
    </div>
  );
}
