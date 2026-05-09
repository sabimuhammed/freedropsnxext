"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

const steps = [
  { num: 1, label: "Basics", href: "/sponsor/campaigns/create/step-1" },
  { num: 2, label: "QR Action", href: "/sponsor/campaigns/create/step-2" },
  { num: 3, label: "Packages", href: "/sponsor/campaigns/create/step-3" },
  { num: 4, label: "Coupon", href: "/sponsor/campaigns/create/step-4" },
  { num: 5, label: "Locations & Tags", href: "/sponsor/campaigns/create/step-5" },
  { num: 6, label: "Review", href: "/sponsor/campaigns/create/review" },
];

export default function SponsorCampaignCreateSteps({ current }: { current: number }) {
  return (
    <div className="mb-10 border-b border-gray-200">
      <nav className="flex gap-6 overflow-x-auto">
        {steps.map((s) => (
          <Link
            key={s.num}
            href={s.href}
            className={`pb-4 text-xs font-bold flex items-center gap-2 shrink-0 transition-colors ${
              s.num === current
                ? "text-[#B12B2C] border-b-2 border-[#B12B2C]"
                : s.num < current
                ? "text-gray-400 hover:text-[#B12B2C]"
                : "text-gray-400 border-b-2 border-transparent pointer-events-none"
            }`}
          >
            {s.num < current ? (
              <Icon icon="lucide:check-circle-2" className="text-green-500 text-base" />
            ) : (
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${s.num === current ? "bg-[#B12B2C] text-white" : "bg-gray-200 text-gray-500"}`}>
                {s.num}
              </span>
            )}
            {s.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
