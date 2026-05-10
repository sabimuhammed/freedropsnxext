import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsor Dashboard | FreeDrops" };

const stats = [
  { label: "Active Campaigns", value: "3", icon: "lucide:megaphone", color: "text-[#B12B2C]", bg: "bg-red-50" },
  { label: "Bottles Scanned", value: "48,204", icon: "lucide:droplets", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Total Leads", value: "3,812", icon: "lucide:users", color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Avg. Conversion", value: "7.9%", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
];

const campaigns = [
  { name: "Summer Splash", status: "Live", bottles: "15,000", scans: "12,504", clicks: "3,218", statusColor: "bg-green-50 text-green-700" },
  { name: "Fitness Village", status: "In Review", bottles: "10,000", scans: "0", clicks: "0", statusColor: "bg-amber-50 text-amber-700" },
  { name: "Spring Oasis", status: "Approved", bottles: "20,000", scans: "0", clicks: "0", statusColor: "bg-cyan-50 text-cyan-700" },
];

export default function SponsorDashboardPage() {
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back, Masafi Water. Here's your campaign overview.</p>
        </div>
        <Link
          href="/sponsor/campaigns/create/step-1"
          className="flex items-center gap-2 bg-[#B12B2C] hover:opacity-90 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shadow-red-200"
        >
          <Icon icon="lucide:plus" />New Campaign Request
        </Link>
      </div>

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <AnimatedCell key={s.label} className="stat-card p-5 rounded-2xl">
            <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
              <Icon icon={s.icon} className={`${s.color} text-xl`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
        <div className="p-6 border-b border-gray-50 flex items-center justify-between">
          <h2 className="font-bold text-gray-900">My Campaigns</h2>
          <Link href="/sponsor/campaigns" className="text-xs font-bold text-[#B12B2C] hover:underline">View All</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Campaign</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-center">Bottles</th>
                <th className="px-6 py-4 font-semibold">Scans</th>
                <th className="px-6 py-4 font-semibold">Clicks</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50 text-sm">
              {campaigns.map((c) => (
                <AnimatedRow key={c.name} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{c.name}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.statusColor}`}>{c.status}</span>
                  </td>
                  <td className="px-6 py-4 text-center font-mono font-bold text-gray-900">{c.bottles}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{c.scans}</td>
                  <td className="px-6 py-4 text-gray-600">{c.clicks}</td>
                  <td className="px-6 py-4 text-right">
                    <Link href="/sponsor/campaigns/1/analytics" className="text-xs font-bold text-[#B12B2C] hover:underline uppercase tracking-wide">
                      View →
                    </Link>
                  </td>
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
