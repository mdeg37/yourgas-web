"use client";

import { useState } from "react";

export default function Accordion({
  items,
}: {
  items: { q: string; a: React.ReactNode }[];
}) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="rounded-xl border bg-white">
      {items.map((it, idx) => {
        const active = open === idx;
        return (
          <div key={it.q} className={idx === 0 ? "" : "border-t"}>
            <button
              className="flex w-full items-center justify-between px-4 py-3 text-left"
              onClick={() => setOpen(active ? null : idx)}
            >
              <span className="font-medium">{it.q}</span>
              <span className="text-xl">{active ? "−" : "+"}</span>
            </button>
            {active && <div className="px-4 pb-4 text-sm text-neutral-700">{it.a}</div>}
          </div>
        );
      })}
    </div>
  );
}
