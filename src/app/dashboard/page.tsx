"use client";
import { FolderKanban, MessageSquare, Rocket, AlertTriangle, Clock, CircleAlert, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const kpis = [
  { label: "Active Projects", value: "8", icon: FolderKanban, color: "bg-indigo-50 text-indigo-600", border: "border-indigo-100" },
  { label: "Pending Feedback", value: "3", icon: MessageSquare, color: "bg-amber-50 text-amber-600", border: "border-amber-100" },
  { label: "Launch Queue", value: "2", icon: Rocket, color: "bg-emerald-50 text-emerald-600", border: "border-emerald-100" },
  { label: "At-Risk Items", value: "1", icon: AlertTriangle, color: "bg-rose-50 text-rose-600", border: "border-rose-100" },
];

const projects = [
  { name: "Northstar Wellness", type: "Website Redesign", health: "green", stage: "Development" },
  { name: "Apex Legal Group", type: "New Site Build", health: "green", stage: "Design Approved" },
  { name: "CloudSync SaaS", type: "Landing Pages", health: "yellow", stage: "Content Review" },
  { name: "Heritage Homes", type: "CMS Migration", health: "green", stage: "QA Testing" },
  { name: "Bloom & Vine", type: "E-Commerce", health: "red", stage: "Scope Change" },
  { name: "Metro Fitness", type: "Membership Portal", health: "yellow", stage: "Client Feedback" },
];

const requests = [
  { client: "CloudSync SaaS", summary: "Wants hero copy changed before launch", status: "Needs Clarification", color: "bg-amber-100 text-amber-700" },
  { client: "Bloom & Vine", summary: "Add 3 new product categories to shop", status: "Scope Approval Required", color: "bg-orange-100 text-orange-700" },
  { client: "Metro Fitness", summary: "Update class schedule page with new API", status: "Ready for Dev", color: "bg-emerald-100 text-emerald-700" },
  { client: "Heritage Homes", summary: "Final logo placement adjustment on header", status: "Waiting on Client", color: "bg-slate-100 text-slate-600" },
];

const blockers = [
  { project: "CloudSync SaaS", issue: "Client hasn't provided final copy for 3 landing pages", days: 5 },
  { project: "Bloom & Vine", issue: "Scope change request pending — dev paused until approved", days: 3 },
  { project: "Northstar Wellness", issue: "Awaiting API credentials for booking integration", days: 2 },
];

const milestones = [
  { project: "Heritage Homes", milestone: "QA Sign-off", date: "Mar 12", urgent: false },
  { project: "Northstar Wellness", milestone: "Client Review", date: "Mar 14", urgent: false },
  { project: "Apex Legal Group", milestone: "Dev Sprint Start", date: "Mar 15", urgent: false },
  { project: "CloudSync SaaS", milestone: "Launch Target", date: "Mar 18", urgent: true },
];

const healthColor: Record<string, string> = { green: "bg-emerald-500", yellow: "bg-amber-500", red: "bg-rose-500" };

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">Overview of all active projects and priorities</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {kpis.map(k => (
          <div key={k.label} className={`bg-white rounded-xl border ${k.border} p-5`}>
            <div className={`w-10 h-10 rounded-lg ${k.color} flex items-center justify-center mb-3`}>
              <k.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-bold">{k.value}</p>
            <p className="text-sm text-slate-500 mt-0.5">{k.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Project Health */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Project Health Summary</h2>
            <Link href="/dashboard/projects/northstar" className="text-xs text-indigo-600 hover:underline flex items-center gap-1">View project <ArrowRight className="w-3 h-3" /></Link>
          </div>
          <div className="space-y-3">
            {projects.map(p => (
              <div key={p.name} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${healthColor[p.health]}`} />
                  <div>
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-slate-400">{p.type}</p>
                  </div>
                </div>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">{p.stage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Requests */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold">Recent Requests</h2>
            <Link href="/dashboard/requests" className="text-xs text-indigo-600 hover:underline">View all</Link>
          </div>
          <div className="space-y-3">
            {requests.map((r, i) => (
              <div key={i} className="p-3 bg-slate-50 rounded-lg">
                <p className="text-xs font-medium text-slate-500">{r.client}</p>
                <p className="text-sm mt-1">{r.summary}</p>
                <span className={`inline-block text-[11px] font-medium px-2 py-0.5 rounded-full mt-2 ${r.color}`}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Blockers */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2"><CircleAlert className="w-4 h-4 text-rose-500" />Developer Blockers</h2>
          <div className="space-y-3">
            {blockers.map((b, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-rose-50/50 rounded-lg border border-rose-100">
                <AlertTriangle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">{b.project}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{b.issue}</p>
                  <p className="text-xs text-rose-600 mt-1">{b.days} days blocked</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2"><Clock className="w-4 h-4 text-indigo-500" />Upcoming Milestones</h2>
          <div className="space-y-3">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className={`w-4 h-4 ${m.urgent ? "text-amber-500" : "text-slate-300"}`} />
                  <div>
                    <p className="text-sm font-medium">{m.milestone}</p>
                    <p className="text-xs text-slate-400">{m.project}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${m.urgent ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600"}`}>{m.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Launch Readiness Mini */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold flex items-center gap-2"><Rocket className="w-4 h-4 text-emerald-500" />Launch Readiness</h2>
          <Link href="/dashboard/launch" className="text-xs text-indigo-600 hover:underline flex items-center gap-1">Full view <ArrowRight className="w-3 h-3" /></Link>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: "Heritage Homes", target: "Mar 17", progress: 83 },
            { name: "CloudSync SaaS", target: "Mar 18", progress: 50 },
          ].map(l => (
            <div key={l.name} className="p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">{l.name}</p>
                <span className="text-xs text-slate-500">Target: {l.target}</span>
              </div>
              <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all ${l.progress >= 75 ? "bg-emerald-500" : "bg-amber-500"}`} style={{ width: `${l.progress}%` }} />
              </div>
              <p className="text-xs text-slate-500 mt-1">{l.progress}% ready</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
