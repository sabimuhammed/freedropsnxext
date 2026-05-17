"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

const INITIAL_EMIRATES = [
  { name: "Dubai",           status: "Active",   created: "Jan 12, 2024" },
  { name: "Abu Dhabi",       status: "Active",   created: "Jan 12, 2024" },
  { name: "Sharjah",         status: "Active",   created: "Jan 15, 2024" },
  { name: "Ras Al Khaimah",  status: "Inactive", created: "Feb 01, 2024" },
  { name: "Ajman",           status: "Active",   created: "Feb 10, 2024" },
  { name: "Fujairah",        status: "Active",   created: "Mar 05, 2024" },
  { name: "Umm Al Quwain",   status: "Inactive", created: "Mar 20, 2024" },
];

const tabs = ["Active Emirates", "Specific Areas", "Deactivated"];

export default function EmiratesPage() {
  const [emirates, setEmirates] = useState(INITIAL_EMIRATES);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", status: "Active", notes: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) return;
    const today = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }).replace(/ /g, " ");
    setEmirates((prev) => [...prev, { name: form.name.trim(), status: form.status, created: today }]);
    setForm({ name: "", status: "Active", notes: "" });
    setShowModal(false);
  }

  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Locations — Emirates</h1>
          <p className="text-sm text-gray-500 mt-1">Manage geographical regions for campaign targeting and QR distribution</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200"
        >
          <Icon icon="lucide:circle-plus" />Add Emirate
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            className={`px-4 py-3 text-sm font-semibold transition-colors ${
              i === 0
                ? "text-[#D63839] border-b-2 border-[#D63839]"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Search + Export */}
        <div className="px-6 py-4 flex items-center gap-4 border-b border-gray-100">
          <div className="relative flex-1">
            <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Filter by Emirate name..."
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 focus:border-[#D63839]"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all whitespace-nowrap">
            <Icon icon="lucide:download" />Export List
          </button>
        </div>

        {/* Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="table-header border-b border-gray-100">
              <th className="px-6 py-4">Emirate Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <AnimatedTbody className="divide-y divide-gray-50">
            {emirates.map((e) => (
              <AnimatedRow key={e.name} className="hover:bg-gray-50/50 transition-colors text-sm">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${e.status === "Active" ? "bg-gray-100" : "bg-gray-50"}`}>
                      <Icon icon="lucide:map-pin" className={`text-base ${e.status === "Active" ? "text-gray-500" : "text-gray-300"}`} />
                    </div>
                    <span className={`font-bold ${e.status === "Active" ? "text-gray-900" : "text-gray-400"}`}>{e.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`flex items-center gap-1.5 text-sm font-medium ${e.status === "Active" ? "text-green-600" : "text-gray-400"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${e.status === "Active" ? "bg-green-500" : "bg-gray-300"}`} />
                    {e.status}
                  </span>
                </td>
                <td className={`px-6 py-4 ${e.status === "Active" ? "text-gray-600" : "text-gray-400"}`}>{e.created}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#D63839] hover:border-[#D63839] transition-all">
                      <Icon icon="lucide:pencil" className="text-sm" />
                    </button>
                    <button className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                      e.status === "Active"
                        ? "border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-300"
                        : "border-gray-200 text-emerald-400 hover:text-emerald-600 hover:border-emerald-300"
                    }`}>
                      <Icon icon={e.status === "Active" ? "lucide:power" : "lucide:zap"} className="text-sm" />
                    </button>
                  </div>
                </td>
              </AnimatedRow>
            ))}
          </AnimatedTbody>
        </table>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Showing <span className="font-bold text-gray-900">{emirates.length}</span> of <span className="font-bold text-gray-900">{emirates.length}</span> Emirates
          </p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm font-semibold text-gray-500 border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">Previous</button>
            <button className="px-4 py-2 text-sm font-semibold text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>

    {/* Add Emirate Modal */}
    {showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowModal(false)} />
        <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Add New Emirate</h2>
              <p className="text-sm text-gray-500 mt-0.5">Add a new geographical region for campaign targeting</p>
            </div>
            <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
              <Icon icon="lucide:x" className="text-xl" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Emirate Name <span className="text-[#D63839]">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Icon icon="lucide:map-pin" />
                </div>
                <input
                  type="text"
                  placeholder="e.g. Dubai"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Status</label>
              <div className="flex gap-3">
                {["Active", "Inactive"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setForm({ ...form, status: s })}
                    className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                      form.status === s
                        ? s === "Active"
                          ? "bg-green-50 border-green-300 text-green-700"
                          : "bg-gray-100 border-gray-300 text-gray-600"
                        : "bg-white border-gray-200 text-gray-400 hover:bg-gray-50"
                    }`}
                  >
                    <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${s === "Active" ? "bg-green-500" : "bg-gray-400"}`} />
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Notes <span className="text-gray-400 font-normal">(optional)</span></label>
              <textarea
                rows={3}
                placeholder="Any additional notes about this emirate..."
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D63839] focus:border-transparent transition-all resize-none text-sm"
              />
            </div>

            <div className="flex gap-3 pt-1">
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
                Add Emirate
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
    </AnimatedPage>
  );
}
