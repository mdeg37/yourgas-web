"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav } from "@/lib/nav";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);

  const menu = {
    Residential: [
      { href: "/residential?region=AZ", label: "Start / Stop / Transfer" },
      { href: "/residential?region=AZ", label: "Rates & Tariffs" },
      { href: "/residential?region=AZ", label: "Rebates & Efficiency" },
    ],
    Business: [
      { href: "/business?region=AZ", label: "New Commercial Service" },
      { href: "/business?region=AZ", label: "Commercial Rates" },
      { href: "/business?region=AZ", label: "Efficiency Programs" },
    ],
  } as const;

  return (
    <header className="bg-blue-700 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          YourGas
        </Link>

        <nav className="relative flex flex-wrap items-center gap-5 text-sm">
          {/* Mega triggers */}
          <div
            className="relative"
            onMouseEnter={() => setOpen("Residential")}
            onMouseLeave={() => setOpen(null)}
          >
            <button className="opacity-90 transition hover:opacity-100">Residential</button>
            {open === "Residential" && (
              <div className="absolute left-0 top-full w-[520px] rounded-xl border bg-white p-4 text-neutral-900 shadow">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {menu.Residential.map((i) => (
                    <Link key={i.label} href={i.href} className="rounded px-2 py-1 hover:bg-neutral-100">
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpen("Business")}
            onMouseLeave={() => setOpen(null)}
          >
            <button className="opacity-90 transition hover:opacity-100">Business</button>
            {open === "Business" && (
              <div className="absolute left-0 top-full w-[520px] rounded-xl border bg-white p-4 text-neutral-900 shadow">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {menu.Business.map((i) => (
                    <Link key={i.label} href={i.href} className="rounded px-2 py-1 hover:bg-neutral-100">
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* The rest of your main links */}
          {mainNav
            .filter((i) => !["/residential", "/business"].includes(i.href))
            .map((i) => (
              <Link key={i.href} href={i.href} className="opacity-90 transition hover:opacity-100">
                {i.label}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
