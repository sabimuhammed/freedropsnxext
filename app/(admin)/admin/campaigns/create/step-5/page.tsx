import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignCreateSteps from "@/components/admin/CampaignCreateSteps";

export const metadata = { title: "Create Campaign - Review & Publish | FreeDrops Admin" };

export default function CreateCampaignStep5Page() {
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
          <h1 className="text-2xl font-bold text-gray-900">Review & Publish</h1>
        </div>
        <Link href="/admin/campaigns" className="text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-1">
          <Icon icon="lucide:x" />Cancel
        </Link>
      </div>

      <CampaignCreateSteps current={5} />

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Campaign Basics",
              fields: [
                { label: "Name", value: "Summer Refresh 2024" },
                { label: "Sponsor", value: "Al Ain Water" },
                { label: "Duration", value: "Jul 01, 2024 – Aug 31, 2024" },
              ],
            },
            {
              title: "CTA & Offer",
              fields: [
                { label: "Action Type", value: "WhatsApp Lead Form" },
                { label: "Coupon Code", value: "REFRESH20 (20% Off)" },
              ],
            },
          ].map((card) => (
            <div key={card.title} className="bg-white border border-gray-200 hover:border-[#D63839] transition-all p-6 rounded-2xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">{card.title}</h3>
                <button className="text-xs font-bold text-[#D63839] hover:underline">Edit</button>
              </div>
              <div className="space-y-3">
                {card.fields.map((f) => (
                  <div key={f.label} className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">{f.label}</span>
                    <span className="text-sm font-semibold text-gray-900 mt-0.5">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 hover:border-[#D63839] transition-all p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Locations & Targeting</h3>
            <button className="text-xs font-bold text-[#D63839] hover:underline">Edit</button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col"><span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Emirate</span><span className="text-sm font-semibold text-gray-900">Dubai</span></div>
            <div className="flex flex-col"><span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Total Locations</span><span className="text-sm font-semibold text-gray-900">12 High-Traffic Spots</span></div>
            <div className="flex flex-col"><span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Tags</span><div className="flex gap-1.5 mt-1"><span className="px-2 py-0.5 bg-red-50 text-[#D63839] text-[10px] font-bold rounded uppercase">Mall</span></div></div>
          </div>
          <div className="mt-4 p-3 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-xs text-gray-500"><Icon icon="lucide:map-pin" className="inline mr-1" />Includes: The Dubai Mall, Mall of the Emirates, Dubai Marina Mall, and 9 others.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 hover:border-[#D63839] transition-all p-6 rounded-2xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Total Bottles</h3>
            <button className="text-xs font-bold text-[#D63839] hover:underline">Edit</button>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
              <Icon icon="lucide:droplets" className="text-[#D63839] text-2xl" />
            </div>
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Planned Total</span>
              <p className="text-xl font-bold text-gray-900">5,000 Bottles</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center shrink-0">
              <Icon icon="lucide:alert-circle" className="text-amber-500 text-2xl" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Final Confirmation Required</p>
              <p className="text-xs text-gray-500 mt-0.5">Once set Live, all assigned QR links become active immediately.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end pr-4 border-r border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</span>
              <span className="text-sm font-bold text-amber-600">Draft</span>
            </div>
            <Link
              href="/admin/campaigns/1/overview"
              className="flex items-center justify-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-red-100"
            >
              Set Live Now
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button className="px-6 py-2.5 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-2">
            <Icon icon="lucide:save" /> Save as Draft
          </button>
          <div className="flex items-center gap-3">
            <Link href="/admin/campaigns/create/step-4" className="px-6 py-2.5 text-sm font-bold text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-2">
              <Icon icon="lucide:arrow-left" /> Back
            </Link>
            <button className="px-6 py-2.5 text-sm font-bold text-[#D63839] bg-red-50 hover:bg-red-100 rounded-lg transition-colors">Approve Internally</button>
          </div>
        </div>
      </div>
    </div>
  );
}
