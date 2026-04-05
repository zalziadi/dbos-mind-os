"use client";

import { useLang } from "@/context/LangContext";

const activeGoal = {
  title: { en: "Launch Taamun to customers", ar: "إطلاق تمعّن للعملاء" },
  description: { en: "Launch Taamun digital product and reach first 100 paid customers", ar: "إطلاق منتج تمعّن الرقمي وتحقيق أول ١٠٠ عميل مدفوع" },
  priority: "critical",
  progress: 0,
  constraints: { en: ["Limited budget", "Before end of April 2026"], ar: ["ميزانية محدودة", "قبل نهاية أبريل ٢٠٢٦"] },
  criteria: { en: ["100 paid customers", "Landing page complete", "Working payment system"], ar: ["١٠٠ عميل مدفوع", "صفحة هبوط مكتملة", "نظام دفع شغّال"] },
};

export function GoalCard() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <div className="bg-dbos-card border border-dbos-border rounded-lg p-4 hover:border-neural-green/30 transition-colors">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-neural-green animate-pulse" />
        <span className="text-[10px] font-mono text-neural-green uppercase tracking-wider">
          {isAr ? "هدف نشط" : "Active Goal"} · {activeGoal.priority}
        </span>
      </div>
      <h3 className="text-sm font-display text-gray-200 font-medium">
        {activeGoal.title[lang]}
      </h3>
      <p className="text-[10px] text-gray-500 font-mono mt-1">
        {activeGoal.description[lang]}
      </p>
      {/* Progress bar */}
      <div className="mt-3 h-1 bg-dbos-border rounded-full overflow-hidden">
        <div
          className="h-full bg-neural-green/70 rounded-full transition-all duration-500"
          style={{ width: `${Math.max(activeGoal.progress, 2)}%` }}
        />
      </div>
      <div className="flex justify-between mt-1">
        <span className="text-[9px] text-gray-600 font-mono">{activeGoal.progress}%</span>
        <span className="text-[9px] text-gray-600 font-mono">
          {activeGoal.criteria[lang].length} {isAr ? "معيار" : "criteria"}
        </span>
      </div>
    </div>
  );
}
