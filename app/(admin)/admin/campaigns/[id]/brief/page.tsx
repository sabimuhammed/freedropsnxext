import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/admin/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";

export const metadata = { title: "Campaign Detail — Project Brief | FreeDrops Admin" };

export default function CampaignBriefPage({ params }: { params: { id: string } }) {
  return (
    <AnimatedPage>
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="space-y-1">
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/admin/campaigns" className="text-gray-400 hover:text-[#D63839]">Campaigns</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-900">Summer Refresh 2024</span></li>
            </ol>
          </nav>
          <div className="flex items-center gap-4 mt-1">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Summer Refresh 2024</h1>
            <span className="px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-full border border-yellow-200 flex items-center gap-1.5">
              Awaiting Approval
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Managed for <span className="font-semibold text-gray-700">Al Ain Water</span> • ID: FD-SUMMER-24-001
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 shadow-sm transition-all">
            <Icon icon="lucide:edit-3" />Edit Brief
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#D63839] border border-red-700 rounded-xl text-sm font-bold text-white hover:bg-red-700 shadow-sm transition-all">
            Share Brief
          </button>
        </div>
      </div>

      <CampaignDetailTabs id={params.id} active="brief" />

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: Main brief content */}
        <div className="lg:col-span-2 space-y-6">

          <div className="detail-card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Project Brief</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Industry / Field</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Increase market penetration for the 330ml "Summer Edition" PET bottles across major metro stations and coastal retail points in the UAE.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm font-bold text-gray-900 mb-1">Brand Nature</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Drive sign-ups for the "Al Ain Water Rewards" program through integrated QR code interactions on product labels.
                </p>
              </div>
            </div>
          </div>

          <div className="detail-card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Target Audience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Demographics</p>
                <ul className="space-y-2.5">
                  {[
                    { icon: "lucide:user", text: "Age: 18 – 35 years" },
                    { icon: "lucide:map-pin", text: "Location: Dubai, Abu Dhabi metro commuters" },
                    { icon: "lucide:banknote", text: "Income: Mid-to-High bracket" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-2 text-sm text-gray-700">
                      <Icon icon={item.icon} className="text-gray-400 shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Psychographics</p>
                <ul className="space-y-2.5">
                  {[
                    { icon: "lucide:activity", text: "Health & fitness conscious" },
                    { icon: "lucide:smartphone", text: "Mobile-first consumers" },
                    { icon: "lucide:sun", text: "Outdoor lifestyle preference" },
                  ].map((item) => (
                    <li key={item.text} className="flex items-center gap-2 text-sm text-gray-700">
                      <Icon icon={item.icon} className="text-gray-400 shrink-0" />
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="detail-card p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Business Model</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              The campaign should feel "reinvigorating and crisp." Visuals should lean towards minimalist aesthetics with high-contrast colors (Al Ain Blue + Summer Yellow). We want to emphasize the cooling sensation of the water in the harsh UAE summer heat.
            </p>
          </div>
        </div>

        {/* Right: Metadata */}
        <div className="space-y-6">
          <div className="detail-card p-6">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Campaign Info</h3>
            <dl className="space-y-3 text-sm">
              {[
                { label: "Sponsor",       value: "Al Ain Water" },
                { label: "Start Date",    value: "Jun 12, 2024" },
                { label: "End Date",      value: "Aug 31, 2024" },
                { label: "Bottles",       value: "15,000 units" },
                { label: "Status",        value: "Awaiting Approval" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between py-2 border-b border-gray-50 last:border-0">
                  <dt className="text-gray-500">{r.label}</dt>
                  <dd className="font-semibold text-gray-900">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="detail-card p-6">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Project Manager</h3>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                <Icon icon="lucide:user" className="text-[#D63839]" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Sarah bin Faisal</p>
                <p className="text-xs text-gray-500">Campaign Manager</p>
              </div>
            </div>
          </div>

          <div className="detail-card p-6">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Attachments</h3>
            <div className="space-y-2">
              {["Brand Guidelines.pdf", "Creative Brief.pdf"].map((file) => (
                <div key={file} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <Icon icon="lucide:file-text" className="text-gray-400 shrink-0" />
                  <span className="text-xs font-medium text-gray-700 flex-1 truncate">{file}</span>
                  <button className="text-gray-400 hover:text-[#D63839]">
                    <Icon icon="lucide:download" className="text-sm" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
