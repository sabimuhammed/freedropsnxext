import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimatedPage from "@/components/shared/AnimatedPage";

export const metadata = { title: "Become a Sponsor | FreeDrops" };

export default function RegisterPage() {
  return (
    <AnimatedPage>
    <main className="flex-1 flex items-center justify-center p-6 py-12">
      <div className="w-full max-w-lg">
        <div className="bg-white login-card p-10 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-center mb-6">
            <img
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1774559290124-0d3fe8fa/freedropslogo.png"
              alt="FreeDrops.ae"
              className="h-20 w-auto object-contain"
            />
          </div>
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Sponsor Account</h1>
            <p className="text-slate-500">Start running your first hydration campaign</p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">First Name</label>
                <input type="text" placeholder="Sarah" className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B12B2C] focus:border-transparent transition-all text-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Last Name</label>
                <input type="text" placeholder="Chen" className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B12B2C] focus:border-transparent transition-all text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Company Name</label>
              <input type="text" placeholder="Masafi Water" className="block w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B12B2C] focus:border-transparent transition-all text-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Work Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Icon icon="lucide:mail" />
                </div>
                <input type="email" placeholder="sarah@masafi.com" className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B12B2C] focus:border-transparent transition-all text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Phone Number</label>
              <div className="flex">
                <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-sm">+971</span>
                <input type="tel" placeholder="50 123 4567" className="flex-1 px-4 py-3 rounded-r-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#B12B2C] focus:border-transparent transition-all text-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Icon icon="lucide:lock" />
                </div>
                <input type="password" placeholder="••••••••" className="block w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B12B2C] focus:border-transparent transition-all text-sm" />
              </div>
            </div>

            <div className="flex items-start space-x-2 px-1">
              <input type="checkbox" id="terms" className="w-4 h-4 mt-0.5 text-[#B12B2C] border-slate-300 rounded focus:ring-[#B12B2C]" />
              <label htmlFor="terms" className="text-sm text-slate-500">
                I agree to the <a href="#" className="text-[#B12B2C] font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-[#B12B2C] font-semibold hover:underline">Privacy Policy</a>
              </label>
            </div>

            <Link
              href="/register-success"
              className="w-full py-4 px-6 bg-[#B12B2C] text-white font-bold rounded-xl shadow-lg shadow-red-100 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Create Account <Icon icon="lucide:arrow-right" />
            </Link>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Already have an account?{" "}
              <Link href="/login" className="text-[#B12B2C] font-semibold hover:underline">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
    </AnimatedPage>
  );
}
