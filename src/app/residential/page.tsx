import RegionSwitch from "@/components/RegionSwitch";
import UiCard from "@/components/UiCard";
import Link from "next/link";

export default function Page({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const region = (searchParams?.region as string) || "AZ";

  return (
    <div className="py-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Residential Services</h1>
        <RegionSwitch />
      </div>

      <p className="text-sm text-neutral-700">
        Explore residential services, rates, rebates, and energy-saving tips for your region ({region}).
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <UiCard title="Start / Stop / Transfer" ctaHref="/contact" ctaLabel="Request service">
          Move-in or move-out support, plus transfers between addresses.
        </UiCard>
        <UiCard title="Rates & Tariffs" ctaHref="#" ctaLabel="View rates">
          Region-specific rates and service charges; see plan details.
        </UiCard>
        <UiCard title="Rebates & Efficiency" ctaHref="#" ctaLabel="See rebates">
          Appliances, insulation, and efficiency programs for qualifying homes.
        </UiCard>
      </div>

      <div className="rounded-lg border bg-white p-6 text-sm text-neutral-700">
        <p className="font-semibold">Customer resources</p>
        <ul className="mt-2 list-disc pl-6">
          <li><Link href="/safety" className="underline">Gas safety & leak response</Link></li>
          <li><Link href="/ways-to-pay" className="underline">Payment options & autopay</Link></li>
          <li><Link href="/outages" className="underline">Outage map & updates</Link></li>
        </ul>
      </div>
    </div>
  );
}
