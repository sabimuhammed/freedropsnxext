"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignCreateSteps from "@/components/admin/CampaignCreateSteps";

const allLocations = [
  { name: "The Dubai Mall", area: "Downtown Dubai" },
  { name: "Mall of the Emirates", area: "Al Barsha" },
  { name: "Dubai Festival City", area: "Festival City" },
  { name: "Ibn Battuta Mall", area: "Jebel Ali" },
  { name: "Mercato Mall", area: "Jumeirah" },
  { name: "City Centre Deira", area: "Deira" },
];

const CATEGORY_TAGS = [
  { icon: "lucide:shopping-bag", label: "Mall" },
  { icon: "lucide:calendar-days", label: "Event" },
  { icon: "lucide:dumbbell", label: "Gym" },
  { icon: "lucide:briefcase", label: "Office" },
];

export default function CreateCampaignStep4Page() {
  const [selected, setSelected] = useState<string>("The Dubai Mall");
  const [selectedTags, setSelectedTags] = useState<string[]>(["Mall"]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/admin/campaigns" className="text-gray-400 hover:text-[#D63839]">Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Create New</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Create New Campaign</h1>
        </div>
        <Link href="/admin/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1">
          <Icon icon="lucide:x" />Cancel
        </Link>
      </div>

      <CampaignCreateSteps current={4} />

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Target Locations & Tags</h3>
              <p className="text-sm text-gray-500 mt-1">Define where your campaign will be distributed across the UAE.</p>
            </div>
            {/* <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl flex items-center gap-2">
              <Icon icon="lucide:info" className="text-blue-600" />
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-tight">No GPS Tracking Required</span>
            </div> */}
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Select Emirate</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm">
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Ras Al Khaimah</option>
                  <option>Fujairah</option>
                  <option>Umm Al Quwain</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Category Tag (Optional)</label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {CATEGORY_TAGS.map((tag) => {
                    const isActive = selectedTags.includes(tag.label);
                    return (
                      <button
                        key={tag.label}
                        type="button"
                        onClick={() => setSelectedTags((prev) => isActive ? prev.filter((t) => t !== tag.label) : [...prev, tag.label])}
                        className={`px-4 py-2 rounded-full border text-xs font-bold transition-all flex items-center gap-2 ${isActive ? "border-red-100 bg-red-50 text-[#D63839]" : "border-gray-200 text-gray-600 hover:border-red-200"}`}
                      >
                        <Icon icon={tag.icon} />{tag.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Assigned Locations</label>
                <button className="text-xs font-bold text-[#D63839] hover:underline">Select All (12)</button>
              </div>
              <div className="relative border border-gray-200 rounded-xl overflow-hidden">
                <Icon icon="lucide:search" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="Search locations in Dubai..." className="w-full pl-11 pr-4 py-3 outline-none text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-72 overflow-y-auto">
                {allLocations.map((l) => {
                  const isChecked = selected === l.name;
                  return (
                    <label key={l.name} onClick={() => setSelected(l.name)} className={`border-2 rounded-xl p-4 flex items-center gap-3 cursor-pointer transition-all ${isChecked ? "border-[#D63839] bg-red-50/50" : "border-slate-100 bg-slate-50/50 hover:border-[#D63839]"}`}>
                      <input type="radio" checked={isChecked} onChange={() => setSelected(l.name)} className="w-5 h-5 text-[#D63839] accent-[#D63839]" />
                      <div>
                        <p className="text-sm font-bold text-gray-900">{l.name}</p>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-0.5">{l.area}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50/50 flex items-center justify-between">
          <button className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">Save Draft</button>
          <div className="flex items-center gap-3">
            <Link href="/admin/campaigns/create/step-3" className="px-6 py-2.5 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-2">
              <Icon icon="lucide:arrow-left" /> Back
            </Link>
            <Link href="/admin/campaigns/create/step-5" className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-8 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-red-100">
              Review & Publish <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
