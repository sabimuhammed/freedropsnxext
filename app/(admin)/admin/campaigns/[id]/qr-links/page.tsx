"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import CampaignDetailTabs from "@/components/admin/CampaignDetailTabs";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

type QREntry = {
  name: string;
  created: string;
  location: string;
  type: "URL REDIRECT" | "LEAD FORM";
  destination: string;
  scans: string;
};

const initialQRLinks: QREntry[] = [
  { name: "Summer_Dubai_Mall_01", created: "Created Jul 01, 2024", location: "The Dubai Mall", type: "URL REDIRECT", destination: "alainwater.com/summer", scans: "1,248" },
  { name: "Summer_Mall_Emirates_02", created: "Created Jul 01, 2024", location: "Mall of the Emirates", type: "LEAD FORM", destination: "fd.sh/form-wa-refresh", scans: "856" },
  { name: "Summer_Marina_Walk_03", created: "Created Jul 02, 2024", location: "Dubai Marina Walk", type: "URL REDIRECT", destination: "alainwater.com/summer", scans: "412" },
];

function qrImageUrl(destination: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(destination)}`;
}

export default function CampaignQRLinksPage({ params }: { params: { id: string } }) {
  const [qrLinks] = useState<QREntry[]>(initialQRLinks);
  const [tab, setTab] = useState<"campaign">("campaign");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = qrLinks.filter(
    (q) =>
      q.name.toLowerCase().includes(search.toLowerCase()) ||
      q.location.toLowerCase().includes(search.toLowerCase())
  );

  function handleCopy(destination: string) {
    navigator.clipboard.writeText(destination);
    setCopied(destination);
    setTimeout(() => setCopied(null), 1500);
  }

  function handleDownload(entry: QREntry) {
    const url = qrImageUrl(entry.destination);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${entry.name}.png`;
    a.target = "_blank";
    a.click();
  }

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
            <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-200">Live</span>
          </div>
          <p className="text-sm text-gray-500">Managed for <span className="font-semibold text-gray-700">Al Ain Water</span> • ID: FD-SUMMER-24-001</p>
        </div>
      </div>

      <CampaignDetailTabs id={params.id} active="qr-links" />

      {/* Table card */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-4">
        <div className="p-4 flex items-center justify-between gap-4 border-b border-gray-100">
          <div className="flex gap-2">
            <button
              onClick={() => setTab("campaign")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${tab === "campaign" ? "bg-gray-900 text-white" : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"}`}
            >
              Campaign-level QR
            </button>
          </div>
          <div className="relative">
            <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Search QRs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D63839]/20 w-48"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <th className="px-6 py-4">QR Name & Metadata</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Destination</th>
                <th className="px-6 py-4">QR Code</th>
                <th className="px-6 py-4">Scans</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-100 text-sm">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-gray-400 text-sm">No QR codes found.</td>
                </tr>
              ) : (
                filtered.map((q) => (
                  <AnimatedRow key={q.name} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                          <Icon icon="lucide:qr-code" className="text-gray-400 text-lg" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{q.name}</p>
                          <p className="text-xs text-gray-400">{q.created}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <Icon icon="lucide:map-pin" className="text-gray-400 text-xs shrink-0" />
                        {q.location}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold mb-1 ${q.type === "LEAD FORM" ? "bg-blue-50 text-blue-600" : "bg-purple-50 text-purple-600"}`}>
                        {q.type}
                      </span>
                      <p className="text-xs text-gray-400 max-w-[140px] truncate">{q.destination}</p>
                    </td>
                    <td className="px-6 py-4">
                      <img
                        src={qrImageUrl(q.destination)}
                        alt={`QR for ${q.name}`}
                        className="w-12 h-12 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 font-bold text-gray-900">{q.scans}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => handleCopy(q.destination)}
                          className="text-gray-400 hover:text-gray-700 transition-colors"
                          title="Copy destination URL"
                        >
                          <Icon icon={copied === q.destination ? "lucide:check" : "lucide:copy"} />
                        </button>
                        <button
                          onClick={() => handleDownload(q)}
                          className="text-gray-400 hover:text-gray-700 transition-colors"
                          title="Download QR code"
                        >
                          <Icon icon="lucide:download" />
                        </button>
                      </div>
                    </td>
                  </AnimatedRow>
                ))
              )}
            </AnimatedTbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-100">
          <p className="text-xs text-gray-500">Showing {filtered.length} of {qrLinks.length} generated QR links</p>
        </div>
      </div>

    </div>
    </AnimatedPage>
  );
}
