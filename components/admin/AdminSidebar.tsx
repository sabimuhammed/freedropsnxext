"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const navItems = [
  { id: "dashboard", href: "/admin/dashboard", icon: "lucide:layout-dashboard", label: "Dashboard Overview" },
  { id: "campaigns", href: "/admin/campaigns", icon: "lucide:megaphone", label: "Campaigns" },
  { id: "sponsors", href: "/admin/sponsors", icon: "lucide:building-2", label: "Sponsors" },
  { id: "locations", href: "/admin/locations", icon: "lucide:map-pin", label: "Locations" },
  { id: "qr", href: "/admin/qr-links", icon: "lucide:qr-code", label: "QR Codes" },
];

const reportingItems = [
  { id: "analytics", href: "/admin/redirect-links", icon: "lucide:bar-chart-3", label: "Analytics" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <aside className="w-64 glass-sidebar fixed inset-y-0 left-0 flex flex-col z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#D63839] rounded-lg flex items-center justify-center">
          <Icon icon="lucide:droplets" className="text-white text-xl" />
        </div>
        <span className="text-xl font-bold text-gray-900 tracking-tight">FreeDrops</span>
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

        <div className="pt-4 pb-2 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Reporting
        </div>

        {reportingItems.map((item) => (
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
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
            className="w-9 h-9 rounded-full bg-gray-200"
            alt="Admin"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">Ahmed Salem</p>
            <p className="text-xs text-gray-500 truncate">System Admin</p>
          </div>
          <Link href="/admin/login" className="text-gray-400 hover:text-gray-600">
            <Icon icon="lucide:log-out" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
