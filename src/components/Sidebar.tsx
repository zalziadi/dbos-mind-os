"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: "◉", label: "Dashboard" },
  { href: "/agents", icon: "⬡", label: "Agents" },
  { href: "/pipeline", icon: "▹", label: "Pipeline" },
  { href: "/court", icon: "⚖", label: "Court" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-screen w-16 bg-dbos-surface border-r border-dbos-border flex flex-col items-center py-6 gap-2 z-50">
      {/* Logo */}
      <div className="w-9 h-9 rounded-full bg-neural-blue/20 border border-neural-blue/40 flex items-center justify-center mb-6 glow-blue">
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
                ? "bg-neural-blue/15 text-neural-blue"
                : "text-gray-500 hover:text-gray-300 hover:bg-dbos-card"
              }
            `}
            title={item.label}
          >
            {item.icon}
            {/* Tooltip */}
            <span className="absolute left-14 bg-dbos-card border border-dbos-border px-2 py-1 rounded text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-mono">
              {item.label}
            </span>
          </Link>
        );
      })}

      {/* Bottom */}
      <div className="mt-auto">
        <div className="w-8 h-8 rounded-full bg-dbos-card border border-dbos-border flex items-center justify-center">
          <span className="text-[10px] text-gray-500 font-mono">v3</span>
        </div>
      </div>
    </nav>
  );
}
