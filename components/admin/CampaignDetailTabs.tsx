import Link from "next/link";

const tabs = [
  { label: "Overview", href: "/admin/campaigns/[id]/overview", key: "overview" },
  { label: "QR Links", href: "/admin/campaigns/[id]/qr-links", key: "qr-links" },
  { label: "Analytics", href: "/admin/campaigns/[id]/analytics", key: "analytics" },
  { label: "Leads", href: "/admin/campaigns/[id]/leads", key: "leads", badge: "24" },
  { label: "Creative", href: "/admin/campaigns/[id]/creative", key: "creative" },
];

export default function CampaignDetailTabs({ id, active }: { id: string; active: string }) {
  return (
    <div className="mb-8 border-b border-gray-200">
      <nav className="flex gap-10">
        {tabs.map((t) => (
          <Link
            key={t.key}
            href={t.href.replace("[id]", id)}
            className={`pb-4 text-sm font-bold flex items-center gap-2 transition-colors ${
              active === t.key
                ? "text-[#D63839] border-b-2 border-[#D63839]"
                : "text-gray-500 border-b-2 border-transparent hover:text-[#D63839]"
            }`}
          >
            {t.label}
            {t.badge && (
              <span className="px-1.5 py-0.5 bg-gray-100 text-[10px] rounded text-gray-500">{t.badge}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}
