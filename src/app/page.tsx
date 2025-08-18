import Link from "next/link";
import AlertBanner from "@/components/AlertBanner";

export default function Home() {
  return (
    <div className="py-6 space-y-10">
      {/* Hero */}
      <section className="rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-10 text-white">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome to YourGas</h1>
        <p className="mt-2 max-w-2xl text-white/90">
          Manage your account, pay your bill, and find service information—all in one place.
        </p>
        <div className="mt-5 flex gap-3">
          <Link
            href="/myaccount"
            className="inline-flex items-center justify-center rounded-xl border border-transparent
                       bg-blue-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-600"
          >
            Go to MyAccount
          </Link>
          <Link
            href="/ways-to-pay"
            className="inline-flex items-center justify-center rounded-xl border border-blue-700
                       bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-50"
          >
            Ways to Pay
          </Link>
        </div>
      </section>

      <AlertBanner />

      {/* Quick links */}
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Start / Stop / Transfer</h2>
          <p className="mt-2 text-sm text-neutral-700">
            Moving? Set up service at a new address or transfer from your current location.
          </p>
          <Link href="/residential" className="mt-4 inline-block underline">Learn more</Link>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Outage Map & Updates</h2>
          <p className="mt-2 text-sm text-neutral-700">
            Check current notices and scheduled maintenance.
          </p>
          <Link href="/outages" className="mt-4 inline-block underline">View outages</Link>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Business Services</h2>
          <p className="mt-2 text-sm text-neutral-700">
            Commercial rates, projects, and efficiency programs.
          </p>
          <Link href="/business" className="mt-4 inline-block underline">For business</Link>
        </div>
      </section>
    </div>
  );
}
