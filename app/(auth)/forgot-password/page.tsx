import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata = { title: "Reset Your Password | FreeDrops" };

export default function ForgotPasswordPage() {
  return (
    <main className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white login-card p-10 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-center mb-8">
            <img
              src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/a28980ec-4fe4-4b74-8a39-48a7ae867000/1774559290124-0d3fe8fa/freedropslogo.png"
              alt="FreeDrops.ae"
              className="h-[100px] w-auto object-contain"
            />
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Reset Password</h1>
            <p className="text-slate-500">Enter your email to receive a reset link.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <Icon icon="lucide:mail" />
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#B12B2C] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-[#B12B2C] text-white font-bold rounded-xl shadow-lg shadow-red-100 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Send Reset Link <Icon icon="lucide:send" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-sm text-[#B12B2C] font-semibold hover:underline flex items-center justify-center gap-1">
              <Icon icon="lucide:arrow-left" className="text-sm" /> Back to Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
