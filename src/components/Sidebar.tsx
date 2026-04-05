"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";

export function Sidebar() {
  const pathname = usePathname();
  const { tr, toggle, lang } = useLang();

  const navItems = [
    { href: "/", icon: "◉", label: tr.nav.dashboard },
    { href: "/agents", icon: "⬡", label: tr.nav.agents },
    { href: "/pipeline", icon: "▹", label: tr.nav.pipeline },
    { href: "/court", icon: "⚖", label: tr.nav.court },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 bg-dbos-surface border-r border-dbos-border flex flex-col items-center py-6 gap-2 z-50">
      {/* Logo */}
      <div className="w-9 h-9 rounded-full bg-neural-blue/20 border border-neural-blue/40 flex items-center justify-center mb-6 glow-blue transition-all duration-300 hover:scale-110 cursor-default">
        <span className="text-neural-blue text-xs font-bold font-display">M</span>
      </div>

      {/* Nav items */}
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`
              w-10 h-10 rounded-lg flex items-center justify-center text-lg
              transition-all duration-200 group relative
              ${isActive
                ? "bg-neural-blue/15 text-neural-blue scale-110"
                : "text-gray-500 hover:text-gray-300 hover:bg-dbos-card hover:scale-105"
              }
            `}
            title={item.label}
          >
            {item.icon}
            {/* Active indicator */}
            {isActive && (
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-neural-blue rounded-r" />
            )}
            {/* Tooltip */}
            <span className="absolute left-14 bg-dbos-card border border-dbos-border px-2 py-1 rounded text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono shadow-lg">
              {item.label}
            </span>
          </Link>
        );
      })}

      {/* Bottom — lang toggle + version */}
      <div className="mt-auto flex flex-col items-center gap-3">
        {/* Language toggle */}
        <button
          onClick={toggle}
          title={tr.langToggle}
          className="w-10 h-10 rounded-lg bg-dbos-card border border-dbos-border flex items-center justify-center text-[10px] text-gray-400 font-mono hover:border-neural-blue/40 hover:text-neural-blue transition-all duration-200 hover:scale-105 group relative"
        >
          {lang === "en" ? "AR" : "EN"}
          <span className="absolute left-14 bg-dbos-card border border-dbos-border px-2 py-1 rounded text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono shadow-lg">
            {tr.langToggle}
          </span>
        </button>
        {/* Version */}
        <div className="w-8 h-8 rounded-full bg-dbos-card border border-dbos-border flex items-center justify-center">
          <span className="text-[10px] text-gray-500 font-mono">v3</span>
        </div>
      </div>
    </nav>
  );
}
