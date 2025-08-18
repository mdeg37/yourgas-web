type Outage = { id: string; area: string; status: "Investigating" | "In Progress" | "Resolved"; updatedAt: string };

const MOCK_OUTAGES: Outage[] = [
  { id: "O-1001", area: "North Scottsdale", status: "Investigating", updatedAt: "2025-08-18T11:05:00Z" },
  { id: "O-1002", area: "Tempe – East", status: "In Progress", updatedAt: "2025-08-18T10:40:00Z" },
];

export default function Page() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-xl font-semibold">Outage Map & Updates</h1>

      <div className="h-72 rounded-lg border bg-white p-6">
        {/* Placeholder for future map */}
        <p className="text-sm text-neutral-600">Map placeholder — live map coming soon.</p>
      </div>

      <div className="rounded-lg border bg-white p-6 text-sm">
        <p className="font-semibold">Current notices</p>
        <ul className="mt-2 divide-y">
          {MOCK_OUTAGES.map((o) => (
            <li key={o.id} className="py-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{o.area}</p>
                  <p className="text-neutral-600">Status: {o.status}</p>
                </div>
                <div className="text-neutral-500 text-xs">
                  Updated {new Date(o.updatedAt).toLocaleString()}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
