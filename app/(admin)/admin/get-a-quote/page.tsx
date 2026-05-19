import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Get a Quote Data | FreeDrops Admin" };

const ctaColors: Record<string, string> = {
  "LEAD CAPTURE": "bg-blue-50 text-blue-700",
  "WHATSAPP INQUIRIES": "bg-green-50 text-green-700",
  "COUPON CLAIMS": "bg-orange-50 text-orange-700",
  "BRAND AWARENESS": "bg-purple-50 text-purple-700",
};

const quotes = [
  {
    name: "Mohammed Al-Fayed",
    phone: "+971 50 123 4567",
    email: "m.fayed@company.com",
    ctaType: "LEAD CAPTURE",
    notes: "Looking for Q4 product launch drive...",
    placement: "Airports, Partner Locations",
    placementIcon: "lucide:plane",
    budget: "50,000 AED",
    launchTime: "within a week",
    urgent: true,
  },
  {
    name: "Sarah Jenkins",
    phone: "+971 52 987 6543",
    email: "sarah.j@brand.ae",
    ctaType: "WHATSAPP INQUIRIES",
    notes: "Direct booking flow for seasonal salon offers.",
    placement: "Events",
    placementIcon: "lucide:calendar",
    budget: "15,000 AED",
    launchTime: "within 2 weeks",
    urgent: false,
  },
  {
    name: "Rajesh Gupta",
    phone: "+971 58 445 2210",
    email: "r.gupta@marketingpro.com",
    ctaType: "COUPON CLAIMS",
    notes: "Redemption codes for new outlet opening.",
    placement: "All Emirates",
    placementIcon: "lucide:map",
    budget: "120,000 AED",
    launchTime: "within a month",
    urgent: false,
  },
  {
    name: "John Doe",
    phone: "+971 55 000 1111",
    email: "john@startup.co",
    ctaType: "BRAND AWARENESS",
    notes: "Notes: High traffic areas preferred.",
    placement: "Airports",
    placementIcon: "lucide:map-pin",
    budget: "25,000 AED",
    launchTime: "within a week",
    urgent: true,
  },
];

export default function GetAQuotePage() {
  return (
    <AnimatedPage>
      <div>
        <div className="mb-8 space-y-1">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/admin/dashboard" className="text-gray-400 hover:text-[#D63839]">Dashboard</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Get a Quote Data</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Quote Requests</h1>
          <p className="text-sm text-gray-500">Manage inquiries and campaign leads from the &quot;Get a Quote&quot; portal</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="p-4 border-b border-gray-100 bg-gray-50/30">
            <div className="relative max-w-sm">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#D63839]/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white border-b border-gray-100">
                <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <th className="px-6 py-4">Sender / Contact</th>
                  <th className="px-6 py-4">Campaign Details</th>
                  <th className="px-6 py-4">Placement &amp; Timeline</th>
                  <th className="px-6 py-4">Budget</th>
                  <th className="px-6 py-4">Launch Time</th>
                </tr>
              </thead>
              <AnimatedTbody className="divide-y divide-gray-50 text-sm bg-white">
                {quotes.map((q) => (
                  <AnimatedRow key={q.email} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-5">
                      <p className="font-bold text-gray-900">{q.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{q.phone}</p>
                      <p className="text-xs text-gray-400">{q.email}</p>
                    </td>
                    <td className="px-6 py-5 max-w-[260px]">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide mb-1.5 ${ctaColors[q.ctaType] ?? "bg-gray-100 text-gray-700"}`}>
                        {q.ctaType}
                      </span>
                      <p className="text-sm text-gray-600">{q.notes}</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1.5 text-gray-600 text-sm">
                        <Icon icon={q.placementIcon} className="text-gray-400" />
                        {q.placement}
                      </div>
                    </td>
                    <td className="px-6 py-5 font-semibold text-gray-900">{q.budget}</td>
                    <td className="px-6 py-5">
                      <span className={q.urgent ? "font-semibold text-[#D63839]" : "text-gray-600"}>
                        {q.launchTime}
                      </span>
                    </td>
                  </AnimatedRow>
                ))}
              </AnimatedTbody>
            </table>
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <p className="text-xs text-gray-500 font-medium">
              Showing <span className="font-bold text-gray-900">4</span> of <span className="font-bold text-gray-900">24</span> New Requests
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-xs font-medium text-gray-400 bg-white border border-gray-200 rounded-lg cursor-not-allowed" disabled>
                Previous
              </button>
              <button className="px-4 py-2 text-xs font-semibold text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
