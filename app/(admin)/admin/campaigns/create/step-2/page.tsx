"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignCreateSteps from "@/components/admin/CampaignCreateSteps";

const ctaTypes = [
  { id: "url", icon: "lucide:link", title: "External URL", desc: "Redirect users to a website or app." },
  { id: "whatsapp", icon: "lucide:message-circle", title: "WhatsApp", desc: "Start a chat with a prefilled message." },
  { id: "landing", icon: "lucide:layout", title: "FreeDrops Landing", desc: "Host a custom offer page & lead form." },
];

export default function CreateCampaignStep2Page() {
  const [selected, setSelected] = useState("url");

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <nav className="flex" aria-label="Breadcrumb">
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

      <CampaignCreateSteps current={2} />

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Choose QR Action Type</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {ctaTypes.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={`p-6 rounded-xl text-left border-2 transition-all ${
                  selected === t.id
                    ? "border-[#D63839] bg-[#FEF2F2]"
                    : "border-gray-100 bg-white hover:border-red-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                  selected === t.id ? "bg-[#D63839] text-white" : "bg-gray-50 text-gray-500"
                }`}>
                  <Icon icon={t.icon} className="text-xl" />
                </div>
                <div className="text-sm font-bold text-gray-900 mb-1">{t.title}</div>
                <p className="text-xs text-gray-500">{t.desc}</p>
              </button>
            ))}
          </div>

          {selected === "url" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Destination URL</label>
                  <div className="relative">
                    <Icon icon="lucide:globe" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="url" placeholder="https://example.com/promo" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div>
                    <div className="text-sm font-bold text-gray-900">Auto-Tag UTMs</div>
                    <p className="text-xs text-gray-500">Append source and medium tags automatically.</p>
                  </div>
                  <div className="w-11 h-6 bg-[#D63839] rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {selected === "whatsapp" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">WhatsApp Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-sm">+971</span>
                    <input type="tel" placeholder="50 123 4567" className="flex-1 px-4 py-3 rounded-r-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Prefilled Message (Optional)</label>
                  <textarea rows={3} placeholder="Hi! I'm interested in the Summer Promo..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Landing Banner</label>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center gap-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                  <Icon icon="lucide:upload-cloud" className="text-3xl text-gray-400" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700">Click to upload banner</p>
                    <p className="text-xs text-gray-400">PNG, JPG (Recommended 1200x600px)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Offer Title</label>
                <input type="text" placeholder="Get 20% Off Your Next Masafi Order" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Offer Description</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">About Us</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Contact</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
            </div>
          )}

          {selected === "landing" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Landing Banner</label>
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 flex flex-col items-center gap-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
                  <Icon icon="lucide:upload-cloud" className="text-3xl text-gray-400" />
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-700">Click to upload banner</p>
                    <p className="text-xs text-gray-400">PNG, JPG (Recommended 1200x600px)</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Offer Title</label>
                <input type="text" placeholder="Get 20% Off Your Next Masafi Order" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Offer Description</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">About Us</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Contact</label>
                <textarea rows={4} placeholder="Scan and sign up to receive a unique discount code instantly!" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] outline-none text-sm resize-none" />
              </div>
            </div>
          )}
        </div>

        <div className="p-6 bg-gray-50/50 flex items-center justify-between">
          <button className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">Save Draft</button>
          <div className="flex items-center gap-3">
            <Link href="/admin/campaigns/create/step-1" className="px-6 py-2.5 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-2">
              <Icon icon="lucide:arrow-left" /> Back
            </Link>
            <Link href="/admin/campaigns/create/step-3" className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-8 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-red-100">
              Next Step <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
