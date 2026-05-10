import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Manage Emirates | FreeDrops Admin" };

const emirates = [
  { name: "Dubai", locations: 48, activeCampaigns: 14, bottles: "85,000", color: "bg-red-50 text-[#D63839]" },
  { name: "Abu Dhabi", locations: 32, activeCampaigns: 9, bottles: "52,000", color: "bg-blue-50 text-blue-600" },
  { name: "Sharjah", locations: 18, activeCampaigns: 5, bottles: "28,000", color: "bg-amber-50 text-amber-600" },
  { name: "Ajman", locations: 12, activeCampaigns: 3, bottles: "14,000", color: "bg-emerald-50 text-emerald-600" },
  { name: "Ras Al Khaimah", locations: 8, activeCampaigns: 2, bottles: "10,000", color: "bg-purple-50 text-purple-600" },
  { name: "Fujairah", locations: 6, activeCampaigns: 1, bottles: "5,000", color: "bg-slate-50 text-slate-600" },
  { name: "Umm Al Quwain", locations: 4, activeCampaigns: 1, bottles: "3,000", color: "bg-pink-50 text-pink-600" },
];

export default function ManageEmiratesPage() {
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Emirates</h1>
          <p className="text-sm text-gray-500 mt-1">Overview of all 7 UAE emirates and their campaign activity.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200">
          <Icon icon="lucide:plus" />Add Location
        </button>
      </div>

      <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {emirates.map((e) => (
          <AnimatedCell key={e.name} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#D63839] transition-all cursor-pointer">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl ${e.color.split(" ")[0]} flex items-center justify-center`}>
                <Icon icon="lucide:map-pin" className={`${e.color.split(" ")[1]} text-xl`} />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{e.activeCampaigns} campaigns</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{e.name}</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Locations</p>
                <p className="font-bold text-gray-900 mt-0.5">{e.locations}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Bottles/Month</p>
                <p className="font-bold text-gray-900 mt-0.5">{e.bottles}</p>
              </div>
            </div>
          </AnimatedCell>
        ))}
      </AnimatedGrid>
    </div>
    </AnimatedPage>
  );
}
