import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";
import { AnimatedTbody, AnimatedRow } from "@/components/shared/AnimatedGrid";

export const metadata = { title: "Redirect Links — Global | FreeDrops Admin" };

const links = [
  { slug: "masafi-summer", destination: "https://masafi.com/summer", campaign: "Summer Splash", clicks: "3,218", created: "Jun 10, 2024", status: "Active" },
  { slug: "mai-fitness", destination: "https://maidubai.com/fitness", campaign: "Fitness Village", clicks: "1,102", created: "Jul 01, 2024", status: "Active" },
  { slug: "pepsi-school", destination: "https://pepsi.ae/school", campaign: "Back to School", clicks: "0", created: "Aug 15, 2024", status: "Draft" },
  { slug: "alain-arts", destination: "https://alainwater.ae/arts", campaign: "Arts Festival", clicks: "5,602", created: "May 15, 2024", status: "Completed" },
];

export default function RedirectLinksPage() {
  return (
    <AnimatedPage>
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Redirect Links</h1>
          <p className="text-sm text-gray-500 mt-1">Manage all global redirect URLs for QR campaigns.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#D63839] hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-sm shadow-red-200">
          <Icon icon="lucide:plus" />Add Link
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50/50">
              <tr className="table-header">
                <th className="px-6 py-4 font-semibold">Slug</th>
                <th className="px-6 py-4 font-semibold">Destination URL</th>
                <th className="px-6 py-4 font-semibold">Campaign</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Clicks</th>
                <th className="px-6 py-4 font-semibold">Created</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <AnimatedTbody className="divide-y divide-gray-50 text-sm">
              {links.map((l) => (
                <AnimatedRow key={l.slug} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-semibold text-[#D63839]">/{l.slug}</td>
                  <td className="px-6 py-4 text-gray-500 text-xs max-w-xs truncate">{l.destination}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{l.campaign}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                      l.status === "Active" ? "bg-green-50 text-green-700" :
                      l.status === "Completed" ? "bg-gray-100 text-gray-600" :
                      "bg-blue-50 text-blue-700"
                    }`}>{l.status}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{l.clicks}</td>
                  <td className="px-6 py-4 text-gray-500">{l.created}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-gray-400 hover:text-[#D63839]"><Icon icon="lucide:edit-3" /></button>
                      <button className="text-gray-400 hover:text-[#D63839]"><Icon icon="lucide:copy" /></button>
                      <button className="text-gray-400 hover:text-red-500"><Icon icon="lucide:trash-2" /></button>
                    </div>
                  </td>
                </AnimatedRow>
              ))}
            </AnimatedTbody>
          </table>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
}
