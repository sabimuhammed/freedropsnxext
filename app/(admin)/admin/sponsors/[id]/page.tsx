import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedGrid, AnimatedCell } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Sponsor Profile — Masafi Water | FreeDrops" };

const stats = [
  { label: "Total Campaigns", value: "12",     icon: "lucide:megaphone",      color: "text-[#D63839]",   bg: "bg-red-50",    badge: null    },
  { label: "Total Bottles",   value: "25,000", icon: "lucide:droplet",        color: "text-[#D63839]",   bg: "bg-red-50",    badge: null    },
  { label: "Total Scans",     value: "18,290", icon: "lucide:qr-code",        color: "text-amber-600",   bg: "bg-amber-50",  badge: "49.8%" },
  { label: "Link Clicks",     value: "12,405", icon: "lucide:mouse-pointer-2", color: "text-purple-600",  bg: "bg-purple-50", badge: null    },
  { label: "Total Leads",     value: "1,028",  icon: "lucide:user-plus",      color: "text-emerald-600", bg: "bg-emerald-50", badge: null   },
];

const activeCampaigns = [
  {
    name: "Dubai Mall Summer Splash",
    since: "Active since June 12, 2024",
    scans: "12.5k Scans",
    img: "https://images.unsplash.com/photo-1548919973-5dea58b88ad6?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    name: "Fitness Village Hydration",
    since: "Active since July 01, 2024",
    scans: "8.2k Scans",
    img: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

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
            {/* Logo & Basic Info */}
            <div className="flex items-start gap-5 border-r border-gray-50 pr-8">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Masafi Water</h1>
                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industry</span>
                    <div className="mt-1 relative">
                      <select className="block w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-red-500/20">
                        <option defaultValue="">Beverage</option>
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
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                    className="w-10 h-10 rounded-full bg-gray-100"
                    alt="Sarah"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Sarah Chen</p>
                  </div>
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

        {/* Quick Stats */}
        <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {stats.map((s) => (
            <AnimatedCell key={s.label} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`}>
                  <Icon icon={s.icon} className="text-xl" />
                </div>
              </div>
              <p className="text-sm font-medium text-gray-500">{s.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{s.value}</h3>
              {s.badge && (
                <span className="text-[10px] font-bold text-[#D63839] bg-red-50 px-2 py-1 rounded-lg">
                  {s.badge}
                </span>
              )}
            </AnimatedCell>
          ))}
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

        {/* Overview Content Grid */}
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
                {activeCampaigns.map((c) => (
                  <div key={c.name} className="p-4 hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center overflow-hidden">
                        <img src={c.img} className="w-full h-full object-cover" alt={c.name} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{c.name}</h4>
                        <p className="text-xs text-gray-500">{c.since}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-gray-900">{c.scans}</div>
                    </div>
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
