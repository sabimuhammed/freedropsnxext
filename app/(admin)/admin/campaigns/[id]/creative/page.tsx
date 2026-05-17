import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/admin/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Campaign Detail — Creative | FreeDrops Admin" };

const assets = [
  { name: "Main Banner", type: "Image", format: "PNG", size: "1200×600px", status: "Approved", uploaded: "Jun 10, 2024" },
  { name: "QR Sticker Design", type: "Vector", format: "SVG", size: "500×500px", status: "Approved", uploaded: "Jun 10, 2024" },
  { name: "Side Panel Art", type: "Image", format: "JPG", size: "300×600px", status: "Pending Review", uploaded: "Jun 12, 2024" },
  { name: "Logo Pack", type: "ZIP", format: "ZIP", size: "—", status: "Approved", uploaded: "Jun 08, 2024" },
];

const statusColors: Record<string, string> = {
  Approved: "bg-green-50 text-green-700",
  "Pending Review": "bg-amber-50 text-amber-700",
  Rejected: "bg-red-50 text-red-700",
};

export default function CampaignCreativePage({ params }: { params: { id: string } }) {
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
          <Icon icon="lucide:upload" />Upload Asset
        </button>
      </div>

      <CampaignDetailTabs id={params.id} active="creative" />

      <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {assets.map((a) => (
          <AnimatedCell key={a.name} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#D63839] transition-all">
            <div className="bg-gray-50 h-36 flex items-center justify-center">
              <Icon icon={a.format === "SVG" ? "lucide:image" : a.format === "ZIP" ? "lucide:archive" : "lucide:image"} className="text-4xl text-gray-300" />
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-bold text-gray-900">{a.name}</p>
                  <p className="text-xs text-gray-400">{a.format} • {a.size}</p>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${statusColors[a.status]}`}>{a.status}</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Uploaded {a.uploaded}</p>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-50">
                <button className="flex-1 text-xs font-bold text-[#D63839] hover:underline">Approve</button>
                <button className="flex-1 text-xs font-bold text-gray-400 hover:text-gray-600">Reject</button>
                <button className="text-gray-400 hover:text-gray-600"><Icon icon="lucide:download" className="text-sm" /></button>
              </div>
            </div>
          </AnimatedCell>
        ))}
      </AnimatedGrid>
    </div>
    </AnimatedPage>
  );
}
