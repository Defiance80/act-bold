"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FolderKanban, MessageSquare, Rocket, LogOut, Zap, Menu, X } from "lucide-react";

const nav = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/dashboard/projects/northstar", icon: FolderKanban },
  { label: "Client Requests", href: "/dashboard/requests", icon: MessageSquare },
  { label: "Launch Readiness", href: "/dashboard/launch", icon: Rocket },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("ab_auth") !== "1") {
      router.replace("/");
    } else {
      setReady(true);
    }
  }, [router]);

  const logout = () => {
    if (typeof window !== "undefined") sessionStorage.removeItem("ab_auth");
    router.replace("/");
  };

  if (!ready) return <div className="min-h-screen flex items-center justify-center"><div className="w-6 h-6 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" /></div>;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white transform transition-transform lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-800">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center"><Zap className="w-4 h-4" /></div>
          <div>
            <p className="text-sm font-semibold">Act Bold Web PM</p>
            <p className="text-[11px] text-slate-400">Project Management</p>
          </div>
        </div>
        <nav className="mt-4 px-3 space-y-1">
          {nav.map(n => {
            const active = pathname === n.href || (n.href !== "/dashboard" && pathname.startsWith(n.href));
            return (
              <Link key={n.href} href={n.href} onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition ${active ? "bg-indigo-600/20 text-indigo-300 font-medium" : "text-slate-400 hover:text-white hover:bg-slate-800"}`}>
                <n.icon className="w-4 h-4" />{n.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-slate-800">
          <button onClick={logout} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800 w-full transition">
            <LogOut className="w-4 h-4" />Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Main */}
      <div className="flex-1 lg:ml-64 min-w-0 overflow-x-hidden">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200 px-6 py-3 flex items-center justify-between">
          <button className="lg:hidden p-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          <div className="text-sm text-slate-500">Welcome to the demo dashboard</div>
          <button onClick={logout} className="hidden lg:flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition">
            <LogOut className="w-4 h-4" />Logout
          </button>
        </header>
        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl overflow-x-hidden">{children}</main>
      </div>
    </div>
  );
}
