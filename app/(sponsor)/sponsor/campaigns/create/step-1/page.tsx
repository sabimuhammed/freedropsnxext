import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Create Campaign - Step 1: Basics | FreeDrops Sponsor Portal" };

export default function SponsorCreateStep1Page() {
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
        <Link href="/sponsor/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1">
          <Icon icon="lucide:x" />Cancel
        </Link>
      </div>

      <SponsorCampaignCreateSteps current={1} />

      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-10 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Campaign Basics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Campaign Name</label>
                <input type="text" placeholder="e.g. Spring Oasis Launch 2024" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#B12B2C] focus:border-[#B12B2C] outline-none transition-all text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Start Date</label>
                  <div className="relative">
                    <Icon icon="lucide:calendar" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#B12B2C] outline-none transition-all text-sm" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">End Date</label>
                  <div className="relative">
                    <Icon icon="lucide:calendar" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#B12B2C] outline-none transition-all text-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Campaign Description</label>
                <textarea rows={5} placeholder="Describe the purpose and goals of this campaign..." className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#B12B2C] outline-none transition-all text-sm resize-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50/50 flex items-center justify-between">
          <button className="px-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Save as Draft</button>
          <Link
            href="/sponsor/campaigns/create/step-2"
            className="flex items-center gap-3 bg-[#B12B2C] hover:opacity-90 text-white px-10 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-red-200"
          >
            Next Step <Icon icon="lucide:arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}
