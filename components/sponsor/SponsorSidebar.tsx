"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const navItems = [
  { id: "dashboard", href: "/sponsor/dashboard", icon: "lucide:layout-dashboard", label: "Dashboard" },
  { id: "campaigns", href: "/sponsor/campaigns", icon: "lucide:megaphone", label: "My Campaigns" },
  { id: "support", href: "/sponsor/support", icon: "lucide:headphones", label: "Support" },
];

export default function SponsorSidebar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <aside className="w-64 glass-sidebar fixed inset-y-0 left-0 flex flex-col z-50">
      <div className="p-6 flex justify-center">
        <img
          src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1774559290124-0d3fe8fa/freedropslogo.png"
          alt="FreeDrops"
          className="h-12 w-auto object-contain"
        />
      </div>

      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg sidebar-link ${
              isActive(item.href) ? "sidebar-link-active" : ""
            }`}
          >
            <Icon icon={item.icon} className="mr-3 text-lg" />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-gray-100">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-[#FEE2E3] flex items-center justify-center text-[#B12B2C] font-bold text-xs">
            MW
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Masafi Water</p>
            <p className="text-xs text-gray-500 truncate">Sponsor</p>
          </div>
          <Link href="/login" className="text-gray-400 hover:text-gray-600">
            <Icon icon="lucide:log-out" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
