import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";
import AnalyticsTables from "@/components/admin/AnalyticsTables";

export const metadata = { title: "Analytics | FreeDrops Admin" };

const stats = [
  { label: "Total Scans", value: "142,890", icon: "lucide:scan", color: "text-[#D63839]", bg: "bg-red-50" },
  { label: "Unique Users", value: "98,340", icon: "lucide:users", color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Total Clicks", value: "12,402", icon: "lucide:mouse-pointer-click", color: "text-emerald-600", bg: "bg-emerald-50" },
  { label: "Total Leads", value: "842", icon: "lucide:user-check", color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Avg. Conversion", value: "6.8%", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
];


const topLocations = [
  { name: "Dubai Mall - P3 Entrance", scans: "42,109", pct: 29 },
  { name: "DXB Terminal 3 - B22", scans: "38,402", pct: 27 },
  { name: "JBR Walk - Station 4", scans: "29,551", pct: 21 },
  { name: "Emirates Mall - Food Court", scans: "22,102", pct: 15 },
  { name: "Others", scans: "10,726", pct: 8 },
];

const scanTrend = [30, 45, 38, 60, 40, 75, 65, 80, 55, 90, 70, 85, 95, 88, 100, 78, 92, 84, 96, 72, 88, 94, 80, 76, 90, 85, 98, 91, 87, 100];

export default function AdminAnalyticsPage() {
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-sm text-gray-500">Network-wide performance overview</p>
        </div>
        <div className="flex border border-gray-200 rounded-lg bg-white p-1">
          <button className="px-3 py-1.5 text-xs font-semibold rounded-md bg-[#D63839] text-white">30d</button>
          <button className="px-3 py-1.5 text-xs font-medium rounded-md text-gray-500 hover:bg-gray-50">7d</button>
          <button className="px-3 py-1.5 text-xs font-medium rounded-md text-gray-500 hover:bg-gray-50">All</button>
        </div>
      </div>

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {stats.map((s) => (
          <AnimatedCell key={s.label} className="bg-white border border-gray-200 rounded-2xl p-5">
            <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
              <Icon icon={s.icon} className={`${s.color} text-lg`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-6">Scan Trend (30 days)</h3>
          <div className="flex items-end gap-1 h-40">
            {scanTrend.map((h, i) => (
              <div key={i} className="flex-1 bg-red-50 rounded-t-sm" style={{ height: `${h}%` }}>
                <div className="w-full bg-[#D63839] rounded-t-sm h-full opacity-70 hover:opacity-100 transition-opacity cursor-pointer" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Scans by Location</h3>
          <div className="space-y-4">
            {topLocations.map((l) => (
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

      <AnalyticsTables />
    </div>
    </AnimatedPage>
  );
}
