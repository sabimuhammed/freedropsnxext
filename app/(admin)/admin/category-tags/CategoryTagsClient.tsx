"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

const ICON_OPTIONS = [
  { label: "Shopping Bag", value: "lucide:shopping-bag", iconBg: "bg-red-50", iconColor: "text-red-500" },
  { label: "Plane", value: "lucide:plane", iconBg: "bg-blue-50", iconColor: "text-blue-500" },
  { label: "Medical Cross", value: "lucide:cross", iconBg: "bg-emerald-50", iconColor: "text-emerald-500" },
  { label: "Utensils", value: "lucide:utensils", iconBg: "bg-orange-50", iconColor: "text-orange-500" },
  { label: "Building", value: "lucide:building", iconBg: "bg-indigo-50", iconColor: "text-indigo-500" },
  { label: "Bed", value: "lucide:bed-double", iconBg: "bg-purple-50", iconColor: "text-purple-500" },
  { label: "Graduation Cap", value: "lucide:graduation-cap", iconBg: "bg-yellow-50", iconColor: "text-yellow-600" },
  { label: "Dumbbell", value: "lucide:dumbbell", iconBg: "bg-pink-50", iconColor: "text-pink-500" },
  { label: "Shopping Cart", value: "lucide:shopping-cart", iconBg: "bg-teal-50", iconColor: "text-teal-500" },
  { label: "Flag", value: "lucide:flag", iconBg: "bg-amber-50", iconColor: "text-amber-500" },
  { label: "Map Pin", value: "lucide:map-pin", iconBg: "bg-rose-50", iconColor: "text-rose-500" },
  { label: "Tag", value: "lucide:tag", iconBg: "bg-cyan-50", iconColor: "text-cyan-500" },
];

const INITIAL_TAGS = [
  { name: "Mall", icon: "lucide:shopping-bag", iconBg: "bg-red-50", iconColor: "text-red-500", description: "High-traffic retail environments and shopping centers", usage: 42, status: "Active", created: "Oct 12, 2023" },
  { name: "Airport", icon: "lucide:plane", iconBg: "bg-blue-50", iconColor: "text-blue-500", description: "Travel hubs including international terminals", usage: 8, status: "Active", created: "Oct 15, 2023" },
  { name: "Hospital", icon: "lucide:cross", iconBg: "bg-emerald-50", iconColor: "text-emerald-500", description: "Medical facilities, clinics, and waiting areas", usage: 15, status: "Active", created: "Oct 20, 2023" },
  { name: "Restaurant", icon: "lucide:utensils", iconBg: "bg-orange-50", iconColor: "text-orange-500", description: "Dining establishments and food courts", usage: 22, status: "Active", created: "Oct 22, 2023" },
  { name: "Office", icon: "lucide:building", iconBg: "bg-indigo-50", iconColor: "text-indigo-500", description: "Corporate buildings and business parks", usage: 30, status: "Active", created: "Nov 05, 2023" },
  { name: "Hotel", icon: "lucide:bed-double", iconBg: "bg-purple-50", iconColor: "text-purple-500", description: "Hospitality venues and accommodation facilities", usage: 11, status: "Active", created: "Nov 10, 2023" },
  { name: "School", icon: "lucide:graduation-cap", iconBg: "bg-yellow-50", iconColor: "text-yellow-600", description: "Educational institutions and campuses", usage: 9, status: "Active", created: "Nov 18, 2023" },
  { name: "Gym", icon: "lucide:dumbbell", iconBg: "bg-pink-50", iconColor: "text-pink-500", description: "Fitness centers and sports complexes", usage: 7, status: "Active", created: "Dec 01, 2023" },
  { name: "Supermarket", icon: "lucide:shopping-cart", iconBg: "bg-teal-50", iconColor: "text-teal-500", description: "Grocery stores and hypermarkets", usage: 19, status: "Active", created: "Dec 10, 2023" },
  { name: "Stadium", icon: "lucide:flag", iconBg: "bg-amber-50", iconColor: "text-amber-500", description: "Sports arenas and event venues", usage: 4, status: "Inactive", created: "Jan 05, 2024" },
];

const EMPTY_FORM = { name: "", description: "", icon: ICON_OPTIONS[0].value, imageUrl: "", status: "Active" };

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

