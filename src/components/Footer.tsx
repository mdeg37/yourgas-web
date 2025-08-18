import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-600">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} YourGas</div>
          <div className="flex gap-4">
            <Link href="/contact" className="underline">Contact</Link>
            <Link href="/safety" className="underline">Safety</Link>
            <Link href="/ways-to-pay" className="underline">Ways to Pay</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
