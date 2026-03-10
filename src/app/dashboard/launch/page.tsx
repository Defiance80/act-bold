"use client";
import { Rocket, CheckCircle2, Circle, AlertTriangle } from "lucide-react";

const projects = [
  {
    name: "Heritage Homes",
    type: "CMS Migration",
    target: "Mar 17",
    items: [
      { label: "QA Complete", done: true },
      { label: "Content Loaded", done: true },
      { label: "Analytics Setup", done: true },
      { label: "Redirects Ready", done: true },
      { label: "Hosting Confirmed", done: true },
      { label: "Client Signoff", done: false },
    ],
  },
  {
    name: "CloudSync SaaS",
    type: "Landing Pages",
    target: "Mar 18",
    items: [
      { label: "QA Complete", done: false },
      { label: "Content Loaded", done: true },
      { label: "Analytics Setup", done: true },
      { label: "Redirects Ready", done: false },
      { label: "Hosting Confirmed", done: true },
      { label: "Client Signoff", done: false },
    ],
  },
  {
    name: "Apex Legal Group",
    type: "New Site Build",
    target: "Apr 2",
    items: [
      { label: "QA Complete", done: false },
      { label: "Content Loaded", done: false },
      { label: "Analytics Setup", done: false },
      { label: "Redirects Ready", done: false },
      { label: "Hosting Confirmed", done: true },
      { label: "Client Signoff", done: false },
    ],
  },
];

export default function LaunchPage() {
  const overall = projects.reduce((acc, p) => {
    const done = p.items.filter(i => i.done).length;
    return { done: acc.done + done, total: acc.total + p.items.length };
  }, { done: 0, total: 0 });
  const overallPct = Math.round((overall.done / overall.total) * 100);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2"><Rocket className="w-6 h-6 text-emerald-500" />Launch Readiness</h1>
        <p className="text-sm text-slate-500 mt-1">Pre-launch checklist status for upcoming deployments</p>
      </div>

      {/* Overall */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold">Overall Readiness</h2>
          <span className="text-sm font-bold text-indigo-600">{overallPct}%</span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
          <div className={`h-full rounded-full transition-all ${overallPct >= 75 ? "bg-emerald-500" : overallPct >= 50 ? "bg-amber-500" : "bg-rose-500"}`} style={{ width: `${overallPct}%` }} />
        </div>
        <p className="text-xs text-slate-500 mt-2">{overall.done} of {overall.total} items complete across {projects.length} projects</p>
      </div>

      {/* Per Project */}
      <div className="space-y-6">
        {projects.map(p => {
          const done = p.items.filter(i => i.done).length;
          const pct = Math.round((done / p.items.length) * 100);
          const isReady = pct === 100;
          const atRisk = pct < 50;
          return (
            <div key={p.name} className={`bg-white rounded-xl border p-6 ${atRisk ? "border-amber-200" : "border-slate-200"}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5">
                <div>
                  <p className="text-xs text-indigo-600 font-medium">{p.type}</p>
                  <h3 className="text-lg font-bold">{p.name}</h3>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">Target: {p.target}</span>
                  {atRisk && <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1"><AlertTriangle className="w-3 h-3" />At Risk</span>}
                  {isReady && <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1"><CheckCircle2 className="w-3 h-3" />Ready</span>}
                </div>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
                <div className={`h-full rounded-full ${pct >= 75 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : "bg-rose-500"}`} style={{ width: `${pct}%` }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {p.items.map((item, i) => (
                  <div key={i} className={`flex items-center gap-2.5 p-3 rounded-lg ${item.done ? "bg-emerald-50" : "bg-slate-50"}`}>
                    {item.done ? <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> : <Circle className="w-4 h-4 text-slate-300 shrink-0" />}
                    <span className={`text-sm ${item.done ? "text-emerald-700" : "text-slate-600"}`}>{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">{done} of {p.items.length} complete — {pct}%</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
