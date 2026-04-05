import { pipelineStages } from "@/lib/data";

export default function PipelinePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="text-center pt-12 pb-4">
        <h1 className="text-4xl font-display font-light tracking-[0.15em] text-gray-200 uppercase">
          Mind OS Pipeline
        </h1>
        <p className="text-sm text-gray-500 mt-2 font-mono">
          Input &gt; Observe &gt; Filter &gt; Meaning &gt; Response &gt; Wisdom
        </p>
      </header>

      <div className="gradient-border mb-8" />

      {/* Pipeline stages */}
      <div className="grid grid-cols-5 gap-4 px-8 pb-8">
        {pipelineStages.map((stage) => (
          <div
            key={stage.id}
            className={`bg-dbos-card border border-dbos-border rounded-xl overflow-hidden flex flex-col`}
          >
            {/* Color bar */}
            <div className={`h-1 ${
              stage.id === "observe" ? "bg-pipeline-observe" :
              stage.id === "filter" ? "bg-pipeline-filter" :
              stage.id === "meaning" ? "bg-pipeline-meaning" :
              stage.id === "response" ? "bg-pipeline-response" :
              "bg-pipeline-wisdom"
            }`} />

            {/* Number */}
            <div className="pt-8 pb-4 text-center">
              <span className={`text-5xl font-display font-light ${stage.color} opacity-60`}>
                {stage.number}
              </span>
            </div>

            {/* Title */}
            <div className="text-center pb-2">
              <h2 className={`text-sm font-bold tracking-[0.2em] font-display ${stage.color}`}>
                {stage.title}
              </h2>
            </div>

            {/* Question */}
            <div className="text-center pb-6 px-3">
              <p className="text-[10px] text-gray-500 font-mono italic">
                {stage.question}
              </p>
            </div>

            {/* Items */}
            <div className="flex-1 px-4 pb-4 space-y-3">
              {stage.items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div
                    className={`w-1.5 h-1.5 rounded-full ${
                      stage.id === "observe" ? "bg-pipeline-observe" :
                      stage.id === "filter" ? "bg-pipeline-filter" :
                      stage.id === "meaning" ? "bg-pipeline-meaning" :
                      stage.id === "response" ? "bg-pipeline-response" :
                      "bg-pipeline-wisdom"
                    } opacity-70`}
                  />
                  <span className="text-xs text-gray-400 font-mono">{item}</span>
                </div>
              ))}
            </div>

            {/* Tool tag */}
            <div className="px-3 pb-4">
              <div className={`text-center py-1.5 rounded border text-[10px] font-mono ${
                stage.id === "observe" ? "border-pipeline-observe/30 text-pipeline-observe/70" :
                stage.id === "filter" ? "border-pipeline-filter/30 text-pipeline-filter/70" :
                stage.id === "meaning" ? "border-pipeline-meaning/30 text-pipeline-meaning/70" :
                stage.id === "response" ? "border-pipeline-response/30 text-pipeline-response/70" :
                "border-pipeline-wisdom/30 text-pipeline-wisdom/70"
              }`}>
                {stage.tool}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-dbos-border">
        <p className="text-sm text-gray-500 italic font-display">
          &quot;I notice the connection... and choose what to believe.&quot;
        </p>
        <p className="text-[9px] text-gray-600 mt-2 tracking-[0.2em] font-mono uppercase">
          Every thought passes through 5 layers · Filtering is not disconnection · It is conscious choice
        </p>
      </footer>
    </div>
  );
}
