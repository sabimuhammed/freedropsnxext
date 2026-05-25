import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsor Profile — Assets & Media | FreeDrops" };

const assets = [
  { name: "Masafi_Logo_Primary.svg", type: "SVG", size: "24 KB", category: "Logo", date: "Jun 01, 2024" },
  { name: "Masafi_Logo_White.png", type: "PNG", size: "86 KB", category: "Logo", date: "Jun 01, 2024" },
  { name: "Summer_Banner_1200x628.jpg", type: "JPG", size: "312 KB", category: "Banner", date: "Jun 10, 2024" },
  { name: "Brand_Guidelines_2024.pdf", type: "PDF", size: "4.2 MB", category: "Guidelines", date: "May 15, 2024" },
  { name: "Campaign_Video_15s.mp4", type: "MP4", size: "18.4 MB", category: "Video", date: "Jun 12, 2024" },
  { name: "Masafi_Icon_Rounded.png", type: "PNG", size: "42 KB", category: "Logo", date: "Jun 01, 2024" },
];

const typeIcon: Record<string, string> = {
  SVG: "lucide:file-code",
  PNG: "lucide:image",
  JPG: "lucide:image",
  PDF: "lucide:file-text",
  MP4: "lucide:video",
};

const typeColor: Record<string, string> = {
  SVG: "text-purple-600 bg-purple-50",
  PNG: "text-blue-600 bg-blue-50",
  JPG: "text-blue-600 bg-blue-50",
  PDF: "text-red-600 bg-red-50",
  MP4: "text-emerald-600 bg-emerald-50",
};

export default function SponsorAssetsPage() {
  return (
    <AnimatedPage>
      <div>
        {/* Breadcrumb + Actions */}
        <div className="flex items-center justify-between mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/admin/sponsors" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#D63839]">
                  Sponsors
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <Icon icon="lucide:chevron-right" className="text-gray-400" />
                  <span className="ml-1 text-sm font-bold text-gray-900 md:ml-2 tracking-tight">Masafi Water</span>
                </div>
              </li>
            </ol>
          </nav>
          <button className="flex items-center gap-2 bg-[#D63839] hover:bg-[#C42F37] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200">
            <Icon icon="lucide:upload" />Upload Asset
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <Link href="/admin/sponsors/1" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium border-b-2 tracking-tight">
              Overview
            </Link>
            <a href="#" className="tab-active whitespace-nowrap py-4 px-1 text-sm font-bold border-b-2 tracking-tight">
              Assets &amp; Media
            </a>
            <Link href="/admin/sponsors/1/campaigns" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium border-b-2 tracking-tight">
              Campaign History
            </Link>
          </nav>
        </div>

        {/* Summary cards */}
        <AnimatedGrid className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Assets", value: "6", icon: "lucide:folder", color: "text-[#D63839]", bg: "bg-red-50" },
            { label: "Logos", value: "3", icon: "lucide:image", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "Videos", value: "1", icon: "lucide:video", color: "text-emerald-600", bg: "bg-emerald-50" },
            { label: "Total Size", value: "23.1 MB", icon: "lucide:hard-drive", color: "text-purple-600", bg: "bg-purple-50" },
          ].map((s) => (
            <AnimatedCell key={s.label} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`}>
                  <Icon icon={s.icon} className="text-xl" />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500">{s.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{s.value}</h3>
            </AnimatedCell>
          ))}
        </AnimatedGrid>

        {/* Assets table */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex items-center gap-4">
            <div className="relative flex-1 max-w-xs">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search assets..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839]/20" />
            </div>
            <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
              <option>All Types</option>
              <option>Logo</option>
              <option>Banner</option>
              <option>Guidelines</option>
              <option>Video</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <th className="px-6 py-4">File</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Size</th>
                  <th className="px-6 py-4">Uploaded</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm">
                {assets.map((a) => (
                  <tr key={a.name} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${typeColor[a.type]}`}>
                          <Icon icon={typeIcon[a.type]} className="text-base" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{a.name}</p>
                          <span className="text-[10px] font-bold text-gray-400">{a.type}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">{a.category}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{a.size}</td>
                    <td className="px-6 py-4 text-gray-600">{a.date}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button className="text-gray-400 hover:text-gray-700 transition-colors" title="Download">
                          <Icon icon="lucide:download" />
                        </button>
                        <button className="text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                          <Icon icon="lucide:trash-2" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
