import Link from "next/link";
import { logoutAction, requireUser } from "./actions";

export default async function Page() {
  const user = await requireUser(); // <— add await

  if (!user) {
    return (
      <div className="py-6 space-y-6">
        <h1 className="text-xl font-semibold">MyAccount</h1>
        <p className="text-sm text-neutral-700">Please sign in to view your account.</p>
        <div className="flex gap-3">
          <Link href="/myaccount/login" className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
            Sign in
          </Link>
          <Link href="/myaccount/register" className="rounded-xl border border-blue-700 bg-white px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50">
            Create account
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Welcome, {user.username}</h1>
        <form action={logoutAction}>
          <button className="rounded-xl border bg-white px-3 py-2 text-sm hover:bg-neutral-50">Sign out</button>
        </form>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Billing & Payments</h2>
          <p className="mt-2 text-sm text-neutral-700">View balance, schedule a payment, and manage AutoPay.</p>
          <a className="mt-3 inline-block underline" href="#">Go to billing</a>
        </div>
        <div className="rounded-xl border bg-white p-6">
          <h2 className="text-lg font-semibold">Service Requests</h2>
          <p className="mt-2 text-sm text-neutral-700">Start/stop/transfer service and view appointments.</p>
          <a className="mt-3 inline-block underline" href="#">Manage service</a>
        </div>
      </div>
    </div>
  );
}
