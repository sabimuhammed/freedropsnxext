import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsor Profile — Masafi Water | FreeDrops" };

export default function SponsorProfilePage() {
  return (
    <AnimatedPage>
      <div>

        {/* Breadcrumb + Header Actions */}
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
            <button className="flex items-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold transition-all">
              <Icon icon="lucide:edit-3" />Edit Profile
            </button>
            <button className="flex items-center gap-2 bg-[#D63839] hover:bg-[#C42F37] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200">
              <Icon icon="lucide:plus" />Create Campaign
            </button>
          </div>
        </div>

        {/* Sponsor Company Card */}
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Basic Info */}
            <div className="flex items-start gap-5 border-r border-gray-50 pr-8">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Masafi Water</h1>
                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industry</span>
                    <div className="mt-1 relative">
                      <select className="block w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500/20">
                        <option>Beverage</option>
                        <option>Telecommunications</option>
                        <option>Logistics</option>
                        <option>Aviation</option>
                        <option>Retail</option>
                      </select>
                      <Icon icon="lucide:chevron-down" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <a href="#" className="text-xs font-medium text-[#D63839] hover:underline flex items-center gap-1">
                    <Icon icon="lucide:external-link" />masafi.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-5 px-8">
              <div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">Primary Contact</span>
                <div className="flex items-center gap-3">
                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah" className="w-10 h-10 rounded-full bg-gray-100" alt="Sarah" />
                  <p className="text-sm font-bold text-gray-900">Sarah Chen</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon icon="lucide:mail" className="text-gray-400" />
                  <span>sarah.chen@masafi.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon icon="lucide:phone" className="text-gray-400" />
                  <span>+971 50 123 4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats — hardcoded to avoid Tailwind JIT purging dynamic classes */}
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">

          <AnimatedCell className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D63839]">
                <Icon icon="lucide:megaphone" className="text-xl" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500">Total Campaigns</p>
            <h3 className="text-2xl font-bold text-gray-900">12</h3>
          </AnimatedCell>

          <AnimatedCell className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-[#D63839]">
                <Icon icon="lucide:droplet" className="text-xl" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500">Total Bottles</p>
            <h3 className="text-2xl font-bold text-gray-900">25,000</h3>
          </AnimatedCell>

          <AnimatedCell className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Icon icon="lucide:qr-code" className="text-xl" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500">Total Scans</p>
            <h3 className="text-2xl font-bold text-gray-900">18,290</h3>
            <span className="text-[10px] font-bold text-[#D63839] bg-red-50 px-2 py-1 rounded-lg">49.8%</span>
          </AnimatedCell>

          <AnimatedCell className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                <Icon icon="lucide:mouse-pointer-2" className="text-xl" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500">Link Clicks</p>
            <h3 className="text-2xl font-bold text-gray-900">12,405</h3>
          </AnimatedCell>

          <AnimatedCell className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Icon icon="lucide:user-plus" className="text-xl" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500">Total Leads</p>
            <h3 className="text-2xl font-bold text-gray-900">1,028</h3>
          </AnimatedCell>

        </AnimatedGrid>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <a href="#" className="tab-active whitespace-nowrap py-4 px-1 text-sm font-bold border-b-2 tracking-tight">Overview</a>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium border-b-2 tracking-tight">Assets &amp; Media</a>
            <Link href="/admin/sponsors/1/campaigns" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium border-b-2 tracking-tight">Campaign History</Link>
            <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium border-b-2 tracking-tight">Settings</a>
          </nav>
        </div>

        {/* Active Campaigns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
              <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                <h3 className="font-bold text-gray-900">Active Campaigns</h3>
                <Link href="/admin/sponsors/1/campaigns" className="text-xs font-bold text-[#D63839] uppercase tracking-wide hover:underline">
                  View All
                </Link>
              </div>
              <div className="divide-y divide-gray-50">

                <div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center overflow-hidden">
                      <img src="/dubai-mall.png" className="w-full h-full object-cover" alt="Dubai Mall Summer Splash" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Dubai Mall Summer Splash</h4>
                      <p className="text-xs text-gray-500">Active since June 12, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">12.5k Scans</div>
                  </div>
                </div>

                <div className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=100&h=100" className="w-full h-full object-cover" alt="Fitness Village Hydration" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Fitness Village Hydration</h4>
                      <p className="text-xs text-gray-500">Active since July 01, 2024</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-gray-900">8.2k Scans</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </AnimatedPage>
  );
}
