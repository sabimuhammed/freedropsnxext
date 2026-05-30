"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const navItems = [
  { id: "dashboard", href: "/admin/dashboard", icon: "lucide:layout-dashboard", label: "Dashboard Overview" },
  { id: "campaigns", href: "/admin/campaigns", icon: "lucide:megaphone", label: "Campaigns" },
  { id: "sponsors", href: "/admin/sponsors", icon: "lucide:building-2", label: "Sponsors" },
  { id: "locations", href: "/admin/locations", icon: "lucide:map-pin", label: "Locations" },
  { id: "category-tags", href: "/admin/category-tags", icon: "lucide:tag", label: "Category Tags" },
  { id: "qr", href: "/admin/qr-links", icon: "lucide:qr-code", label: "QR Codes" },
];

const userInquiryItems = [
  { id: "find-freedrops", href: "/admin/find-freedrops", icon: "lucide:search", label: "Find FreeDrops" },
  { id: "contact-submissions", href: "/admin/contact-submissions", icon: "lucide:inbox", label: "Contact Submissions" },
  { id: "get-a-quote", href: "/admin/get-a-quote", icon: "lucide:file-text", label: "Get a Quote Data" },
];

const reportingItems = [
  { id: "analytics", href: "/admin/analytics", icon: "lucide:bar-chart-3", label: "Analytics" },
  //  { id: "analytics", href: "/admin/redirect-links", icon: "lucide:bar-chart-3", label: "Analytics" },
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
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <motion.div key={item.id} whileTap={{ scale: 0.97 }} className="relative">
              {active && (
                <motion.span
                  layoutId="admin-nav-indicator"
                  className="absolute inset-0 bg-red-50 rounded-lg border-r-2 border-[#D63839]"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <Link
                href={item.href}
                className={`relative flex items-center px-4 py-3 text-sm font-medium rounded-lg sidebar-link ${active ? "text-[#D63839]" : ""}`}
              >
                <Icon icon={item.icon} className="mr-3 text-lg" />
                {item.label}
              </Link>
            </motion.div>
          );
        })}

        <div className="pt-4 pb-2 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          User Inquiries
        </div>

        {userInquiryItems.map((item) => {
          const active = isActive(item.href);
          return (
            <motion.div key={item.id} whileTap={{ scale: 0.97 }} className="relative">
              {active && (
                <motion.span
                  layoutId="admin-nav-indicator"
                  className="absolute inset-0 bg-red-50 rounded-lg border-r-2 border-[#D63839]"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <Link
                href={item.href}
                className={`relative flex items-center px-4 py-3 text-sm font-medium rounded-lg sidebar-link ${active ? "text-[#D63839]" : ""}`}
              >
                <Icon icon={item.icon} className="mr-3 text-lg" />
                {item.label}
              </Link>
            </motion.div>
          );
        })}

        <div className="pt-4 pb-2 px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          Reporting
        </div>

        {reportingItems.map((item) => {
          const active = isActive(item.href);
          return (
            <motion.div key={item.id} whileTap={{ scale: 0.97 }} className="relative">
              {active && (
                <motion.span
                  layoutId="admin-nav-indicator"
                  className="absolute inset-0 bg-red-50 rounded-lg border-r-2 border-[#D63839]"
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
              <Link
                href={item.href}
                className={`relative flex items-center px-4 py-3 text-sm font-medium rounded-lg sidebar-link ${active ? "text-[#D63839]" : ""}`}
              >
                <Icon icon={item.icon} className="mr-3 text-lg" />
                {item.label}
              </Link>
            </motion.div>
          );
        })}
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
