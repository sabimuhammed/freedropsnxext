import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsor Profile — Masafi Water | FreeDrops" };

export default function SponsorProfilePage() {
  return (
    <AnimatedPage>
    <div>
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2 text-xs">
          <li><Link href="/admin/sponsors" className="text-gray-400 hover:text-[#D63839]">Sponsors</Link></li>
          <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
          <li><span className="font-bold text-gray-900">Masafi Water</span></li>
        </ol>
      </nav>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#FEE2E3] flex items-center justify-center text-[#D63839] font-bold text-xl">MW</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Masafi Water</h1>
            <p className="text-sm text-gray-500">masafi.com • Beverage Industry</p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-green-50 text-green-700 border border-green-100">Active</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
            <Icon icon="lucide:edit-3" />Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-[#D63839] rounded-xl hover:opacity-90 transition-all shadow-sm shadow-red-200">
            <Icon icon="lucide:plus" />Add Campaign
          </button>
        </div>
      </div>

      <div className="mb-6 border-b border-gray-200">
        <nav className="flex gap-8">
          <Link href="/admin/sponsors/1" className="pb-4 text-sm font-bold text-[#D63839] border-b-2 border-[#D63839] flex items-center gap-2">Overview</Link>
          <Link href="/admin/sponsors/1/campaigns" className="pb-4 text-sm font-bold text-gray-500 border-b-2 border-transparent hover:text-[#D63839] transition-colors flex items-center gap-2">
            Campaigns <span className="px-1.5 py-0.5 bg-gray-100 text-[10px] rounded text-gray-500">12</span>
          </Link>
        </nav>
      </div>

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Total Campaigns", value: "12", icon: "lucide:megaphone", color: "text-[#D63839]", bg: "bg-red-50" },
          { label: "Total Scans", value: "48,204", icon: "lucide:droplets", color: "text-emerald-600", bg: "bg-emerald-50" },
          { label: "Total Leads", value: "3,812", icon: "lucide:users", color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Avg. Conversion", value: "7.9%", icon: "lucide:trending-up", color: "text-purple-600", bg: "bg-purple-50" },
        ].map((s) => (
          <AnimatedCell key={s.label} className="stat-card p-5 rounded-2xl">
            <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
              <Icon icon={s.icon} className={`${s.color} text-lg`} />
            </div>
            <p className="text-xl font-bold text-gray-900">{s.value}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">{s.label}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
          <dl className="space-y-4 text-sm">
            {[
              { label: "Contact Person", value: "Sarah Chen" },
              { label: "Email", value: "sarah.chen@masafi.com" },
              { label: "Phone", value: "+971 50 123 4567" },
              { label: "Account Manager", value: "Ahmed Salem" },
              { label: "Member Since", value: "October 12, 2023" },
            ].map((r) => (
              <div key={r.label} className="flex justify-between">
                <dt className="text-gray-500">{r.label}</dt>
                <dd className="font-medium text-gray-900">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-4">Recent Campaigns</h3>
          <div className="space-y-3">
            {[
              { name: "Summer Splash", status: "Live", scans: "12,504", statusColor: "bg-green-50 text-green-700" },
              { name: "Arts Festival", status: "Completed", scans: "22,418", statusColor: "bg-gray-100 text-gray-600" },
              { name: "Global Village", status: "Approved", scans: "0", statusColor: "bg-cyan-50 text-cyan-700" },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{c.name}</p>
                  <p className="text-xs text-gray-500">{c.scans} scans</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${c.statusColor}`}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
