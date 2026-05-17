import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/admin/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Campaign Detail — QR Links | FreeDrops Admin" };

const qrLinks = [
  { location: "The Dubai Mall", zone: "Ground Floor Entrance", scans: "4,218", bottles: "5,000", pct: 84, status: "Active" },
  { location: "Mall of the Emirates", zone: "Food Court", scans: "3,104", bottles: "4,000", pct: 78, status: "Active" },
  { location: "Dubai Festival City", zone: "Main Atrium", scans: "2,812", bottles: "3,500", pct: 80, status: "Active" },
  { location: "Ibn Battuta Mall", zone: "China Court", scans: "1,890", bottles: "2,500", pct: 76, status: "Paused" },
];

export default function CampaignQRLinksPage({ params }: { params: { id: string } }) {
  return (
    <AnimatedPage>
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
        <button className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm shadow-red-200">
          <Icon icon="lucide:plus" />Add QR Link
        </button>
      </div>

      <CampaignDetailTabs id={params.id} active="qr-links" />

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Location</th>
                <th className="px-6 py-4 font-semibold">Zone</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Scans</th>
                <th className="px-6 py-4 font-semibold">Bottles</th>
                <th className="px-6 py-4 font-semibold">Progress</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50 text-sm">
              {qrLinks.map((q) => (
                <AnimatedRow key={q.location} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">{q.location}</td>
                  <td className="px-6 py-4 text-gray-500">{q.zone}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${q.status === "Active" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"}`}>
                      {q.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{q.scans}</td>
                  <td className="px-6 py-4 font-mono font-bold text-gray-900">{q.bottles}</td>
                  <td className="px-6 py-4 w-40">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                        <div className="bg-[#D63839] h-1.5 rounded-full" style={{ width: `${q.pct}%` }} />
                      </div>
                      <span className="text-xs text-gray-500 w-8">{q.pct}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-gray-400 hover:text-[#D63839] transition-colors"><Icon icon="lucide:download" /></button>
                      <button className="text-gray-400 hover:text-[#D63839] transition-colors"><Icon icon="lucide:copy" /></button>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors"><Icon icon="lucide:more-horizontal" /></button>
                    </div>
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
