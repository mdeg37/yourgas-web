"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const REGIONS = ["AZ", "NV", "CA"] as const;
type Region = (typeof REGIONS)[number];

export default function RegionSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const current = (params.get("region") as Region) || "AZ";

  function setRegion(r: Region) {
    const p = new URLSearchParams(params.toString());
    p.set("region", r);
    router.push(`${pathname}?${p.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {REGIONS.map((r) => (
        <button
          key={r}
          onClick={() => setRegion(r)}
          className={`rounded border px-3 py-1 text-sm ${
            current === r ? "bg-black text-white" : "bg-white"
          }`}
          aria-pressed={current === r}
        >
          {r}
        </button>
      ))}
    </div>
  );
}
