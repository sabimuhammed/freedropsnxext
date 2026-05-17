import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Admin Dashboard | FreeDrops" };

const stats = [
  {
    label: "Bottles Scanned",
    value: "12,450",
    // suffix: "/ 25,000",
    icon: "lucide:package-check",
    color: "text-[#D63839]",
    bg: "bg-red-50",
  },
  {
    label: "Total Scans",
    value: "142,890",
    icon: "lucide:scan",
    color: "text-[#D63839]",
    bg: "bg-red-50",
  },
  {
    label: "Total CTA Clicks",
    value: "12,402",
    icon: "lucide:mouse-pointer-2",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Total Leads",
    value: "842",
    sub: "FreeDrops Forms only",
    icon: "lucide:user-check",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    label: "Active Campaigns",
    value: "48",
    sub: "8 pending approval",
    icon: "lucide:trending-up",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const topCampaigns = [
  { initials: "AQ", avatarBg: "bg-red-100", avatarColor: "text-red-600", name: "AquaPure Summer Rush", sponsor: "Masafi Water", bottles: "5,000", scans: "14,203", uniqueScans: "9,841", clicks: "1,402", leads: "—" },
  { initials: "EG", avatarBg: "bg-amber-100", avatarColor: "text-amber-600", name: "Etisalat 5G Launch", sponsor: "Etisalat UAE", bottles: "3,500", scans: "9,102", uniqueScans: "6,730", clicks: "840", leads: "112" },
  { initials: "DL", avatarBg: "bg-emerald-100", avatarColor: "text-emerald-600", name: "Dubai Logistics Exp", sponsor: "DP World", bottles: "8,200", scans: "7,845", uniqueScans: "5,210", clicks: "630", leads: "—" },
  { initials: "EM", avatarBg: "bg-purple-100", avatarColor: "text-purple-600", name: "Emirates Skywards", sponsor: "Emirates", bottles: "12,000", scans: "6,102", uniqueScans: "4,488", clicks: "480", leads: "54" },
  { initials: "ST", avatarBg: "bg-gray-100", avatarColor: "text-gray-600", name: "Starter Pilot V1", sponsor: "FreeDrops Lab", bottles: "2,000", scans: "4,102", uniqueScans: "3,201", clicks: "210", leads: "18" },
];

const topLocations = [
  { icon: "lucide:building", name: "Dubai Mall - P3 Entrance", scans: "42,109" },
  { icon: "lucide:plane", name: "DXB Terminal 3 - B22", scans: "38,402" },
  { icon: "lucide:map-pin", name: "JBR Walk - Station 4", scans: "29,551" },
  { icon: "lucide:shopping-cart", name: "Emirates Mall - Food Court", scans: "22,102" },
];

const campaignStatus = [
  { label: "Live", count: 45, pct: "45.0%", color: "bg-[#D63839]" },
  { label: "Completed", count: 25, pct: "25.0%", color: "bg-emerald-500" },
  { label: "Review", count: 20, pct: "20.0%", color: "bg-amber-500" },
  { label: "Draft", count: 10, pct: "10.0%", color: "bg-red-400" },
];

export default function AdminDashboardPage() {
  return (
    <AnimatedPage>
    <div>
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Ahmed. Here's what's happening across the network.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative min-w-[300px]">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Icon icon="lucide:search" />
            </span>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#D63839]"
              placeholder="Search campaigns, sponsors..."
            />
          </div>
          <div className="flex border border-gray-200 rounded-lg bg-white p-1">
            <button className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#D63839] text-white">Today</button>
            <button className="px-3 py-1.5 text-xs font-medium rounded-md text-gray-500 hover:bg-gray-50">7d</button>
            <button className="px-3 py-1.5 text-xs font-medium rounded-md text-gray-500 hover:bg-gray-50">30d</button>
          </div>
          <Link
            href="/admin/campaigns/create/step-1"
            className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200 whitespace-nowrap"
          >
            <Icon icon="lucide:plus" />Create Campaign
          </Link>
          <Link
            href="/admin/login"
            className="flex items-center gap-2 text-[#D63839] hover:bg-red-50 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
          >
            <Icon icon="lucide:log-out" />
            <span>Logout</span>
          </Link>
        </div>
      </header>

      <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
        {stats.map((s) => (
          <AnimatedCell key={s.label} className="stat-card p-5 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 ${s.bg} ${s.color} rounded-lg`}>
                <Icon icon={s.icon} className="text-xl" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">{s.label}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">
              {s.value}{" "}
              {/* {s.suffix && <span className="text-sm text-gray-400 font-medium">{s.suffix}</span>} */}
            </h3>
            {/* {s.sub && (
              <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-wide">{s.sub}</p>
            )} */}
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm mb-8">
        <div className="p-6 flex items-center justify-between border-b border-gray-50">
          <h3 className="font-bold text-gray-900">Top Campaigns</h3>
          <Link href="/admin/campaigns" className="text-xs font-semibold text-[#D63839] hover:text-red-800">
            View All Campaigns
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr className="table-header">
                <th className="px-6 py-4">Campaign</th>
                <th className="px-6 py-4">Sponsor</th>
                <th className="px-6 py-4">Total Bottles</th>
                <th className="px-6 py-4">Scans</th>
                <th className="px-6 py-4">Unique Scans</th>
                <th className="px-6 py-4">Clicks</th>
                <th className="px-6 py-4">Leads</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50">
              {topCampaigns.map((c) => (
                <AnimatedRow key={c.name} className="text-sm text-gray-700">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded ${c.avatarBg} flex items-center justify-center ${c.avatarColor} font-bold text-xs shrink-0`}>
                        {c.initials}
                      </div>
                      <span className="font-medium whitespace-nowrap">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{c.sponsor}</td>
                  <td className="px-6 py-4 font-mono font-bold text-gray-900">{c.bottles}</td>
                  <td className="px-6 py-4 font-mono">{c.scans}</td>
                  <td className="px-6 py-4 font-mono text-purple-700">{c.uniqueScans}</td>
                  <td className="px-6 py-4 font-mono">{c.clicks}</td>
                  <td className={`px-6 py-4 font-mono ${c.leads === "—" ? "text-gray-400" : ""}`}>{c.leads}</td>
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        </div>
      </div>

      <div className="flex gap-6 flex-row-reverse">
        <div className="flex-1 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 flex items-center justify-between border-b border-gray-50">
            <h3 className="font-bold text-gray-900">Top Locations</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="table-header">
                  <th className="px-6 py-4">Location Tag</th>
                  <th className="px-6 py-4">Total Scans</th>
                </tr>
              </thead>
              <AnimatedTbody className="divide-y divide-gray-50">
                {topLocations.map((l) => (
                  <AnimatedRow key={l.name} className="text-sm text-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Icon icon={l.icon} className="text-gray-400" />
                        {l.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-mono">{l.scans}</td>
                  </AnimatedRow>
                ))}
              </AnimatedTbody>
            </table>
          </div>
        </div>

        <div className="shrink-0 w-64 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
          <h3 className="font-bold text-gray-900 mb-4">Campaign Status</h3>
          <div className="relative flex justify-center py-3">
            <svg viewBox="0 0 100 100" className="w-36 h-36 drop-shadow-sm">
              <defs>
                <mask id="pie-mask">
                  <rect width="100" height="100" fill="white" />
                  <circle cx="50" cy="50" r="32" fill="black" />
                </mask>
              </defs>
              <g mask="url(#pie-mask)">
                <path fill="#D63839" d="M 50 50 L 50 0 A 50 50 0 0 1 97.55 65.45 Z" />
                <path fill="#10B981" d="M 50 50 L 97.55 65.45 A 50 50 0 0 1 2.45 65.45 Z" />
                <path fill="#F59E0B" d="M 50 50 L 2.45 65.45 A 50 50 0 0 1 20.61 9.55 Z" />
                <path fill="#EF4444" d="M 50 50 L 20.61 9.55 A 50 50 0 0 1 50 0 Z" />
              </g>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-gray-900">100+</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Total</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {campaignStatus.map((s) => (
              <div key={s.label} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${s.color}`} />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-900 leading-tight">{s.label} ({s.count})</span>
                  <span className="text-[10px] text-gray-500">{s.pct}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
