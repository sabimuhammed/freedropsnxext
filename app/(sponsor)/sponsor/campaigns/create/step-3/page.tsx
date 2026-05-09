import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Packages & Creative Setup | FreeDrops Sponsor Portal" };

const packages = [
  { name: "Starter", bottles: "5,000", price: "AED 4,500", desc: "Perfect for small events or single-location campaigns.", recommended: false },
  { name: "Growth", bottles: "15,000", price: "AED 11,500", desc: "Most popular for multi-location mall campaigns.", recommended: true },
  { name: "Brand Impact", bottles: "30,000", price: "AED 21,000", desc: "Maximum reach across the UAE.", recommended: false },
];

export default function SponsorCreateStep3Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/sponsor/campaigns" className="text-gray-400 hover:text-[#B12B2C]">My Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">New Request</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Create Campaign Request</h1>
        </div>
        <Link href="/sponsor/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1"><Icon icon="lucide:x" />Cancel</Link>
      </div>

      <SponsorCampaignCreateSteps current={3} />

      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-10 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Select a Package</h3>
          <p className="text-sm text-gray-500 mb-8">Choose the bottle quantity that fits your campaign goals.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {packages.map((p) => (
              <div key={p.name} className={`relative border-2 rounded-2xl p-6 cursor-pointer transition-all ${p.recommended ? "border-[#B12B2C] bg-red-50/30" : "border-gray-200 hover:border-[#B12B2C]"}`}>
                {p.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#B12B2C] text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                    Recommended
                  </div>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <input type="radio" name="package" defaultChecked={p.recommended} className="w-4 h-4 accent-[#B12B2C]" />
                  <span className="font-bold text-gray-900">{p.name}</span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{p.bottles}</p>
                <p className="text-sm text-gray-500 mb-4">bottles</p>
                <p className="text-xl font-bold text-[#B12B2C] mb-4">{p.price}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Upload Creative Asset</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-10 flex flex-col items-center gap-3 bg-gray-50/50 hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="w-14 h-14 bg-white rounded-2xl border border-gray-200 flex items-center justify-center shadow-sm">
                <Icon icon="lucide:upload-cloud" className="text-gray-400 text-2xl" />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-gray-700">Click to upload your bottle artwork</p>
                <p className="text-xs text-gray-400 mt-1">PNG, AI, PDF (Max 50MB) • Recommended: 1200×600px</p>
              </div>
              <button className="px-6 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
                Browse Files
              </button>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50/50 flex items-center justify-between">
          <button className="px-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-900">Save as Draft</button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/step-2" className="px-8 py-4 text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center gap-3"><Icon icon="lucide:arrow-left" /> Back</Link>
            <Link href="/sponsor/campaigns/create/step-4" className="flex items-center gap-3 bg-[#B12B2C] hover:opacity-90 text-white px-10 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-red-200">Next Step <Icon icon="lucide:arrow-right" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
