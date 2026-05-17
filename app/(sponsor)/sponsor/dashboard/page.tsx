import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsor Dashboard | FreeDrops" };

const stats = [
  {
    label: "Bottles Scanned",
    value: "2,450",
    sub: "/ 5,000",
    badge: "49% Scanned",
    icon: "lucide:droplets",
    color: "text-[#D63839]",
    bg: "bg-red-50",
  },
  {
    label: "Active Campaigns",
    value: "12",
    icon: "lucide:activity",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Total Scans (30d)",
    value: "8,492",
    icon: "lucide:qr-code",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    label: "Total CTA Clicks (30d)",
    value: "1,205",
    icon: "lucide:mouse-pointer-2",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    label: "Total Leads",
    value: "0",
    note: "No leads yet or campaign leads not enabled",
    icon: "lucide:users",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
];

const campaigns = [
  {
    name: "Summer Refresh 2024",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    icon: "lucide:droplet",
    status: "Active",
    statusColor: "bg-green-50 text-green-700 border-green-100",
    scans: "2,841",
    clicks: "412",
    leads: "—",
  },
  {
    name: "Expo Dubai Special",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    icon: "lucide:gift",
    status: "Active",
    statusColor: "bg-green-50 text-green-700 border-green-100",
    scans: "1,902",
    clicks: "285",
    leads: "—",
  },
  {
    name: "Corporate Hydration",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    icon: "lucide:award",
    status: "Pending Approval",
    statusColor: "bg-blue-50 text-blue-700 border-blue-100",
    scans: "0",
    clicks: "0",
    leads: "—",
  },
];

const topLocations = [
  { rank: 1, name: "Dubai Mall - Entrance 4", area: "Downtown Dubai", scans: "1,402", highlight: true },
  { rank: 2, name: "JBR Walk - Station B", area: "Marina", scans: "1,120", highlight: false },
  { rank: 3, name: "Business Bay Tower", area: "Business District", scans: "984", highlight: false },
  { rank: 4, name: "Dubai Airport T3", area: "Arrivals Area", scans: "841", highlight: false },
];

export default function SponsorDashboardPage() {
  return (
    <AnimatedPage>
      <div className="space-y-8">

        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-slate-900">Overview</h1>
            <div className="h-6 w-px bg-slate-200" />
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors select-none">
              <Icon icon="lucide:calendar" />
              <span>Last 30 Days</span>
              <Icon icon="lucide:chevron-down" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
              <input
                type="text"
                placeholder="Search campaigns..."
                className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839] transition-all w-56"
              />
            </div>
            <Link
              href="/sponsor/campaigns/create/step-1"
              className="bg-[#D63839] text-white px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all"
            >
              <Icon icon="lucide:plus" />
              Create Campaign Request
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {stats.map((s) => (
            <AnimatedCell key={s.label} className="bg-white p-6 rounded-3xl login-card">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center`}>
                  <Icon icon={s.icon} className="text-2xl" />
                </div>
              </div>
              <p className="text-sm font-medium text-slate-500 mb-1">{s.label}</p>
              <div className="flex items-baseline gap-1.5">
                <h3 className="text-2xl font-bold text-slate-900">{s.value}</h3>
                {s.sub && <span className="text-sm font-medium text-slate-400">{s.sub}</span>}
                {s.note && (
                  <span className="text-[10px] leading-tight text-slate-400 font-medium max-w-[140px]">{s.note}</span>
                )}
              </div>
              {s.badge && (
                <p className="text-[10px] font-bold text-[#D63839] uppercase tracking-wider mt-1">{s.badge}</p>
              )}
            </AnimatedCell>
          ))}
        </AnimatedGrid>

        {/* Main Tables Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Active Campaigns Table */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">My Active Campaigns</h2>
              <Link href="/sponsor/campaigns" className="text-sm font-bold text-[#D63839] hover:underline">View All</Link>
            </div>
            <div className="bg-white rounded-3xl login-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Campaign Name</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Scans</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Clicks</th>
                      <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Leads</th>
                    </tr>
                  </thead>
                  <AnimatedTbody className="divide-y divide-slate-50">
                    {campaigns.map((c) => (
                      <AnimatedRow key={c.name} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-lg ${c.iconBg} ${c.iconColor} flex items-center justify-center`}>
                              <Icon icon={c.icon} />
                            </div>
                            <span className="font-semibold text-slate-900">{c.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`px-2.5 py-1 text-xs font-bold rounded-full border ${c.statusColor}`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm font-medium text-slate-600">{c.scans}</td>
                        <td className="px-6 py-5 text-sm font-medium text-slate-600">{c.clicks}</td>
                        <td className="px-6 py-5 text-sm font-medium text-slate-400 font-mono">{c.leads}</td>
                      </AnimatedRow>
                    ))}
                  </AnimatedTbody>
                </table>
              </div>
            </div>
          </div>

          {/* Top Locations Leaderboard */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Top Locations</h2>
              <Icon icon="lucide:info" className="text-slate-400" />
            </div>
            <div className="bg-white rounded-3xl login-card p-2">
              <div className="space-y-1">
                {topLocations.map((loc) => (
                  <div
                    key={loc.rank}
                    className={`flex items-center justify-between p-4 rounded-2xl transition-colors ${loc.highlight ? "bg-slate-50" : "hover:bg-slate-50"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${loc.highlight ? "bg-[#D63839] text-white" : "bg-slate-100 text-slate-600"}`}
                      >
                        {loc.rank}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{loc.name}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">{loc.area}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-900">{loc.scans}</p>
                      <p className="text-[10px] text-slate-400">SCANS</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 text-center border-t border-slate-50">
                <a href="#" className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors uppercase tracking-widest">
                  View Full Leaderboard
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/"
        className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center gap-2 z-30"
      >
        <Icon icon="mdi:whatsapp" className="text-3xl" />
        <span className="font-bold pr-2">Contact Support</span>
      </a>
    </AnimatedPage>
  );
}
