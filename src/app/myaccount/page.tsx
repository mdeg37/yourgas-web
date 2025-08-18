import Link from "next/link";
import UiCard from "@/components/UiCard";

export default function Page() {
  return (
    <div className="py-6 space-y-8">
      <h1 className="text-xl font-semibold">MyAccount</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <UiCard title="Sign in or Create Account" ctaHref="#" ctaLabel="Sign in">
          Manage billing, payments, and service requests from your account hub.
        </UiCard>

        <UiCard title="View & Pay Bill" ctaHref="/ways-to-pay" ctaLabel="Ways to Pay">
          See your current balance, schedule a payment, or set up autopay.
        </UiCard>

        <UiCard title="Manage Service" ctaHref="/safety" ctaLabel="Safety & Service">
          Start/stop service, transfer to a new address, or request a technician.
        </UiCard>

        <UiCard title="Notifications & Preferences" ctaHref="#" ctaLabel="Manage alerts">
          Choose text/email alerts for bills, service visits, and outages.
        </UiCard>
      </div>

      <div className="rounded-lg border bg-white p-6 text-sm text-neutral-700">
        <p className="font-semibold">Security note</p>
        <p className="mt-1">
          We never store raw card or bank details. Payments are securely processed by a PCI-compliant provider.
        </p>
      </div>
    </div>
  );
}
