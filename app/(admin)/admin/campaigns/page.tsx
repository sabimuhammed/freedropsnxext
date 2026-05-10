import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Campaigns List | FreeDrops Admin" };

const campaigns = [
  { name: "Summer Splash", sponsor: "Masafi Water", status: "Live", cta: "External", start: "Jun 12, 2024", bottles: "15,000", scans: "12,504", clicks: "3,218", leads: "452", statusColor: "bg-green-50 text-green-700" },
  { name: "Fitness Village", sponsor: "Mai Dubai", status: "In Review", cta: "WhatsApp", start: "Jul 01, 2024", bottles: "10,000", scans: "8,240", clicks: "1,102", leads: "128", statusColor: "bg-amber-50 text-amber-700" },
  { name: "Back to School", sponsor: "PepsiCo", status: "Awaiting Creative", cta: "FreeDrops Form", start: "Aug 15, 2024", bottles: "20,000", scans: "0", clicks: "0", leads: "0", statusColor: "bg-purple-50 text-purple-700" },
  { name: "City Walk Launch", sponsor: "Al Ain Water", status: "Draft", cta: "External", start: "Aug 20, 2024", bottles: "5,000", scans: "0", clicks: "0", leads: "0", statusColor: "bg-blue-50 text-blue-700" },
  { name: "Arts Festival", sponsor: "Masafi Water", status: "Completed", cta: "WhatsApp", start: "May 15, 2024", bottles: "25,000", scans: "22,418", clicks: "5,602", leads: "894", statusColor: "bg-gray-100 text-gray-700" },
  { name: "Global Village Hydrate", sponsor: "Masafi Water", status: "Approved", cta: "FreeDrops Form", start: "Sep 01, 2024", bottles: "12,000", scans: "0", clicks: "0", leads: "0", statusColor: "bg-cyan-50 text-cyan-700" },
];

export default function CampaignsPage() {
  return (
    <AnimatedPage>
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/admin/dashboard" className="text-gray-400 hover:text-[#D63839]">Dashboard</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Campaigns</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Global Campaigns</h1>
        </div>
        <Link
          href="/admin/campaigns/create/step-1"
          className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-100"
        >
          <Icon icon="lucide:plus" />Create Campaign
        </Link>
      </div>

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Active", value: "42", color: "text-gray-900" },
          { label: "In Review", value: "8", color: "text-amber-600" },
          { label: "Total Scans", value: "184.2k", color: "text-gray-900" },
          { label: "Conversion", value: "12.4%", color: "text-[#D63839]" },
        ].map((s) => (
          <AnimatedCell key={s.label} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-4 border-b border-gray-100 flex flex-wrap items-center gap-4 bg-gray-50/30">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search campaign or sponsor..." className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#D63839]/20 outline-none transition-all" />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 focus:ring-2 focus:ring-[#D63839]/20 outline-none">
              <option>All Statuses</option>
              <option>Draft</option>
              <option>In Review</option>
              <option>Awaiting Creative</option>
              <option>Approved</option>
              <option>Live</option>
              <option>Completed</option>
            </select>
            <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 focus:ring-2 focus:ring-[#D63839]/20 outline-none">
              <option>All Sponsors</option>
              <option>Masafi Water</option>
              <option>Mai Dubai</option>
              <option>Al Ain Water</option>
              <option>PepsiCo</option>
            </select>
            <button className="text-[#D63839] text-sm font-bold hover:underline">Clear All</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white border-b border-gray-100">
              <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-4">Campaign Name</th>
                <th className="px-6 py-4">Sponsor</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">CTA Type</th>
                <th className="px-6 py-4">Start Date</th>
                <th className="px-6 py-4 text-center">Total Bottles</th>
                <th className="px-6 py-4">Scans</th>
                <th className="px-6 py-4">Clicks</th>
                <th className="px-6 py-4">Leads</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50 text-sm bg-white">
              {campaigns.map((c) => (
                <AnimatedRow key={c.name} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{c.name}</td>
                  <td className="px-6 py-4 font-medium text-gray-600">{c.sponsor}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.statusColor}`}>{c.status}</span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{c.cta}</td>
                  <td className="px-6 py-4 text-gray-600">{c.start}</td>
                  <td className="px-6 py-4 text-center font-mono font-bold text-gray-900">{c.bottles}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{c.scans}</td>
                  <td className="px-6 py-4 text-gray-600">{c.clicks}</td>
                  <td className="px-6 py-4 text-gray-600">{c.leads}</td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <Link href="/admin/campaigns/1/overview" className="text-[#D63839] hover:text-red-800 font-bold text-xs uppercase">View</Link>
                  </td>
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
          <p className="text-xs text-gray-500 font-medium">Showing 6 of 84 total campaigns</p>
          <div className="flex items-center gap-2">
            <button className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-30" disabled><Icon icon="lucide:chevron-left" /></button>
            <button className="px-3 py-1 text-xs font-bold bg-white border border-gray-200 rounded text-[#D63839] shadow-sm">1</button>
            <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded transition-colors">2</button>
            <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded transition-colors">3</button>
            <button className="p-2 text-gray-400 hover:text-gray-900"><Icon icon="lucide:chevron-right" /></button>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
