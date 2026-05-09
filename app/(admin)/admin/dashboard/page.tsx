import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata = { title: "Admin Dashboard | FreeDrops" };

const stats = [
  { label: "Active Campaigns", value: "42", sub: "+3 this week", icon: "lucide:megaphone", color: "text-[#D63839]", bg: "bg-red-50" },
  { label: "Total Sponsors", value: "18", sub: "+1 this month", icon: "lucide:building-2", color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Bottles Scanned", value: "184.2k", sub: "This month", icon: "lucide:droplets", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Conversion Rate", value: "12.4%", sub: "+0.8% vs last month", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Total Leads", value: "22,418", sub: "All time", icon: "lucide:users", color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Active QR Codes", value: "1,204", sub: "Across all campaigns", icon: "lucide:qr-code", color: "text-slate-600", bg: "bg-slate-50" },
];

const recentCampaigns = [
  { name: "Summer Splash", sponsor: "Masafi Water", status: "Live", scans: "12,504", bottles: "15,000", statusColor: "bg-green-50 text-green-700" },
  { name: "Fitness Village", sponsor: "Mai Dubai", status: "In Review", scans: "8,240", bottles: "10,000", statusColor: "bg-amber-50 text-amber-700" },
  { name: "Back to School", sponsor: "PepsiCo", status: "Awaiting Creative", scans: "0", bottles: "20,000", statusColor: "bg-purple-50 text-purple-700" },
  { name: "Arts Festival", sponsor: "Masafi Water", status: "Completed", scans: "22,418", bottles: "25,000", statusColor: "bg-gray-100 text-gray-700" },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Ahmed. Here's what's happening across the network.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
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
            className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200"
          >
            <Icon icon="lucide:plus" />Create Campaign
          </Link>
        </div>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className="stat-card p-5 rounded-2xl">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center`}>
                <Icon icon={s.icon} className={`${s.color} text-xl`} />
              </div>
            </div>
            <p className="text-2xl font-bold text-gray-900 mb-1">{s.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</p>
            <p className="text-xs text-gray-500 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <h2 className="font-bold text-gray-900">Recent Campaigns</h2>
          <Link href="/admin/campaigns" className="text-xs font-bold text-[#D63839] hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Campaign</th>
                <th className="px-6 py-4 font-semibold">Sponsor</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-center">Total Bottles</th>
                <th className="px-6 py-4 font-semibold">Scans</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 text-sm">
              {recentCampaigns.map((c) => (
                <tr key={c.name} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{c.name}</td>
                  <td className="px-6 py-4 text-gray-600">{c.sponsor}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.statusColor}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center font-mono font-bold text-gray-900">{c.bottles}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{c.scans}</td>
                  <td className="px-6 py-4 text-right">
                    <Link href="/admin/campaigns/1/overview" className="text-xs font-bold text-[#D63839] hover:text-red-800 uppercase tracking-wide">
                      View →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
