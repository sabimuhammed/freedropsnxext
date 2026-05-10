import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsor Profile — Campaigns | FreeDrops" };

const campaigns = [
  { name: "Summer Splash", status: "Live", cta: "External URL", start: "Jun 12, 2024", bottles: "15,000", scans: "12,504", statusColor: "bg-green-50 text-green-700" },
  { name: "Arts Festival", status: "Completed", cta: "WhatsApp", start: "May 15, 2024", bottles: "25,000", scans: "22,418", statusColor: "bg-gray-100 text-gray-700" },
  { name: "Global Village", status: "Approved", cta: "FreeDrops Form", start: "Sep 01, 2024", bottles: "12,000", scans: "0", statusColor: "bg-cyan-50 text-cyan-700" },
];

export default function SponsorCampaignsPage() {
  return (
    <AnimatedPage>
    <div>
      <nav className="flex mb-4" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-2 text-xs">
          <li><Link href="/admin/sponsors" className="text-gray-400 hover:text-[#D63839]">Sponsors</Link></li>
          <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
          <li><Link href="/admin/sponsors/1" className="text-gray-400 hover:text-[#D63839]">Masafi Water</Link></li>
          <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
          <li><span className="font-bold text-gray-900">Campaigns</span></li>
        </ol>
      </nav>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl bg-[#FEE2E3] flex items-center justify-center text-[#D63839] font-bold text-xl">MW</div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Masafi Water — Campaigns</h1>
          <p className="text-sm text-gray-500">12 campaigns total</p>
        </div>
      </div>

      <div className="mb-6 border-b border-gray-200">
        <nav className="flex gap-8">
          <Link href="/admin/sponsors/1" className="pb-4 text-sm font-bold text-gray-500 border-b-2 border-transparent hover:text-[#D63839] transition-colors">Overview</Link>
          <Link href="/admin/sponsors/1/campaigns" className="pb-4 text-sm font-bold text-[#D63839] border-b-2 border-[#D63839] flex items-center gap-2">
            Campaigns <span className="px-1.5 py-0.5 bg-gray-100 text-[10px] rounded text-gray-500">12</span>
          </Link>
        </nav>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Campaign Name</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">CTA Type</th>
                <th className="px-6 py-4 font-semibold">Start Date</th>
                <th className="px-6 py-4 font-semibold text-center">Total Bottles</th>
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
                    <Link href="/admin/campaigns/1/overview" className="text-xs font-bold text-[#D63839] hover:text-red-800 uppercase tracking-wide">View →</Link>
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
