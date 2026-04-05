import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "DBOS — Digital Brain Operating System",
  description: "Mind OS v3 — Cognitive Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex">
        <Sidebar />
        <main className="flex-1 ml-16 overflow-y-auto min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
