import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Locations Management | FreeDrops Admin" };

const locations = [
  { name: "The Dubai Mall", area: "Downtown Dubai", emirate: "Dubai", type: "Mall", qrCodes: 8, status: "Active" },
  { name: "Mall of the Emirates", area: "Al Barsha", emirate: "Dubai", type: "Mall", qrCodes: 6, status: "Active" },
  { name: "Dubai Festival City", area: "Festival City", emirate: "Dubai", type: "Mall", qrCodes: 4, status: "Active" },
  { name: "Global Village", area: "Sheikh Mohammed Bin Zayed Rd", emirate: "Dubai", type: "Event", qrCodes: 12, status: "Seasonal" },
  { name: "Abu Dhabi Mall", area: "Tourist Club Area", emirate: "Abu Dhabi", type: "Mall", qrCodes: 5, status: "Active" },
  { name: "Yas Mall", area: "Yas Island", emirate: "Abu Dhabi", type: "Mall", qrCodes: 7, status: "Active" },
];

export default function LocationsManagementPage() {
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Locations Management</h1>
          <p className="text-sm text-gray-500 mt-1">All distribution points across the UAE.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all">
            <Icon icon="lucide:download" />Export
          </button>
          <button className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200">
            <Icon icon="lucide:plus" />Add Location
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search locations..." className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839]/20" />
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
              <option>All Emirates</option>
              <option>Dubai</option>
              <option>Abu Dhabi</option>
              <option>Sharjah</option>
            </select>
            <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none">
              <option>All Types</option>
              <option>Mall</option>
              <option>Event</option>
              <option>Gym</option>
              <option>Office</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Location Name</th>
                <th className="px-6 py-4 font-semibold">Area</th>
                <th className="px-6 py-4 font-semibold">Emirate</th>
                <th className="px-6 py-4 font-semibold">Type</th>
                <th className="px-6 py-4 font-semibold">QR Codes</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50 text-sm">
              {locations.map((l) => (
                <AnimatedRow key={l.name} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-900">{l.name}</td>
                  <td className="px-6 py-4 text-gray-600">{l.area}</td>
                  <td className="px-6 py-4 text-gray-600">{l.emirate}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">{l.type}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{l.qrCodes}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      l.status === "Active" ? "bg-green-50 text-green-700" : "bg-amber-50 text-amber-700"
                    }`}>{l.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-gray-400 hover:text-[#D63839]"><Icon icon="lucide:edit-3" /></button>
                      <button className="text-gray-400 hover:text-red-500"><Icon icon="lucide:trash-2" /></button>
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
