import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/admin/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Campaign Detail — Overview | FreeDrops Admin" };

export default function CampaignOverviewPage({ params }: { params: { id: string } }) {
  return (
    <AnimatedPage>
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/admin/campaigns" className="text-gray-400 hover:text-[#D63839]">Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Summer Refresh 2024</span></li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mt-1">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Summer Refresh 2024</h1>
            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">Live</span>
          </div>
          <p className="text-sm text-gray-500">Managed for <span className="font-semibold text-gray-700">Al Ain Water</span> • ID: FD-SUMMER-24-001</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
            <Icon icon="lucide:edit-3" /> Edit
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded-xl hover:bg-amber-100 transition-all">
            <Icon icon="lucide:pause-circle" /> Pause
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gray-900 rounded-xl hover:bg-black transition-all shadow-lg shadow-gray-200">
            Mark Completed
          </button>
        </div>
      </div>

      <CampaignDetailTabs id={params.id} active="overview" />

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Bottles Scanned", value: "12,504", sub: "83.4% of 15,000", icon: "lucide:droplets", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Total Clicks", value: "3,218", sub: "25.7% CTR", icon: "lucide:mouse-pointer-click", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Leads Captured", value: "452", sub: "14.0% lead rate", icon: "lucide:users", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Conversion Rate", value: "14.0%", sub: "+2.1% vs avg", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
        ].map((s) => (
          <AnimatedCell key={s.label} className="detail-card p-5 rounded-2xl">
            <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
              <Icon icon={s.icon} className={`${s.color} text-lg`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{s.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
            <p className="text-xs text-gray-500 mt-1">{s.sub}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Campaign Details</h3>
          <dl className="space-y-3 text-sm">
            {[
              { label: "Sponsor", value: "Al Ain Water" },
              { label: "Start Date", value: "Jun 12, 2024" },
              { label: "End Date", value: "Aug 31, 2024" },
              { label: "CTA Type", value: "External URL" },
              { label: "Total Bottles", value: "15,000" },
              { label: "Locations", value: "12 (Dubai)" },
            ].map((r) => (
              <div key={r.label} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                <dt className="text-gray-500">{r.label}</dt>
                <dd className="font-semibold text-gray-900">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-4">Scan Activity (Last 7 Days)</h3>
          <div className="flex items-end gap-2 h-32">
            {[40, 65, 80, 55, 90, 75, 95].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-red-100 rounded-t-md" style={{ height: `${h}%` }}>
                  <div className="w-full bg-[#D63839] rounded-t-md h-full opacity-80" />
                </div>
                <span className="text-[10px] text-gray-400">{["M","T","W","T","F","S","S"][i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
