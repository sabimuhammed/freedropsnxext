"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

const INITIAL_LOCATIONS = [
  { name: "The Dubai Mall", area: "Downtown Dubai", emirate: "Dubai", type: "Mall", qrCodes: 8, status: "Active" },
  { name: "Mall of the Emirates", area: "Al Barsha", emirate: "Dubai", type: "Mall", qrCodes: 6, status: "Active" },
  { name: "Dubai Festival City", area: "Festival City", emirate: "Dubai", type: "Mall", qrCodes: 4, status: "Active" },
  { name: "Global Village", area: "Sheikh Mohammed Bin Zayed Rd", emirate: "Dubai", type: "Event", qrCodes: 12, status: "Seasonal" },
  { name: "Abu Dhabi Mall", area: "Tourist Club Area", emirate: "Abu Dhabi", type: "Mall", qrCodes: 5, status: "Active" },
  { name: "Yas Mall", area: "Yas Island", emirate: "Abu Dhabi", type: "Mall", qrCodes: 7, status: "Active" },
];

const EMPTY_FORM = { name: "", area: "", emirate: "Dubai", type: "Mall", status: "Active" };

export default function LocationsManagementPage() {
  const [locations, setLocations] = useState(INITIAL_LOCATIONS);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [search, setSearch] = useState("");
  const [filterEmirate, setFilterEmirate] = useState("All Emirates");
  const [filterType, setFilterType] = useState("All Types");
  const [filterStatus, setFilterStatus] = useState("All Statuses");

  const filtered = locations.filter((l) => {
    const matchSearch = l.name.toLowerCase().includes(search.toLowerCase()) || l.area.toLowerCase().includes(search.toLowerCase());
    const matchEmirate = filterEmirate === "All Emirates" || l.emirate === filterEmirate;
    const matchType = filterType === "All Types" || l.type === filterType;
    const matchStatus = filterStatus === "All Statuses" || l.status === filterStatus;
    return matchSearch && matchEmirate && matchType && matchStatus;
  });

  function openAdd() {
    setEditIndex(null);
    setForm(EMPTY_FORM);
    setShowModal(true);
  }

  function openEdit(index: number) {
    const l = locations[index];
    setEditIndex(index);
    setForm({ name: l.name, area: l.area, emirate: l.emirate, type: l.type, status: l.status });
    setShowModal(true);
  }

  function handleDelete(index: number) {
    setLocations((prev) => prev.filter((_, i) => i !== index));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.area.trim()) return;
    if (editIndex !== null) {
      setLocations((prev) => prev.map((l, i) => i === editIndex ? { ...l, ...form, name: form.name.trim(), area: form.area.trim() } : l));
    } else {
      setLocations((prev) => [...prev, { ...form, name: form.name.trim(), area: form.area.trim(), qrCodes: 0 }]);
    }
    setForm(EMPTY_FORM);
    setShowModal(false);
  }

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
          <button
            onClick={openAdd}
            className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200"
          >
            <Icon icon="lucide:plus" />Add Location
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
        <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839]/20"
            />
          </div>
          <div className="flex items-center gap-3">
            <select
              value={filterEmirate}
              onChange={(e) => setFilterEmirate(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none"
            >
              <option>All Emirates</option>
              {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].map((e) => <option key={e}>{e}</option>)}
            </select>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none"
            >
              <option>All Types</option>
              {["Mall", "Event", "Gym", "Office", "Airport", "Hospital"].map((t) => <option key={t}>{t}</option>)}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 focus:outline-none"
            >
              <option>All Statuses</option>
              {["Active", "Seasonal", "Inactive"].map((s) => <option key={s}>{s}</option>)}
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
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-6 py-10 text-center text-sm text-gray-400">No locations match your filters.</td></tr>
              )}
              {filtered.map((l, i) => {
                const realIndex = locations.indexOf(l);
                return (
                <AnimatedRow key={`${l.name}-${i}`} className="hover:bg-gray-50/50 transition-colors">
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
                      <button onClick={() => openEdit(realIndex)} className="text-gray-400 hover:text-[#D63839]"><Icon icon="lucide:edit-3" /></button>
                      <button onClick={() => handleDelete(realIndex)} className="text-gray-400 hover:text-red-500"><Icon icon="lucide:trash-2" /></button>
                    </div>
                  </td>
                </AnimatedRow>
                );
              })}
            </AnimatedTbody>
          </table>
        </div>
      </div>
    </div>

    {/* Add Location Modal */}
    {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">{editIndex !== null ? "Edit Location" : "Add New Location"}</h2>
              <p className="text-sm text-gray-500 mt-0.5">{editIndex !== null ? "Update the details for this location" : "Add a new distribution point across the UAE"}</p>
            </div>
            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <Icon icon="lucide:x" className="text-xl" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Location Name <span className="text-[#D63839]">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Icon icon="lucide:building-2" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. The Dubai Mall"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839] focus:border-transparent transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Area / Address <span className="text-[#D63839]">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Icon icon="lucide:map-pin" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. Downtown Dubai"
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839] focus:border-transparent transition-all text-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Emirate</label>
                <select
                  value={form.emirate}
                  onChange={(e) => setForm({ ...form, emirate: e.target.value })}
                  className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839] focus:border-transparent transition-all"
                >
                  {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"].map((e) => (
                    <option key={e}>{e}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Type</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839] focus:border-transparent transition-all"
                >
                  {["Mall", "Event", "Gym", "Office", "Airport", "Hospital"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Status</label>
              <div className="flex gap-3">
                {["Active", "Seasonal", "Inactive"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm({ ...form, status: s })}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      form.status === s
                        ? s === "Active"
                          ? "bg-green-50 border-green-300 text-green-700"
                          : s === "Seasonal"
                          ? "bg-amber-50 border-amber-300 text-amber-700"
                          : "bg-gray-100 border-gray-300 text-gray-600"
                        : "bg-white border-gray-200 text-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#D63839] hover:bg-red-700 text-white rounded-xl text-sm font-semibold transition-all shadow-sm shadow-red-200"
              >
                {editIndex !== null ? "Save Changes" : "Add Location"}
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
    </AnimatedPage>
  );
}
