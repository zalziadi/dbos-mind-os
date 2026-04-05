# CLAUDE.md

## المشروع
**DBOS — Digital Brain Operating System** — داشبورد ويب لنظام Mind OS v3 (عقل زياد الرقمي).

## الأوامر
```bash
npm run dev          # خادم التطوير (localhost:3000)
npm run build        # بناء الإنتاج
npx tsc --noEmit     # فحص TypeScript
```

## القواعد
| # | القاعدة |
|---|--------|
| 1 | **Framework**: Next.js 15 App Router |
| 2 | **Language**: TypeScript |
| 3 | **Styling**: Tailwind CSS v4 |
| 4 | **Theme**: Neural Cartography — dark palette (#0A0E14 bg) |
| 5 | **Fonts**: JetBrains Mono (code) + Space Grotesk (display) |

## البنية
```
src/app/            الصفحات
  page.tsx          / — Dashboard (stats + neural network + pipeline)
  agents/page.tsx   /agents — Agent Network (10 agents)
  pipeline/page.tsx /pipeline — Mind OS Pipeline (5 stages)
  court/page.tsx    /court — Decision Court (3 questions)
src/components/     المكوّنات
  Sidebar.tsx       شريط التنقل الجانبي
  StatsBar.tsx      إحصائيات (22 tools, 44 tests, etc.)
  NeuralNetwork.tsx شبكة الأدوات العصبية (SVG)
  AgentNetwork.tsx  شبكة الإيجنتات (SVG)
  PipelineCards.tsx بطاقات الـ pipeline
src/lib/
  data.ts           بيانات ثابتة (stats, nodes, agents, pipeline stages)
```

## Mind OS Pipeline
Input → Observe (brain_filter) → Filter (brain_awareness) → Meaning (brain_think) → Response (brain_decide) → Wisdom (brain_process)

## الإيجنتات (10)
Musakhar, Burhan, Mustashar, Wolf, Najm, Warda, Shaheen, CJ, Sham, Samraa

## MCP Tools (22 أداة عبر ziyad-brain)
brain_process, brain_decide, brain_reason, brain_search, brain_think, brain_filter, brain_awareness, brain_path, brain_goal, brain_attention, brain_evolve, brain_connect, brain_judge, brain_ingest, brain_feedback_loop, brain_stats, brain_feedback, brain_session_start, brain_session_end, brain_registry_add, brain_registry_search, brain_registry_stats
