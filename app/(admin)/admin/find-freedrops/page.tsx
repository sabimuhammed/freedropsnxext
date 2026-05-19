import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Find FreeDrops Requests | FreeDrops Admin" };

const requests = [
  {
    name: "Omar Hassan",
    phone: "+971 50 123 4567",
    email: "omar.hassan@example.com",
    status: "VERIFIED",
    submitted: "Oct 25, 2023 • 02:15 PM",
  },
  {
    name: "Sarah Jenkins",
    phone: "+971 52 987 6543",
    email: "s.jenkins@webmail.com",
    status: "PENDING",
    submitted: "Oct 25, 2023 • 01:40 PM",
  },
  {
    name: "Mohammed Al-Fayed",
    phone: "+971 56 445 8899",
    email: "m.fayed@corp.ae",
    status: "VERIFIED",
    submitted: "Oct 25, 2023 • 11:12 AM",
  },
  {
    name: "Elena Rodriguez",
    phone: "+971 55 221 3344",
    email: "elena.rod@gmail.com",
    status: "PENDING",
    submitted: "Oct 24, 2023 • 05:30 PM",
  },
  {
    name: "David Chen",
    phone: "+971 58 776 5544",
    email: "d.chen@designhub.ae",
    status: "VERIFIED",
    submitted: "Oct 24, 2023 • 09:15 AM",
  },
];

export default function FindFreeDropsPage() {
  return (
    <AnimatedPage>
      <div>
        <div className="mb-8 space-y-1">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/admin/dashboard" className="text-gray-400 hover:text-[#D63839] uppercase tracking-wide">Admin</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-400 uppercase tracking-wide">Find FreeDrops Requests</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Find FreeDrops Requests</h1>
          <p className="text-sm text-gray-500">Real-time data from users searching for nearby hydration points.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white border-b border-gray-100">
                <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <th className="px-6 py-4">Full Name</th>
                  <th className="px-6 py-4">Phone Number</th>
                  <th className="px-6 py-4">Email Address</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Submitted At</th>
                </tr>
              </thead>
              <AnimatedTbody className="divide-y divide-gray-50 text-sm bg-white">
                {requests.map((r) => (
                  <AnimatedRow key={r.email} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-gray-900">{r.name}</td>
                    <td className="px-6 py-5 text-gray-600">{r.phone}</td>
                    <td className="px-6 py-5 text-gray-600">{r.email}</td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${r.status === "VERIFIED" ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-600"}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-gray-400 text-xs whitespace-nowrap">{r.submitted}</td>
                  </AnimatedRow>
                ))}
              </AnimatedTbody>
            </table>
          </div>

          <div className="p-6 bg-white border-t border-gray-100 flex items-center justify-between">
            <p className="text-xs text-gray-500 font-medium">
              Showing <span className="font-bold text-gray-900">5</span> of <span className="font-bold text-gray-900">892</span> Total Requests
            </p>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-xs font-medium text-gray-400 bg-white border border-gray-200 rounded-lg cursor-not-allowed" disabled>
                Previous
              </button>
              <button className="px-4 py-2 text-xs font-semibold text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Next Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
