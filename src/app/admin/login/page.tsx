import LoginForm from "@/components/admin/LoginForm";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl font-extrabold mb-1">
            Appliance Fix <span className="text-blue">VA</span>
          </h1>
          <p className="text-white/50 text-sm">Admin Panel</p>
        </div>
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-1">Sign in</h2>
          <p className="text-sm text-slate-500 mb-6">
            Enter the admin password to continue.
          </p>
          <LoginForm />
        </div>
        <p className="text-center text-white/30 text-xs mt-6">
          Protected area — authorized personnel only.
        </p>
      </div>
    </div>
  );
}
