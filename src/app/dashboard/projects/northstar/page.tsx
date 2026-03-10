"use client";
import { ArrowLeft, CheckCircle2, Circle, AlertTriangle, MessageSquare, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const tasks = [
  { name: "Homepage hero redesign", assignee: "Sarah K.", status: "In Progress", color: "bg-indigo-100 text-indigo-700" },
  { name: "Navigation restructure", assignee: "James L.", status: "In Review", color: "bg-amber-100 text-amber-700" },
  { name: "Services page layout", assignee: "Sarah K.", status: "Complete", color: "bg-emerald-100 text-emerald-700" },
  { name: "Booking system integration", assignee: "Dev Team", status: "Blocked", color: "bg-rose-100 text-rose-700" },
  { name: "Mobile responsive pass", assignee: "James L.", status: "Not Started", color: "bg-slate-100 text-slate-600" },
  { name: "SEO metadata setup", assignee: "Content Team", status: "Not Started", color: "bg-slate-100 text-slate-600" },
];

const feedback = [
  { date: "Mar 6", text: "Love the direction of the new homepage — can we make the CTA button more prominent?", from: "Jessica M. (Client)" },
  { date: "Mar 4", text: "The color palette feels great. Can we see a version with slightly warmer tones in the hero?", from: "Jessica M. (Client)" },
  { date: "Mar 2", text: "Approved the sitemap. Ready to move forward with development.", from: "Mark T. (Stakeholder)" },
];

const checklist = [
  { item: "Design approval received", done: true },
  { item: "Content migrated", done: false },
  { item: "QA testing complete", done: false },
  { item: "Analytics configured", done: false },
  { item: "Redirects mapped", done: false },
  { item: "Client final signoff", done: false },
];

const translations = [
  { task: "Simplify navigation structure", detail: "Reduce main nav from 8 items to 5, group secondary items under dropdown" },
  { task: "Improve hero visual hierarchy", detail: "Increase heading size to 56px, add clear subtitle, single primary CTA" },
  { task: "Increase section spacing", detail: "Set consistent 120px section padding, add divider elements between blocks" },
  { task: "Refine CTA placement", detail: "Move primary CTA above the fold, add secondary CTA after testimonials section" },
  { task: "Update typography scale", detail: "Implement modular scale: 14/16/20/28/40/56px with consistent line heights" },
];

export default function NorthstarPage() {
  return (
    <div className="space-y-8">
      <div>
        <Link href="/dashboard" className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1 mb-4"><ArrowLeft className="w-3 h-3" />Back to Dashboard</Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-sm text-indigo-600 font-medium">Northstar Wellness</p>
            <h1 className="text-2xl font-bold">Website Redesign</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">Development</span>
            <span className="text-sm text-slate-500">Started Feb 10 → Target Mar 28</span>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h2 className="font-semibold mb-3">Project Progress</h2>
        <div className="flex items-center gap-2 sm:gap-4 mb-2 overflow-x-auto no-scrollbar">
          {["Discovery", "Design", "Development", "QA", "Launch"].map((phase, i) => (
            <div key={phase} className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <div className={`w-3 h-3 rounded-full ${i <= 2 ? "bg-indigo-500" : "bg-slate-200"}`} />
              <span className={`text-[11px] sm:text-xs ${i <= 2 ? "text-indigo-600 font-medium" : "text-slate-400"}`}>{phase}</span>
              {i < 4 && <div className={`w-4 sm:w-8 h-0.5 ${i < 2 ? "bg-indigo-500" : "bg-slate-200"}`} />}
            </div>
          ))}
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mt-4">
          <div className="h-full bg-indigo-500 rounded-full" style={{ width: "55%" }} />
        </div>
        <p className="text-xs text-slate-500 mt-2">55% complete — On track</p>
      </div>

      {/* Client to Developer Translation — KEY SECTION */}
      <div className="bg-white rounded-xl border-2 border-indigo-200 p-6">
        <div className="flex items-center gap-2 mb-2">
          <ArrowRight className="w-5 h-5 text-indigo-500" />
          <h2 className="font-bold text-lg">Client → Developer Translation</h2>
        </div>
        <div className="bg-indigo-50 rounded-lg p-4 mb-5">
          <p className="text-sm text-slate-500 mb-1 font-medium">Client says:</p>
          <p className="text-indigo-900 italic">&ldquo;We want the homepage to feel more premium and easier to navigate.&rdquo;</p>
        </div>
        <p className="text-sm text-slate-500 mb-3 font-medium">Translated into dev tasks:</p>
        <div className="space-y-3">
          {translations.map((t, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
              <div>
                <p className="text-sm font-medium">{t.task}</p>
                <p className="text-xs text-slate-500 mt-0.5">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Active Tasks */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold mb-4">Active Tasks</h2>
          <div className="space-y-2">
            {tasks.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-2.5 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-3">
                  {t.status === "Complete" ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : t.status === "Blocked" ? <AlertTriangle className="w-4 h-4 text-rose-500" /> : <Circle className="w-4 h-4 text-slate-300" />}
                  <div>
                    <p className="text-sm">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.assignee}</p>
                  </div>
                </div>
                <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${t.color}`}>{t.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Client Feedback */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2"><MessageSquare className="w-4 h-4 text-indigo-500" />Client Feedback</h2>
          <div className="space-y-3">
            {feedback.map((f, i) => (
              <div key={i} className="p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-medium text-slate-500">{f.from}</p>
                  <p className="text-xs text-slate-400">{f.date}</p>
                </div>
                <p className="text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Risks */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-amber-500" />Risk Notes</h2>
          <div className="space-y-3">
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
              <p className="text-sm font-medium text-amber-800">Booking API dependency</p>
              <p className="text-xs text-amber-700 mt-1">Waiting on client IT team to provide API credentials. Could delay launch by 3-5 days if not received by Mar 15.</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <p className="text-sm font-medium">Content delivery</p>
              <p className="text-xs text-slate-500 mt-1">Client has 4 remaining pages of content to deliver. Currently on track for Mar 12.</p>
            </div>
          </div>
        </div>

        {/* Launch Checklist */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold mb-4 flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-500" />Launch Checklist</h2>
          <div className="space-y-2">
            {checklist.map((c, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                {c.done ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Circle className="w-4 h-4 text-slate-300" />}
                <span className={`text-sm ${c.done ? "line-through text-slate-400" : ""}`}>{c.item}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: "17%" }} />
          </div>
          <p className="text-xs text-slate-500 mt-1">1 of 6 complete</p>
        </div>
      </div>
    </div>
  );
}
