import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/admin/CampaignDetailTabs";

export const metadata = { title: "Campaign Detail — Analytics | FreeDrops Admin" };

export default function CampaignAnalyticsPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-end justify-between mb-8">
        <div>
          <nav className="flex mb-1">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/admin/campaigns" className="text-gray-400 hover:text-[#D63839]">Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Summer Refresh 2024</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Summer Refresh 2024</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
          <Icon icon="lucide:download" />Export
        </button>
      </div>

      <CampaignDetailTabs id={params.id} active="analytics" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Bottles Scanned", value: "12,504", icon: "lucide:droplets", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Total Clicks", value: "3,218", icon: "lucide:mouse-pointer-click", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Unique Users", value: "9,240", icon: "lucide:users", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Conversion Rate", value: "14.0%", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
        ].map((s) => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
              <Icon icon={s.icon} className={`${s.color} text-lg`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Scan Trend</h3>
            <div className="flex border border-gray-200 rounded-lg p-1">
              {["7d", "30d", "All"].map((p) => (
                <button key={p} className={`px-3 py-1 text-xs font-medium rounded-md ${p === "30d" ? "bg-[#D63839] text-white" : "text-gray-500 hover:bg-gray-50"}`}>{p}</button>
              ))}
            </div>
          </div>
          <div className="flex items-end gap-1 h-40">
            {[30, 45, 60, 40, 75, 65, 80, 55, 90, 70, 85, 95, 88, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-red-100 rounded-t-sm" style={{ height: `${h}%` }}>
                <div className="w-full bg-[#D63839] rounded-t-sm h-full opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Scans by Location</h3>
          <div className="space-y-4">
            {[
              { name: "Dubai Mall", pct: 34 },
              { name: "Mall of Emirates", pct: 25 },
              { name: "Festival City", pct: 22 },
              { name: "Others", pct: 19 },
            ].map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-700 font-medium">{l.name}</span>
                  <span className="font-bold text-gray-900">{l.pct}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5">
                  <div className="bg-[#D63839] h-1.5 rounded-full" style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
