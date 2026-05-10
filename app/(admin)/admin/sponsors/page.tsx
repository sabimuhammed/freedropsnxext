import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsors | FreeDrops Admin" };

const sponsors = [
  { initials: "MW", name: "Masafi Water", domain: "masafi.com", industry: "Beverage", contact: "Sarah Chen", phone: "+971 50 123 4567", status: "Active", campaigns: 12, created: "Oct 12, 2023", bg: "bg-[#FEE2E3]", color: "text-[#D63839]" },
  { initials: "ET", name: "Etisalat UAE", domain: "etisalat.ae", industry: "Telecom", contact: "Omar Al-Sayed", phone: "+971 55 987 6543", status: "Active", campaigns: 8, created: "Nov 05, 2023", bg: "bg-amber-50", color: "text-amber-600" },
  { initials: "DP", name: "DP World", domain: "dpworld.com", industry: "Logistics", contact: "James Miller", phone: "+971 4 333 4444", status: "Inactive", campaigns: 5, created: "Jan 15, 2024", bg: "bg-emerald-50", color: "text-emerald-600" },
  { initials: "EK", name: "Emirates", domain: "emirates.com", industry: "Aviation", contact: "Laila Hassan", phone: "+971 52 222 1111", status: "Active", campaigns: 14, created: "Feb 10, 2024", bg: "bg-purple-50", color: "text-purple-600" },
];

export default function SponsorsPage() {
  return (
    <AnimatedPage>
    <div>
      <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sponsors</h1>
          <p className="text-sm text-gray-500">Manage and monitor sponsor accounts across the platform.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200">
          <Icon icon="lucide:plus" />Add Sponsor
        </button>
      </header>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
        <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-50">
          <div className="relative flex-1 w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <Icon icon="lucide:search" />
            </span>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#D63839] transition-all"
              placeholder="Search by name, email or contact person..."
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 bg-gray-50/50 border border-gray-200 px-3 py-2 rounded-lg">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status:</label>
              <select className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
            <div className="flex items-center gap-2 bg-gray-50/50 border border-gray-200 px-3 py-2 rounded-lg">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Industry:</label>
              <select className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer">
                <option>All Industries</option>
                <option>Beverage</option>
                <option>Telecommunications</option>
                <option>Logistics</option>
                <option>Aviation</option>
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Sponsor Name</th>
                <th className="px-6 py-4 font-semibold">Industry</th>
                <th className="px-6 py-4 font-semibold">Contact Person</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Campaigns</th>
                <th className="px-6 py-4 font-semibold">Created Date</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50">
              {sponsors.map((s) => (
                <AnimatedRow key={s.name} className="text-sm text-gray-700 hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full ${s.bg} flex items-center justify-center ${s.color} font-bold text-xs uppercase`}>
                        {s.initials}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">{s.name}</span>
                        <span className="text-[11px] text-gray-400">{s.domain}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{s.industry}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-gray-900 font-medium">{s.contact}</span>
                      <span className="text-[11px] text-gray-500">{s.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s.status === "Active" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 font-medium">
                      <Icon icon="lucide:megaphone" className="text-gray-400" />{s.campaigns}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{s.created}</td>
                  <td className="px-6 py-4 text-right">
                    <Link href="/admin/sponsors/1" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D63839] hover:text-red-800 tracking-wide uppercase">
                      View Profile<Icon icon="lucide:chevron-right" />
                    </Link>
                  </td>
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        </div>

        <div className="p-6 border-t border-gray-50 flex items-center justify-between">
          <p className="text-xs text-gray-500">Showing <span className="font-bold text-gray-900">4</span> of <span className="font-bold text-gray-900">42</span> sponsors</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
              <Icon icon="lucide:chevron-left" />
            </button>
            <button className="px-3 py-1.5 rounded-lg border border-red-200 bg-[#FEE2E3] text-[#D63839] text-xs font-bold">1</button>
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-xs font-medium hover:bg-gray-50">2</button>
            <button className="px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 text-xs font-medium hover:bg-gray-50">3</button>
            <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
              <Icon icon="lucide:chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
