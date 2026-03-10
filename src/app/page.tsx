"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, Zap } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "demo@actboldpm.com" && password === "Demo123!") {
      if (typeof window !== "undefined") sessionStorage.setItem("ab_auth", "1");
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Please use the demo credentials below.");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-900 text-white flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight">Act Bold</span>
          </div>
          <p className="text-sm text-slate-400">Web PM Concept</p>
        </div>
        <div className="relative z-10 max-w-md">
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Organized project management for digital agencies.
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Built as a concept mockup to demonstrate organized, client-facing web project management for a digital agency environment.
          </p>
          <div className="space-y-4">
            {["Client communication tracking", "Developer task translation", "Project health monitoring", "Launch readiness checklists"].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="relative z-10 text-sm text-slate-500">© 2026 Concept Demo</p>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold">Act Bold Web PM</span>
          </div>

          <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
          <p className="text-slate-500 mb-8">
            A demo interface for managing client communication, project timelines, developer handoff, and launch readiness.
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="email" value={email} onChange={e => { setEmail(e.target.value); setError(""); }} placeholder="Enter your email" className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="password" value={password} onChange={e => { setPassword(e.target.value); setError(""); }} placeholder="Enter your password" className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition" />
              </div>
            </div>

            {error && <p className="text-sm text-rose-600 bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">{error}</p>}

            <button type="submit" className="w-full bg-indigo-600 text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition flex items-center justify-center gap-2">
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-lg p-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Demo Credentials</p>
            <div className="space-y-1 text-sm">
              <p><span className="text-slate-500">Email:</span> <code className="bg-white px-1.5 py-0.5 rounded border text-indigo-600 font-mono text-xs">demo@actboldpm.com</code></p>
              <p><span className="text-slate-500">Password:</span> <code className="bg-white px-1.5 py-0.5 rounded border text-indigo-600 font-mono text-xs">Demo123!</code></p>
            </div>
            <p className="text-xs text-slate-400 mt-3">Demo access for review purposes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
