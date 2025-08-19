"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-neutral-600">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="underline">Home</Link>
        </li>
        {parts.map((p, idx) => {
          const href = "/" + parts.slice(0, idx + 1).join("/");
          const label = p.replace(/-/g, " ");
          return (
            <li key={href} className="flex items-center gap-2">
              <span>/</span>
              <Link href={href} className="underline">
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
