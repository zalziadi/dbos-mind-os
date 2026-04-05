export type Lang = "en" | "ar";

export const t = {
  en: {
    // Sidebar
    nav: {
      dashboard: "Dashboard",
      agents: "Agents",
      pipeline: "Pipeline",
      court: "Court",
    },
    // Dashboard
    dashboard: {
      title: "Digital Brain OS",
      subtitle: "Mind OS v3 — Cognitive Operating System",
      tagline: "22 MCP Tools · 1,124 Chunks · 30 Registry · 88 Health",
      footer: "The brain thinks, connects, decides, and evolves itself",
      meta: "DBOS v3 · BUILT 2025-04-04 · ~/ziyad-brain · SUPABASE pgvector:768 · ap-northeast-1",
    },
    // Stats
    stats: {
      mcpTools: "MCP Tools",
      chunks: "Knowledge Chunks",
      registry: "Registry",
      health: "Health Score",
      interactions: "Interactions",
    },
    // Nodes
    nodes: {
      connections: "Connections",
      goals: "Goals",
      reasoning: "Reasoning",
      decisions: "Decisions",
      rag: "RAG Pipeline",
      loop: "Loop Guard",
      wisdom: "Wisdom",
      evolve: "Self-Improve",
      center: "MIND\nOS",
    },
    // Agents page
    agents: {
      title: "Agent Network",
      subtitle: "10 Agents · 1 Brain · 22 MCP Tools · OpenClaw + Claude Code",
      footer: "ALL AGENTS CONNECTED TO ONE BRAIN · EACH KNOWS WHICH TOOLS TO USE · DBOS.md UPDATES",
      platforms: {
        openclaw: { name: "OPENCLAW", desc: "WhatsApp + Gateway" },
        claude: { name: "CLAUDE CODE", desc: "Technical Execution" },
        mindos: { name: "MIND OS", desc: "22 MCP Tools" },
        supabase: { name: "SUPABASE", desc: "pgvector + Goals" },
      },
    },
    // Pipeline page
    pipeline: {
      title: "Mind OS Pipeline",
      subtitle: "Input > Observe > Filter > Meaning > Response > Wisdom",
      quote: '"I notice the connection... and choose what to believe."',
      footer: "EVERY THOUGHT PASSES THROUGH 5 LAYERS · FILTERING IS NOT DISCONNECTION · IT IS CONSCIOUS CHOICE",
      stages: {
        observe: {
          title: "OBSERVE",
          question: '"What am I seeing?"',
          items: ["Emotional detection", "Reactivity check", "Fight-or-flight scan", "Intensity mapping"],
        },
        filter: {
          title: "FILTER",
          question: '"Is this important?"',
          items: ["7 cognitive distortions", "Projection detection", "Loop guard scan", "Noise vs signal"],
        },
        meaning: {
          title: "MEANING",
          question: '"What does this mean for me?"',
          items: ["Goal alignment check", "Thought simulation", "Network activation", "Pattern discovery"],
        },
        response: {
          title: "RESPONSE",
          question: '"What do I do now?"',
          items: ["Recommendation", "Coaching question", "Suggested action", "Confidence score"],
        },
        wisdom: {
          title: "WISDOM",
          question: '"Science + belief?"',
          items: ["Scientific insight", "Spiritual insight", "The bridge", "Daily practice"],
        },
      },
    },
    // Court page
    court: {
      title: "Decision Court",
      subtitle: "Aligned → Energy → Verdict",
      inputLabel: "What decision are you facing?",
      inputPlaceholder: "Describe the decision...",
      beginBtn: "BEGIN EVALUATION",
      alignedQuestion: "Is this aligned with your goals?",
      yesAligned: "YES — ALIGNED",
      noAligned: "NO — MISALIGNED",
      energyQuestion: "What's your energy level for this?",
      energyHigh: "HIGH",
      energyNeutral: "NEUTRAL",
      energyLow: "LOW",
      newDecision: "NEW DECISION",
      verdicts: {
        proceed: "PROCEED",
        pause: "PAUSE & REFLECT",
        reject: "REJECT",
      },
      labels: {
        decision: "Decision",
        alignment: "Alignment",
        energy: "Energy",
        yes: "✓ Yes",
        no: "✕ No",
        aligned: "✓ ALIGNED",
        misaligned: "✕ MISALIGNED",
      },
      footer: "3 QUESTIONS · ALIGNED → ENERGY → VERDICT",
    },
    langToggle: "العربية",
  },

  ar: {
    // Sidebar
    nav: {
      dashboard: "الداشبورد",
      agents: "الإيجنتات",
      pipeline: "الـ Pipeline",
      court: "المحكمة",
    },
    // Dashboard
    dashboard: {
      title: "نظام تشغيل العقل الرقمي",
      subtitle: "Mind OS v3 — نظام تشغيل معرفي",
      tagline: "٢٢ أداة MCP · ١٬١٢٤ قطعة معرفة · ٣٠ سجل · ٨٨ صحة",
      footer: "العقل يفكّر، يربط، يقرر، ويطوّر نفسه",
      meta: "DBOS v3 · مبني ٢٠٢٥-٠٤-٠٤ · ~/ziyad-brain · Supabase pgvector:768",
    },
    // Stats
    stats: {
      mcpTools: "أداة MCP",
      chunks: "قطعة معرفة",
      registry: "سجل",
      health: "نقطة صحة",
      interactions: "تفاعل",
    },
    // Nodes
    nodes: {
      connections: "الارتباطات",
      goals: "الأهداف",
      reasoning: "التفكير",
      decisions: "القرارات",
      rag: "مسار البحث",
      loop: "حارس اللوب",
      wisdom: "الحكمة",
      evolve: "التطور الذاتي",
      center: "العقل\nالرقمي",
    },
    // Agents page
    agents: {
      title: "شبكة الإيجنتات",
      subtitle: "١٠ إيجنتات · عقل واحد · ٢٢ أداة MCP · OpenClaw + Claude Code",
      footer: "كل الإيجنتات متصلة بعقل واحد · كل منهم يعرف أدواته · DBOS.md يُحدّث الكل",
      platforms: {
        openclaw: { name: "OPENCLAW", desc: "واتساب + البوابة" },
        claude: { name: "CLAUDE CODE", desc: "التنفيذ التقني" },
        mindos: { name: "MIND OS", desc: "٢٢ أداة MCP" },
        supabase: { name: "SUPABASE", desc: "pgvector + الأهداف" },
      },
    },
    // Pipeline page
    pipeline: {
      title: "مسار Mind OS",
      subtitle: "مدخل > رصد > فلتر > معنى > استجابة > حكمة",
      quote: '"ألاحظ الارتباط… وأختار ما أصدّق"',
      footer: "كل فكرة تمرّ بـ ٥ طبقات · الفلترة ليست انفصالاً · بل اختيار واعٍ",
      stages: {
        observe: {
          title: "الرصد",
          question: '"وش قاعد أشوف؟"',
          items: ["رصد المشاعر", "فحص ردّة الفعل", "مسح الاستجابة الفورية", "تقييم الشدّة"],
        },
        filter: {
          title: "الفلتر",
          question: '"هل هذا مهم؟"',
          items: ["٧ تشوّهات معرفية", "كشف الإسقاطات", "مسح اللوب", "ضوضاء مقابل إشارة"],
        },
        meaning: {
          title: "المعنى",
          question: '"وش معنى هذا بالنسبة لي؟"',
          items: ["فحص التوافق مع الأهداف", "محاكاة الفكر", "تفعيل الشبكة", "اكتشاف الأنماط"],
        },
        response: {
          title: "الاستجابة",
          question: '"وش أسوي الحين؟"',
          items: ["توصية", "سؤال كوتشنق", "فعل مقترح", "درجة ثقة"],
        },
        wisdom: {
          title: "الحكمة",
          question: '"علم + روح؟"',
          items: ["رؤية علمية", "رؤية روحية", "الجسر بينهما", "تمرين يومي"],
        },
      },
    },
    // Court page
    court: {
      title: "محكمة القرارات",
      subtitle: "توافق → طاقة → حكم",
      inputLabel: "ما القرار الذي تواجهه؟",
      inputPlaceholder: "اوصف القرار...",
      beginBtn: "ابدأ التقييم",
      alignedQuestion: "هل هذا متوافق مع أهدافك؟",
      yesAligned: "نعم — متوافق",
      noAligned: "لا — غير متوافق",
      energyQuestion: "ما مستوى طاقتك لهذا؟",
      energyHigh: "عالي",
      energyNeutral: "محايد",
      energyLow: "منخفض",
      newDecision: "قرار جديد",
      verdicts: {
        proceed: "تقدّم",
        pause: "توقّف وتأمّل",
        reject: "ارفض",
      },
      labels: {
        decision: "القرار",
        alignment: "التوافق",
        energy: "الطاقة",
        yes: "✓ نعم",
        no: "✕ لا",
        aligned: "✓ متوافق",
        misaligned: "✕ غير متوافق",
      },
      footer: "٣ أسئلة · توافق → طاقة → حكم",
    },
    langToggle: "English",
  },
} as const;

export type Translations = typeof t.en;
