import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignCreateSteps from "@/components/admin/CampaignCreateSteps";

export const metadata = { title: "Create Campaign - Step 1 | FreeDrops Admin" };

export default function CreateCampaignStep1Page() {
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

      <CampaignCreateSteps current={1} />

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Sponsor</label>
                <div className="relative">
                  <Icon icon="lucide:building-2" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  <select className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm bg-white appearance-none cursor-pointer text-gray-700">
                    <option value="" disabled selected>Select a sponsor...</option>
                    <option value="masafi-water">Masafi Water</option>
                    <option value="etisalat-uae">Etisalat UAE</option>
                    <option value="dp-world">DP World</option>
                    <option value="emirates">Emirates</option>
                  </select>
                  <Icon icon="lucide:chevron-down" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Campaign Name</label>
                <input type="text" placeholder="e.g. Summer Splash Refresh 2024" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Quantity (Units)</label>
                  <input type="number" placeholder="50,000" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Requested Start</label>
                  <div className="relative">
                    <Icon icon="lucide:calendar" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="date" className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm" />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Internal Notes</label>
                <textarea rows={5} placeholder="Add any special instructions or internal references..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#D63839] focus:border-[#D63839] outline-none transition-all text-sm resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 uppercase tracking-wider">Status</label>
                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl border border-gray-100">
                  <select className="flex-1 bg-transparent border-none text-sm font-semibold text-gray-700 focus:ring-0 outline-none cursor-pointer">
                    <option value="draft">Draft</option>
                    <option value="review">Pending Review</option>
                    <option value="approved">Pre-Approved</option>
                  </select>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white rounded-lg border border-gray-200 shadow-sm shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wide">Inactive</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">Newly created campaigns are set to 'Draft' by default. This campaign will not be visible to sponsors until approved.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50/50 flex items-center justify-between">
          <button className="px-6 py-2.5 text-sm font-bold text-gray-600 hover:text-gray-900 transition-colors">Save Draft</button>
          <div className="flex items-center gap-3">
            <Link href="/admin/campaigns" className="px-6 py-2.5 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors">Back to List</Link>
            <Link href="/admin/campaigns/create/step-2" className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-8 py-2.5 rounded-lg text-sm font-bold transition-all shadow-md shadow-red-100">
              Next Step <Icon icon="lucide:arrow-right" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 border-t border-gray-100 flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
          <Icon icon="lucide:info" className="text-[#D63839] text-xl" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-1">Pro Tip: Campaign Inventory</h4>
          <p className="text-sm text-gray-500 leading-relaxed">You can adjust the quantity later in the 'Inventory' tab. FreeDrops will automatically stop the QR codes once the requested units are reached across all active locations.</p>
        </div>
      </div>
    </div>
  );
}
