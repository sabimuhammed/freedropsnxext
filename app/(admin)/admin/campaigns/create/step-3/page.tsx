import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignCreateSteps from "@/components/admin/CampaignCreateSteps";

export const metadata = { title: "Create Campaign - Step 3: Coupon | FreeDrops Admin" };

export default function CreateCampaignStep3Page() {
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

      <CampaignCreateSteps current={3} />

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Coupon / Offer Setup</h3>
          <p className="text-sm text-gray-500 mb-8">Optionally attach a coupon or promotional offer to this campaign.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Coupon Code</label>
                <input type="text" placeholder="e.g. SUMMER20" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm font-mono" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Discount Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm">
                  <option>Percentage Discount (%)</option>
                  <option>Fixed Amount (AED)</option>
                  <option>Free Product</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Discount Value</label>
                <div className="relative">
                  <input type="number" placeholder="20" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-bold">%</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Expiry Date</label>
                <div className="relative">
                  <Icon icon="lucide:calendar" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="date" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Max Redemptions</label>
                <input type="number" placeholder="Unlimited" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm" />
              </div>
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex items-start gap-3">
                <Icon icon="lucide:info" className="text-amber-500 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-700 leading-relaxed">Coupon is optional. Skip this step if no promotional code is needed for this campaign.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50/50 flex items-center justify-between">
          <button className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">Save Draft</button>
          <div className="flex items-center gap-3">
            <Link href="/admin/campaigns/create/step-2" className="px-6 py-2.5 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-2">
              <Icon icon="lucide:arrow-left" /> Back
            </Link>
            <Link href="/admin/campaigns/create/step-4" className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-8 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-red-100">
              Next Step <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
