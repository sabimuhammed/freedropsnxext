import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Contact Submissions | FreeDrops Admin" };

const submissions = [
  {
    name: "Amara Okafor",
    phone: "+971 50 443 1122",
    email: "amara.o@techvision.io",
    subject: "ADVERTISING QUOTE",
    message: "We are looking to sponsor 10k...",
    submitted: "Oct 24, 2023 • 10:14 AM",
    type: "quote",
  },
  {
    name: "Karim El-Sayed",
    phone: "+971 56 220 9876",
    email: "k.elsayed@dubaimall.com",
    subject: "GENERAL ENQUIRY",
    message: "How can I apply to become a...",
    submitted: "Oct 23, 2023 • 04:45 PM",
    type: "enquiry",
  },
  {
    name: "Sophia Martinez",
    phone: "+971 52 778 3344",
    email: "s.martinez@eventsco.ae",
    subject: "ADVERTISING QUOTE",
    message: "Requesting a quote for 5,000...",
    submitted: "Oct 23, 2023 • 09:12 AM",
    type: "quote",
  },
  {
    name: "Zaid Abdullah",
    phone: "+971 55 111 0022",
    email: "zaid.a@startup.hub",
    subject: "GENERAL ENQUIRY",
    message: "Do you offer any discounts fo...",
    submitted: "Oct 22, 2023 • 11:30 AM",
    type: "enquiry",
  },
  {
    name: "Linda Chen",
    phone: "+971 58 990 4455",
    email: "linda.chen@marketing.ae",
    subject: "ADVERTISING QUOTE",
    message: "Interested in your QR scan...",
    submitted: "Oct 21, 2023 • 03:20 PM",
    type: "quote",
  },
];

export default function ContactSubmissionsPage() {
  return (
    <AnimatedPage>
      <div>
        <div className="mb-8 space-y-1">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-xs">
              <li><Link href="/admin/get-a-quote" className="text-gray-400 hover:text-[#D63839] uppercase tracking-wide">Quote Requests</Link></li>
              <li><Icon icon="lucide:chevron-right" className="text-gray-300 mx-1" /></li>
              <li><span className="font-bold text-gray-400 uppercase tracking-wide">Contact Form Submissions</span></li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-900">Contact Form Submissions</h1>
          <p className="text-sm text-gray-500">Displaying data from the website&apos;s frontend contact portal.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
          <div className="p-4 border-b border-gray-100 bg-gray-50/30">
            <div className="relative max-w-sm">
              <Icon icon="lucide:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, email..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-[#D63839]/20 outline-none transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white border-b border-gray-100">
                <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <th className="px-6 py-4">Full Name</th>
                  <th className="px-6 py-4">Mobile / Phone</th>
                  <th className="px-6 py-4">Email Address</th>
                  <th className="px-6 py-4">Subject</th>
                  <th className="px-6 py-4">Message Preview</th>
                  <th className="px-6 py-4">Submitted</th>
                </tr>
              </thead>
              <AnimatedTbody className="divide-y divide-gray-50 text-sm bg-white">
                {submissions.map((s) => (
                  <AnimatedRow key={s.email} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-5 font-bold text-gray-900">{s.name}</td>
                    <td className="px-6 py-5 text-gray-600">{s.phone}</td>
                    <td className="px-6 py-5 text-gray-600">{s.email}</td>
                    <td className="px-6 py-5">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide ${s.type === "quote" ? "bg-red-50 text-[#D63839]" : "bg-gray-100 text-gray-600"}`}>
                        {s.subject}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-gray-500 max-w-[200px] truncate">{s.message}</td>
                    <td className="px-6 py-5 text-gray-400 text-xs whitespace-nowrap">{s.submitted}</td>
                  </AnimatedRow>
                ))}
              </AnimatedTbody>
            </table>
          </div>

          <div className="p-6 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
            <p className="text-xs text-gray-500 font-medium">
              Showing <span className="font-bold text-gray-900">5</span> of <span className="font-bold text-gray-900">142</span> Total Submissions
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
