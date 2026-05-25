"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

const topCampaigns = [
  { initials: "AQ", avatarBg: "bg-red-100", avatarColor: "text-red-600", name: "AquaPure Summer Rush", sponsor: "Masafi Water", scans: "14,203", uniqueScans: "9,841", clicks: "1,402", leads: "—", conversion: "9.9%" },
  { initials: "EG", avatarBg: "bg-amber-100", avatarColor: "text-amber-600", name: "Etisalat 5G Launch", sponsor: "Etisalat UAE", scans: "9,102", uniqueScans: "6,730", clicks: "840", leads: "112", conversion: "13.3%" },
  { initials: "DL", avatarBg: "bg-emerald-100", avatarColor: "text-emerald-600", name: "Dubai Logistics Exp", sponsor: "DP World", scans: "7,845", uniqueScans: "5,210", clicks: "630", leads: "—", conversion: "8.0%" },
  { initials: "EM", avatarBg: "bg-purple-100", avatarColor: "text-purple-600", name: "Emirates Skywards", sponsor: "Emirates", scans: "6,102", uniqueScans: "4,488", clicks: "480", leads: "54", conversion: "11.3%" },
  { initials: "ST", avatarBg: "bg-gray-100", avatarColor: "text-gray-600", name: "Starter Pilot V1", sponsor: "FreeDrops Lab", scans: "4,102", uniqueScans: "3,201", clicks: "210", leads: "18", conversion: "8.6%" },
];

const redirectLinks = [
  { slug: "masafi-summer", destination: "https://masafi.com/summer", campaign: "Summer Splash", status: "Active", uniqueScans: "8,901", clicks: "3,218", created: "Jun 10, 2024" },
  { slug: "mai-fitness", destination: "https://maidubai.com/fitness", campaign: "Fitness Village", status: "Active", uniqueScans: "6,110", clicks: "1,102", created: "Jul 01, 2024" },
  { slug: "pepsi-school", destination: "https://pepsi.ae/school", campaign: "Back to School", status: "Draft", uniqueScans: "0", clicks: "0", created: "Aug 15, 2024" },
  { slug: "alain-arts", destination: "https://alainwater.ae/arts", campaign: "Arts Festival", status: "Completed", uniqueScans: "15,302", clicks: "5,602", created: "May 15, 2024" },
];

export default function AnalyticsTables() {
  const [tab, setTab] = useState<"campaigns" | "redirect-links">("campaigns");

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <div className="px-6 pt-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex gap-6">
          <button
            onClick={() => setTab("campaigns")}
            className={`pb-4 text-sm font-bold border-b-2 transition-colors ${tab === "campaigns" ? "text-[#D63839] border-[#D63839]" : "text-gray-500 border-transparent hover:text-gray-700"}`}
          >
            Top Campaigns
          </button>
          <button
            onClick={() => setTab("redirect-links")}
            className={`pb-4 text-sm font-bold border-b-2 transition-colors ${tab === "redirect-links" ? "text-[#D63839] border-[#D63839]" : "text-gray-500 border-transparent hover:text-gray-700"}`}
          >
            Redirect Links
          </button>
        </div>
        {/* {tab === "redirect-links" && (
          <button className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200 mb-3">
            <Icon icon="lucide:plus" />Add Link
          </button>
        )} */}
      </div>

      <div className="overflow-x-auto">
        {tab === "campaigns" ? (
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr className="table-header">
                <th className="px-6 py-4">Campaign</th>
                <th className="px-6 py-4">Sponsor</th>
                <th className="px-6 py-4">Scans</th>
                <th className="px-6 py-4">Unique Scans</th>
                <th className="px-6 py-4">Clicks</th>
                <th className="px-6 py-4">Leads</th>
                <th className="px-6 py-4">Conversion</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50">
              {topCampaigns.map((c) => (
                <AnimatedRow key={c.name} className="text-sm text-gray-700">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded ${c.avatarBg} flex items-center justify-center ${c.avatarColor} font-bold text-xs shrink-0`}>
                        {c.initials}
                      </div>
                      <span className="font-medium whitespace-nowrap">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{c.sponsor}</td>
                  <td className="px-6 py-4 font-mono">{c.scans}</td>
                  <td className="px-6 py-4 font-mono text-purple-700">{c.uniqueScans}</td>
                  <td className="px-6 py-4 font-mono">{c.clicks}</td>
                  <td className={`px-6 py-4 font-mono ${c.leads === "—" ? "text-gray-400" : ""}`}>{c.leads}</td>
                  <td className="px-6 py-4 font-mono text-purple-700">{c.conversion}</td>
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50">
              <tr className="table-header">
                <th className="px-6 py-4">Slug</th>
                <th className="px-6 py-4">Destination URL</th>
                <th className="px-6 py-4">Campaign</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Unique Scans</th>
                <th className="px-6 py-4">Clicks</th>
                <th className="px-6 py-4">Created</th>
           
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50 text-sm">
              {redirectLinks.map((l) => (
                <AnimatedRow key={l.slug} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-semibold text-[#D63839]">/{l.slug}</td>
                  <td className="px-6 py-4 text-gray-500 text-xs max-w-xs truncate">{l.destination}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{l.campaign}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      l.status === "Active" ? "bg-green-50 text-green-700" :
                      l.status === "Completed" ? "bg-gray-100 text-gray-600" :
                      "bg-blue-50 text-blue-700"
                    }`}>{l.status}</span>
                  </td>
                  <td className="px-6 py-4 font-mono text-purple-700">{l.uniqueScans}</td>
                  <td className="px-6 py-4 font-mono text-gray-900">{l.clicks}</td>
                  <td className="px-6 py-4 text-gray-500">{l.created}</td>
               
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        )}
      </div>
    </div>
  );
}
