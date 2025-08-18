import Link from "next/link";
import { mainNav } from "@/lib/nav";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-lg font-semibold tracking-tight">YourGas</Link>
        <nav className="flex flex-wrap gap-5 text-sm">
          {mainNav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="opacity-90 transition hover:opacity-100"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
