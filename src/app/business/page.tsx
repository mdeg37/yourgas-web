import RegionSwitch from "@/components/RegionSwitch";
import UiCard from "@/components/UiCard";

export default function Page({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const region = (searchParams?.region as string) || "AZ";

  return (
    <div className="py-6 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Business Services</h1>
        <RegionSwitch />
      </div>

      <p className="text-sm text-neutral-700">
        For commercial accounts in {region}: service requests, rates, and programs for small/large businesses.
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        <UiCard title="New Commercial Service" ctaHref="/contact" ctaLabel="Request quote">
          Meter sets, service line work, and project coordination.
        </UiCard>
        <UiCard title="Commercial Rates" ctaHref="#" ctaLabel="View tariffs">
          Rate schedules for restaurant, industrial, and multi-site customers.
        </UiCard>
        <UiCard title="Efficiency Programs" ctaHref="#" ctaLabel="Incentives">
          Rebates for high-efficiency equipment and process upgrades.
        </UiCard>
      </div>
    </div>
  );
}
