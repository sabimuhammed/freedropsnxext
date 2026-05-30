"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

const AVATAR_STYLES = [
  { bg: "bg-[#FEE2E3]", color: "text-[#D63839]" },
  { bg: "bg-amber-50", color: "text-amber-600" },
  { bg: "bg-emerald-50", color: "text-emerald-600" },
  { bg: "bg-purple-50", color: "text-purple-600" },
  { bg: "bg-blue-50", color: "text-blue-600" },
  { bg: "bg-orange-50", color: "text-orange-600" },
];

const INITIAL_SPONSORS = [
  { initials: "MW", name: "Masafi Water", domain: "masafi.com", industry: "Beverage", contact: "Sarah Chen", phone: "+971 50 123 4567", status: "Active", campaigns: 12, created: "Oct 12, 2023", bg: "bg-[#FEE2E3]", color: "text-[#D63839]" },
  { initials: "ET", name: "Etisalat UAE", domain: "etisalat.ae", industry: "Telecom", contact: "Omar Al-Sayed", phone: "+971 55 987 6543", status: "Active", campaigns: 8, created: "Nov 05, 2023", bg: "bg-amber-50", color: "text-amber-600" },
  { initials: "DP", name: "DP World", domain: "dpworld.com", industry: "Logistics", contact: "James Miller", phone: "+971 4 333 4444", status: "Inactive", campaigns: 5, created: "Jan 15, 2024", bg: "bg-emerald-50", color: "text-emerald-600" },
  { initials: "EK", name: "Emirates", domain: "emirates.com", industry: "Aviation", contact: "Laila Hassan", phone: "+971 52 222 1111", status: "Active", campaigns: 14, created: "Feb 10, 2024", bg: "bg-purple-50", color: "text-purple-600" },
];

const EMPTY_FORM = { companyName: "", phone: "", contact: "", email: "", password: "", confirmPassword: "" };

function getInitials(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

function getDomain(email: string) {
  return email.includes("@") ? email.split("@")[1] : "";
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "2-digit", year: "numeric" });
}

