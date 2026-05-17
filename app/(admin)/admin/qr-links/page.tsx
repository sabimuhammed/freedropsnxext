import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell, AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "QR Links — Global | FreeDrops Admin" };

const qrLinks = [
  { campaign: "Summer Splash", sponsor: "Masafi Water", location: "Dubai Mall", bottles: "15,000", scans: "12,504", pct: 83, status: "Active" },
  { campaign: "Fitness Village", sponsor: "Mai Dubai", location: "Mall of Emirates", bottles: "10,000", scans: "8,240", pct: 82, status: "Active" },
  { campaign: "Arts Festival", sponsor: "Masafi Water", location: "City Walk", bottles: "25,000", scans: "22,418", pct: 90, status: "Completed" },
  { campaign: "Back to School", sponsor: "PepsiCo", location: "Ibn Battuta", bottles: "20,000", scans: "0", pct: 0, status: "Pending" },
];

export default function QRLinksGlobalPage() {
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <nav className="flex mb-1">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/admin/dashboard" className="text-gray-400 hover:text-[#D63839]">Dashboard</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">QR Links</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Global QR Links</h1>
          <p className="text-sm text-gray-500 mt-1">All QR codes across all campaigns and locations.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
          <Icon icon="lucide:download" />Export
        </button>
      </div>

      <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total QR Codes", value: "1,204", color: "text-gray-900" },
          { label: "Active", value: "986", color: "text-green-600" },
          { label: "Total Scans", value: "184.2k", color: "text-gray-900" },
          { label: "Avg. Scan Rate", value: "15.3%", color: "text-[#D63839]" },
        ].map((s) => (
          <AnimatedCell key={s.label} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
          </AnimatedCell>
        ))}
      </AnimatedGrid>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="relative flex-1">
            <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search QR codes..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839]/20" />
          </div>
          <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Pending</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Campaign</th>
                <th className="px-6 py-4 font-semibold">Sponsor</th>
                <th className="px-6 py-4 font-semibold">Location</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-center">Bottles</th>
                <th className="px-6 py-4 font-semibold">Scans</th>
                <th className="px-6 py-4 font-semibold">Progress</th>
                <th className="px-6 py-4 font-semibold">QR Code</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50 text-sm">
              {qrLinks.map((q) => (
                <AnimatedRow key={`${q.campaign}-${q.location}`} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">{q.campaign}</td>
                  <td className="px-6 py-4 text-gray-600">{q.sponsor}</td>
                  <td className="px-6 py-4 text-gray-600">{q.location}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      q.status === "Active" ? "bg-green-50 text-green-700" :
                      q.status === "Completed" ? "bg-gray-100 text-gray-600" :
                      "bg-amber-50 text-amber-700"
                    }`}>{q.status}</span>
                  </td>
                  <td className="px-6 py-4 text-center font-mono font-bold text-gray-900">{q.bottles}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{q.scans}</td>
                  <td className="px-6 py-4 w-36">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                        <div className="bg-[#D63839] h-1.5 rounded-full" style={{ width: `${q.pct}%` }} />
                      </div>
                      <span className="text-xs text-gray-500 w-8">{q.pct}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <img src="/qr8.png" alt="QR Code" className="w-12 h-12 rounded" />
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-[#D63839]"><Icon icon="lucide:download" /></button>
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
