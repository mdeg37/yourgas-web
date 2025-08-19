// Simple card used across pages
export default function UiCard({
  title,
  children,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  children?: React.ReactNode;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="rounded-lg border bg-white p-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-2 text-sm text-neutral-700">{children}</div>
      {ctaHref && ctaLabel && (
        <a href={ctaHref} className="mt-4 inline-block underline">
          {ctaLabel}
        </a>
      )}
    </div>
  );
}
