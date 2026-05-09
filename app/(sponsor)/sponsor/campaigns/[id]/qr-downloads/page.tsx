import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata = { title: "QR Downloads | FreeDrops Sponsor Portal" };

const qrCodes = [
  { location: "The Dubai Mall", zone: "Main Entrance", scans: "5,218", bottles: "6,000", pct: 87 },
  { location: "Mall of the Emirates", zone: "Food Court", scans: "4,104", bottles: "5,000", pct: 82 },
  { location: "Dubai Festival City", zone: "Main Atrium", scans: "3,182", bottles: "4,000", pct: 80 },
];

export default function QRDownloadsPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <nav className="flex mb-1">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#B12B2C]">My Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Spring Oasis Launch 2024</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Spring Oasis Launch 2024</h1>
        </div>
        <button className="flex items-center gap-2 bg-[#B12B2C] hover:opacity-90 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm shadow-red-200">
          <Icon icon="lucide:download" />Download All
        </button>
      </div>

      <div className="mb-6 border-b border-gray-200">
        <nav className="flex gap-8">
          <Link href={`/sponsor/campaigns/${params.id}/analytics`} className="pb-4 text-sm font-bold text-gray-500 border-b-2 border-transparent hover:text-[#B12B2C] transition-colors">Analytics</Link>
          <Link href={`/sponsor/campaigns/${params.id}/qr-downloads`} className="pb-4 text-sm font-bold text-[#B12B2C] border-b-2 border-[#B12B2C]">QR Downloads</Link>
          <Link href={`/sponsor/campaigns/${params.id}/qr-setup`} className="pb-4 text-sm font-bold text-gray-500 border-b-2 border-transparent hover:text-[#B12B2C] transition-colors">QR Setup</Link>
          <Link href={`/sponsor/campaigns/${params.id}/creative`} className="pb-4 text-sm font-bold text-gray-500 border-b-2 border-transparent hover:text-[#B12B2C] transition-colors">Creative</Link>
        </nav>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {qrCodes.map((q) => (
          <div key={q.location} className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="font-bold text-gray-900 text-sm">{q.location}</p>
                <p className="text-xs text-gray-400">{q.zone}</p>
              </div>
              <button className="w-9 h-9 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#B12B2C] hover:border-[#B12B2C] transition-all">
                <Icon icon="lucide:download" />
              </button>
            </div>
            <div className="bg-gray-50 rounded-xl aspect-square flex items-center justify-center mb-4">
              <Icon icon="lucide:qr-code" className="text-gray-300 text-6xl" />
            </div>
            <div className="flex justify-between text-xs mb-2">
              <span className="text-gray-500">{q.scans} scans</span>
              <span className="font-bold text-gray-900">{q.pct}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div className="bg-[#B12B2C] h-1.5 rounded-full" style={{ width: `${q.pct}%` }} />
            </div>
            <p className="text-[10px] text-gray-400 mt-2">{q.scans} / {q.bottles} bottles</p>
          </div>
        ))}
      </div>
    </div>
  );
}