export default function SponsorsClient() {
  const [sponsors, setSponsors] = useState(INITIAL_SPONSORS);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit() {
    if (!form.companyName.trim()) return;
    const style = AVATAR_STYLES[sponsors.length % AVATAR_STYLES.length];
    setSponsors((prev) => [
      ...prev,
      {
        initials: getInitials(form.companyName),
        name: form.companyName.trim(),
        domain: getDomain(form.email),
        industry: "—",
        contact: form.contact.trim(),
        phone: form.phone.trim(),
        status: "Active",
        campaigns: 0,
        created: formatDate(new Date()),
        bg: style.bg,
        color: style.color,
      },
    ]);
    setForm(EMPTY_FORM);
    setModalOpen(false);
  }

  return (
    <AnimatedPage>
      <div>
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Sponsors</h1>
            <p className="text-sm text-gray-500">Manage and monitor sponsor accounts across the platform.</p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200"
          >
            <Icon icon="lucide:plus" />Add Sponsor
          </button>
        </header>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm">
          <div className="p-4 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-50">
            <div className="relative flex-1 w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <Icon icon="lucide:search" />
              </span>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#D63839] transition-all"
                placeholder="Search by name, email or contact person..."
              />
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 bg-gray-50/50 border border-gray-200 px-3 py-2 rounded-lg">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status:</label>
                <select className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer">
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>
              <div className="flex items-center gap-2 bg-gray-50/50 border border-gray-200 px-3 py-2 rounded-lg">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Industry:</label>
                <select className="bg-transparent text-sm font-medium text-gray-700 focus:outline-none cursor-pointer">
                  <option>All Industries</option>
                  <option>Beverage</option>
                  <option>Telecommunications</option>
                  <option>Logistics</option>
                  <option>Aviation</option>
                </select>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50/50">
                <tr className="table-header">
                  <th className="px-6 py-4 font-semibold">Sponsor Name</th>
                  <th className="px-6 py-4 font-semibold">Industry</th>
                  <th className="px-6 py-4 font-semibold">Contact Person</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Campaigns</th>
                  <th className="px-6 py-4 font-semibold">Created Date</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <AnimatedTbody className="divide-y divide-gray-50">
                {sponsors.map((s) => (
                  <AnimatedRow key={s.name + s.created} className="text-sm text-gray-700 hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-full ${s.bg} flex items-center justify-center ${s.color} font-bold text-xs uppercase`}>
                          {s.initials}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900">{s.name}</span>
                          <span className="text-[11px] text-gray-400">{s.domain}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">{s.industry}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-medium">{s.contact}</span>
                        <span className="text-[11px] text-gray-500">{s.phone}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${s.status === "Active" ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1 font-medium">
                        <Icon icon="lucide:megaphone" className="text-gray-400" />{s.campaigns}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{s.created}</td>
                    <td className="px-6 py-4 text-right">
                      <Link href="/admin/sponsors/1" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D63839] hover:text-red-800 tracking-wide uppercase">
                        View Profile<Icon icon="lucide:chevron-right" />
                      </Link>
                    </td>
                  </AnimatedRow>
                ))}
              </AnimatedTbody>
            </table>
          </div>

          <div className="p-6 border-t border-gray-50 flex items-center justify-between">
            <p className="text-xs text-gray-500">Showing <span className="font-bold text-gray-900">{sponsors.length}</span> sponsors</p>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50" disabled>
                <Icon icon="lucide:chevron-left" />
              </button>
              <button className="px-3 py-1.5 rounded-lg border border-red-200 bg-[#FEE2E3] text-[#D63839] text-xs font-bold">1</button>
              <button className="p-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50">
                <Icon icon="lucide:chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create Sponsor Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setModalOpen(false)}>
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Create Sponsor</h2>
                <p className="text-sm text-gray-500 mt-0.5">Fill in the details below to create your sponsor account.</p>
              </div>
              <button onClick={() => setModalOpen(false)} className="p-2 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors">
                <Icon icon="lucide:x" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Company Name</label>
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus-within:border-[#D63839] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                  <Icon icon="lucide:building-2" className="text-gray-400 shrink-0" />
                  <input name="companyName" value={form.companyName} onChange={handleChange} type="text" placeholder="Acme Corporation" className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus-within:border-[#D63839] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                  <Icon icon="lucide:phone" className="text-gray-400 shrink-0" />
                  <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+971 XX XXX XXXX" className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-5">
              <label className="text-sm font-semibold text-gray-700">Primary Contact Person</label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus-within:border-[#D63839] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                <Icon icon="lucide:user" className="text-gray-400 shrink-0" />
                <input name="contact" value={form.contact} onChange={handleChange} type="text" placeholder="Jane Smith" className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mb-5">
              <label className="text-sm font-semibold text-gray-700">Business Email</label>
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus-within:border-[#D63839] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                <Icon icon="lucide:mail" className="text-gray-400 shrink-0" />
                <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="jane@company.com" className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-7">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus-within:border-[#D63839] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                  <Icon icon="lucide:lock" className="text-gray-400 shrink-0" />
                  <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="••••••••" className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-gray-50/50 focus-within:border-[#D63839] focus-within:ring-2 focus-within:ring-red-500/20 transition-all">
                  <Icon icon="lucide:shield-check" className="text-gray-400 shrink-0" />
                  <input name="confirmPassword" value={form.confirmPassword} onChange={handleChange} type="password" placeholder="••••••••" className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full" />
                </div>
              </div>
            </div>

            <button onClick={handleSubmit} className="w-full flex items-center justify-center gap-2 bg-[#8B2020] hover:bg-[#7a1c1c] text-white py-4 rounded-2xl text-base font-semibold transition-all">
              Create Sponsor Account <Icon icon="lucide:chevron-right" />
            </button>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
}
