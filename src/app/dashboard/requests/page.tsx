"use client";
import { MessageSquare, Clock } from "lucide-react";

const requests = [
  { client: "CloudSync SaaS", summary: "Change hero headline copy to focus on security messaging", priority: "High", date: "Mar 8", status: "Needs Clarification", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { client: "Bloom & Vine", summary: "Add 3 new product categories: Dried Flowers, Gift Sets, Subscriptions", priority: "High", date: "Mar 7", status: "Scope Approval Required", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { client: "Metro Fitness", summary: "Integrate new class schedule API endpoint for real-time updates", priority: "Medium", date: "Mar 7", status: "Ready for Dev", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { client: "Heritage Homes", summary: "Final logo placement — move 10px left and reduce size by 15%", priority: "Low", date: "Mar 6", status: "Waiting on Client", color: "bg-slate-100 text-slate-600 border-slate-200" },
  { client: "Northstar Wellness", summary: "Add testimonials carousel to homepage below the hero section", priority: "Medium", date: "Mar 6", status: "Ready for Dev", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { client: "Apex Legal Group", summary: "Client wants attorney bio pages to include video introductions", priority: "Medium", date: "Mar 5", status: "Needs Clarification", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { client: "CloudSync SaaS", summary: "Footer needs updated social media links and compliance text", priority: "Low", date: "Mar 5", status: "Ready for Dev", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { client: "Bloom & Vine", summary: "Shipping calculator not returning rates for international orders", priority: "High", date: "Mar 4", status: "Needs Clarification", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { client: "Metro Fitness", summary: "Request dark mode toggle for member portal", priority: "Low", date: "Mar 3", status: "Scope Approval Required", color: "bg-orange-100 text-orange-700 border-orange-200" },
  { client: "Heritage Homes", summary: "Add virtual tour embed to all property listing pages", priority: "Medium", date: "Mar 2", status: "Waiting on Client", color: "bg-slate-100 text-slate-600 border-slate-200" },
];

const priorityColor: Record<string, string> = { High: "text-rose-600", Medium: "text-amber-600", Low: "text-slate-500" };

export default function RequestsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2"><MessageSquare className="w-6 h-6 text-indigo-500" />Client Requests</h1>
        <p className="text-sm text-slate-500 mt-1">Track and triage incoming requests from all active clients</p>
      </div>

      {/* Status Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Needs Clarification", count: 3, color: "bg-amber-50 border-amber-100 text-amber-700" },
          { label: "Ready for Dev", count: 3, color: "bg-emerald-50 border-emerald-100 text-emerald-700" },
          { label: "Waiting on Client", count: 2, color: "bg-slate-50 border-slate-200 text-slate-600" },
          { label: "Scope Approval", count: 2, color: "bg-orange-50 border-orange-100 text-orange-700" },
        ].map(s => (
          <div key={s.label} className={`${s.color} border rounded-lg p-3 text-center`}>
            <p className="text-2xl font-bold">{s.count}</p>
            <p className="text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Request Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {requests.map((r, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 hover:shadow-sm transition">
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs font-medium text-indigo-600">{r.client}</p>
                <p className="text-sm font-medium mt-1">{r.summary}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full border ${r.color}`}>{r.status}</span>
                <span className={`text-xs font-medium ${priorityColor[r.priority]}`}>{r.priority}</span>
              </div>
              <span className="text-xs text-slate-400 flex items-center gap-1"><Clock className="w-3 h-3" />{r.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
