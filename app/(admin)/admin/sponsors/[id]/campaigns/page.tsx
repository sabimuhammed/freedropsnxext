import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsor Profile — Campaigns | FreeDrops" };

export default function SponsorCampaignsPage() {
  return (
    <AnimatedPage>
      <div>
        {/* Breadcrumb + Actions */}
        <div className="flex items-center justify-between mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/admin/sponsors" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#D63839]">
                  Sponsors
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <Icon icon="lucide:chevron-right" className="text-gray-400" />
                  <span className="ml-1 text-sm font-bold text-gray-900 md:ml-2 tracking-tight">Masafi Water</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#D63839] hover:bg-[#C63238] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200">
              <Icon icon="lucide:plus" />Create Campaign
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <Link href="/admin/sponsors/1" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium border-b-2 tracking-tight">
              Overview
            </Link>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium border-b-2 tracking-tight">
              Assets &amp; Media
            </a>
            <a href="#" className="tab-active whitespace-nowrap py-4 px-1 text-sm font-bold border-b-2 tracking-tight">
              Campaign History
            </a>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium border-b-2 tracking-tight">
              Settings
            </a>
          </nav>
        </div>

        {/* Campaigns Table */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <th className="px-6 py-4">Campaign Name</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Start Date</th>
                  <th className="px-6 py-4">Scans</th>
                  <th className="px-6 py-4">Clicks</th>
                  <th className="px-6 py-4">Leads</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <AnimatedTbody className="divide-y divide-gray-50 text-sm">

                {/* Dubai Mall Summer Splash */}
                <AnimatedRow className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1548919973-5dea58b88ad6?auto=format&fit=crop&q=80&w=100&h=100" className="w-full h-full object-cover" alt="Dubai Mall" />
                      </div>
                      <span className="font-bold text-gray-900">Dubai Mall Summer Splash</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-green-700">Active</span></td>
                  <td className="px-6 py-4 text-gray-600">Jun 12, 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">12,504</td>
                  <td className="px-6 py-4 text-gray-600">3,218</td>
                  <td className="px-6 py-4 text-gray-600">452</td>
                  <td className="px-6 py-4 text-right"><a href="#" className="inline-flex items-center text-xs font-bold text-[#D63839] hover:text-[#C63238] uppercase tracking-wide">Open Campaign</a></td>
                </AnimatedRow>

                {/* Fitness Village Hydration */}
                <AnimatedRow className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=100&h=100" className="w-full h-full object-cover" alt="Fitness Village" />
                      </div>
                      <span className="font-bold text-gray-900">Fitness Village Hydration</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700">Paused</span></td>
                  <td className="px-6 py-4 text-gray-600">Jul 01, 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">8,240</td>
                  <td className="px-6 py-4 text-gray-600">1,102</td>
                  <td className="px-6 py-4 text-gray-600">128</td>
                  <td className="px-6 py-4 text-right"><a href="#" className="inline-flex items-center text-xs font-bold text-[#D63839] hover:text-[#C63238] uppercase tracking-wide">Open Campaign</a></td>
                </AnimatedRow>

                {/* Al Quoz Arts Festival */}
                <AnimatedRow className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=100&h=100" className="w-full h-full object-cover" alt="Arts Festival" />
                      </div>
                      <span className="font-bold text-gray-900">Al Quoz Arts Festival</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">Completed</span></td>
                  <td className="px-6 py-4 text-gray-600">May 15, 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">22,418</td>
                  <td className="px-6 py-4 text-gray-600">5,602</td>
                  <td className="px-6 py-4 text-gray-600">894</td>
                  <td className="px-6 py-4 text-right"><a href="#" className="inline-flex items-center text-xs font-bold text-[#D63839] hover:text-[#C63238] uppercase tracking-wide">Open Campaign</a></td>
                </AnimatedRow>

                {/* Expo City Hydration */}
                <AnimatedRow className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1582653280643-e395af6195aa?auto=format&fit=crop&q=80&w=100&h=100" className="w-full h-full object-cover" alt="Expo City" />
                      </div>
                      <span className="font-bold text-gray-900">Expo City Hydration</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-50 text-green-700">Active</span></td>
                  <td className="px-6 py-4 text-gray-600">Jul 10, 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">4,120</td>
                  <td className="px-6 py-4 text-gray-600">958</td>
                  <td className="px-6 py-4 text-gray-600">92</td>
                  <td className="px-6 py-4 text-right"><a href="#" className="inline-flex items-center text-xs font-bold text-[#D63839] hover:text-[#C63238] uppercase tracking-wide">Open Campaign</a></td>
                </AnimatedRow>

                {/* Zabeel Park Weekend — Draft, no image */}
                <AnimatedRow className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden shrink-0">
                        <Icon icon="lucide:file-edit" className="text-blue-400 text-xl" />
                      </div>
                      <span className="font-bold text-gray-900">Zabeel Park Weekend</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700">Draft</span></td>
                  <td className="px-6 py-4 text-gray-600">Aug 01, 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">0</td>
                  <td className="px-6 py-4 text-gray-600">0</td>
                  <td className="px-6 py-4 text-gray-600">0</td>
                  <td className="px-6 py-4 text-right"><a href="#" className="inline-flex items-center text-xs font-bold text-[#D63839] hover:text-[#C63238] uppercase tracking-wide">Open Campaign</a></td>
                </AnimatedRow>

                {/* Dubai Marina Walk */}
                <AnimatedRow className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=100&h=100" className="w-full h-full object-cover" alt="Marina Walk" />
                      </div>
                      <span className="font-bold text-gray-900">Dubai Marina Walk</span>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">Completed</span></td>
                  <td className="px-6 py-4 text-gray-600">Apr 10, 2024</td>
                  <td className="px-6 py-4 font-medium text-gray-900">18,920</td>
                  <td className="px-6 py-4 text-gray-600">4,105</td>
                  <td className="px-6 py-4 text-gray-600">712</td>
                  <td className="px-6 py-4 text-right"><a href="#" className="inline-flex items-center text-xs font-bold text-[#D63839] hover:text-[#C63238] uppercase tracking-wide">Open Campaign</a></td>
                </AnimatedRow>

              </AnimatedTbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <p className="text-xs text-gray-500 font-medium">Showing 6 of 12 campaigns for Masafi Water</p>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-gray-900 disabled:opacity-30" disabled>
                <Icon icon="lucide:chevron-left" />
              </button>
              <button className="px-3 py-1 text-xs font-bold bg-white border border-gray-200 rounded text-[#D63839] shadow-sm">1</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded transition-colors">2</button>
              <button className="p-2 text-gray-400 hover:text-gray-900">
                <Icon icon="lucide:chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