export default function CategoryTagsClient() {
  const [tags, setTags] = useState(INITIAL_TAGS);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setForm((prev) => ({ ...prev, imageUrl: url }));
  }

  function handleSubmit() {
    if (!form.name.trim()) return;
    const iconOpt = ICON_OPTIONS.find((o) => o.value === form.icon) ?? ICON_OPTIONS[0];
    setTags((prev) => [
      ...prev,
      {
        name: form.name.trim(),
        icon: iconOpt.value,
        iconBg: iconOpt.iconBg,
        iconColor: iconOpt.iconColor,
        imageUrl: form.imageUrl,
        description: form.description.trim(),
        usage: 0,
        status: form.status,
        created: formatDate(new Date()),
      },
    ]);
    setForm(EMPTY_FORM);
    setModalOpen(false);
  }

  const inactiveCount = tags.filter((t) => t.status === "Inactive").length;

  return (
    <AnimatedPage>
      <div>
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Category Tags Management</h1>
            <p className="text-sm text-gray-500">Manage location types and categories used in distribution points.</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200"
          >
            <Icon icon="lucide:plus" />Add New Tag
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex items-start justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Total Categories</p>
              <p className="text-4xl font-bold text-gray-900">{tags.length}</p>
            </div>
            <Icon icon="lucide:tag" className="text-gray-300 text-2xl mt-1" />
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 flex items-start justify-between">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Inactive Tags</p>
              <p className="text-4xl font-bold text-gray-900">{inactiveCount}</p>
            </div>
            <Icon icon="lucide:pencil" className="text-gray-300 text-2xl mt-1" />
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
          <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-sm">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Icon icon="lucide:search" />
              </span>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#D63839] transition-all"
                placeholder="Search category tags..."
              />
            </div>
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
              <div className="flex items-center gap-2 bg-gray-50/50 border border-gray-200 px-3 py-2 rounded-lg">
                <select className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer">
                  <option>Status: All</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <p className="text-xs text-gray-400 whitespace-nowrap">Showing <span className="font-semibold text-gray-700">{tags.length}</span> tags</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-y border-gray-100">
                  <th className="px-6 py-3 w-10">
                    <input type="checkbox" className="rounded border-gray-300 accent-[#D63839]" />
                  </th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Tag Name</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">Usage Count</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">Created Date</th>
                  <th className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <AnimatedTbody className="divide-y divide-gray-50">
                {tags.map((tag) => (
                  <AnimatedRow key={tag.name + tag.created} className="text-sm text-gray-700 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-5">
                      <input type="checkbox" className="rounded border-gray-300 accent-[#D63839]" />
                    </td>
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl ${tag.iconBg} flex items-center justify-center shrink-0 overflow-hidden`}>
                          {(tag as any).imageUrl ? (
                            <img src={(tag as any).imageUrl} alt={tag.name} className="w-full h-full object-cover" />
                          ) : (
                            <Icon icon={tag.icon} className={`${tag.iconColor} text-lg`} />
                          )}
                        </div>
                        <span className="font-semibold text-gray-900">{tag.name}</span>
                      </div>
                    </td>
                    <td className="px-4 py-5 text-gray-500 max-w-xs">{tag.description}</td>
                    <td className="px-4 py-5 text-center">
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-2.5 py-1 rounded-full">
                        {tag.usage} Locations
                      </span>
                    </td>
                    <td className="px-4 py-5">
                      <span className={`flex items-center gap-1.5 text-xs font-medium ${tag.status === "Active" ? "text-emerald-600" : "text-gray-400"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${tag.status === "Active" ? "bg-emerald-500" : "bg-gray-400"}`} />
                        {tag.status}
                      </span>
                    </td>
                    <td className="px-4 py-5 text-gray-500">{tag.created}</td>
                    <td className="px-4 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${tag.status === "Active" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-gray-200 bg-gray-50 text-gray-500"}`}>
                          • {tag.status}
                        </span>
                        <button className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                          <Icon icon="lucide:trash-2" className="text-base" />
                        </button>
                      </div>
                    </td>
                  </AnimatedRow>
                ))}
              </AnimatedTbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add New Tag Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Add New Tag</h2>
                <p className="text-sm text-gray-500 mt-0.5">Create a new category tag for locations.</p>
              </div>
              <button onClick={() => setModalOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                <Icon icon="lucide:x" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Tag Name</label>
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus-within:border-[#D63839] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                  <Icon icon="lucide:tag" className="text-gray-400 shrink-0" />
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="e.g. Pharmacy"
                    className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Icon</label>
                <label className="flex items-center gap-4 border border-dashed border-gray-300 rounded-xl px-4 py-4 bg-gray-50/50 hover:border-[#D63839] hover:bg-red-50/20 transition-all cursor-pointer">
                  {form.imageUrl ? (
                    <img src={form.imageUrl} alt="Tag icon" className="w-12 h-12 rounded-xl object-cover shrink-0" />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
                      <Icon icon="lucide:image-plus" className="text-gray-400 text-2xl" />
                    </div>
                  )}
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-gray-700">{form.imageUrl ? "Change image" : "Upload an image"}</span>
                    <span className="text-xs text-gray-400">PNG, JPG, SVG up to 2MB</span>
                  </div>
                  <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </label>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Description</label>
                <div className="border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus-within:border-[#D63839] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe what this category tag represents..."
                    className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Status</label>
                <div className="flex gap-3">
                  {["Active", "Inactive"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm((prev) => ({ ...prev, status: s }))}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                        form.status === s
                          ? s === "Active"
                            ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                            : "bg-gray-100 border-gray-300 text-gray-600"
                          : "bg-gray-50 border-gray-200 text-gray-400 hover:bg-gray-100"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="mt-7 w-full flex items-center justify-center gap-2 bg-[#D63839] hover:bg-red-700 text-white py-3.5 rounded-xl text-sm font-semibold transition-all"
            >
              <Icon icon="lucide:plus" />Add Tag
            </button>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
}
