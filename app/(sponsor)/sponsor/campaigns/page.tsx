import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "My Campaigns | FreeDrops Sponsor Portal" };

const campaigns = [
  { name: "Summer Splash", status: "Live", cta: "External URL", start: "Jun 12, 2024", bottles: "15,000", scans: "12,504", statusColor: "bg-green-50 text-green-700" },
  { name: "Fitness Village", status: "In Review", cta: "WhatsApp", start: "Jul 01, 2024", bottles: "10,000", scans: "0", statusColor: "bg-amber-50 text-amber-700" },
  { name: "Spring Oasis", status: "Approved", cta: "FreeDrops Form", start: "Aug 15, 2024", bottles: "20,000", scans: "0", statusColor: "bg-cyan-50 text-cyan-700" },
  { name: "Back to School", status: "Draft", cta: "External URL", start: "—", bottles: "5,000", scans: "0", statusColor: "bg-blue-50 text-blue-700" },
];

export default function MyCampaignsPage() {
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Campaigns</h1>
          <p className="text-sm text-gray-500 mt-1">Track all your active and upcoming hydration campaigns.</p>
        </div>
        <Link
          href="/sponsor/campaigns/create/step-1"
          className="flex items-center gap-2 bg-[#B12B2C] hover:opacity-90 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shadow-red-200"
        >
          <Icon icon="lucide:plus" />New Campaign Request
        </Link>
      </div>

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total", value: "4", color: "text-gray-900" },
          { label: "Live", value: "1", color: "text-green-600" },
          { label: "In Review", value: "1", color: "text-amber-600" },
          { label: "Total Scans", value: "12,504", color: "text-[#B12B2C]" },
        ].map((s) => (
          <AnimatedCell key={s.label} className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1">
            <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search campaigns..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#B12B2C]/20" />
          </div>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
            <option>All Statuses</option>
            <option>Live</option>
            <option>In Review</option>
            <option>Draft</option>
            <option>Completed</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Campaign Name</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">CTA Type</th>
                <th className="px-6 py-4 font-semibold">Start Date</th>
                <th className="px-6 py-4 font-semibold text-center">Bottles</th>
                <th className="px-6 py-4 font-semibold">Scans</th>
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
                  <td className="px-6 py-4 text-gray-500">{c.cta}</td>
                  <td className="px-6 py-4 text-gray-600">{c.start}</td>
                  <td className="px-6 py-4 text-center font-mono font-bold text-gray-900">{c.bottles}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{c.scans}</td>
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
