import Link from "next/link";
import { Icon } from "@iconify/react";
import SponsorCampaignCreateSteps from "@/components/sponsor/CampaignCreateSteps";

export const metadata = { title: "Offer & Coupon Setup | FreeDrops Sponsor Portal" };

export default function SponsorCreateStep4Page() {
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

      <SponsorCampaignCreateSteps current={4} />

      <div className="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-10 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Offer & Coupon</h3>
          <p className="text-sm text-gray-500 mb-8">Optional — add a coupon or special offer for users who scan your QR.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Coupon Code</label>
                <input type="text" placeholder="e.g. SPRING20" className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#B12B2C] outline-none text-sm font-mono" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Offer Description</label>
                <textarea rows={3} placeholder="e.g. Get 20% off your next purchase..." className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#B12B2C] outline-none text-sm resize-none" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Discount Type</label>
                <select className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#B12B2C] outline-none text-sm">
                  <option>Percentage (%)</option>
                  <option>Fixed Amount (AED)</option>
                  <option>Free Product</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">Expiry Date</label>
                <div className="relative">
                  <Icon icon="lucide:calendar" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="date" className="w-full pl-11 pr-4 py-4 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-[#B12B2C] outline-none text-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 bg-slate-50/50 flex items-center justify-between">
          <button className="px-8 py-3 text-sm font-bold text-slate-500 hover:text-slate-900">Save as Draft</button>
          <div className="flex items-center gap-4">
            <Link href="/sponsor/campaigns/create/step-3" className="px-8 py-4 text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center gap-3"><Icon icon="lucide:arrow-left" /> Back</Link>
            <Link href="/sponsor/campaigns/create/step-5" className="flex items-center gap-3 bg-[#B12B2C] hover:opacity-90 text-white px-10 py-4 rounded-2xl text-sm font-bold transition-all shadow-lg shadow-red-200">Next Step <Icon icon="lucide:arrow-right" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
