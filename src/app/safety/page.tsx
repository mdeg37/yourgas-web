export default function Page() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-xl font-semibold">Gas Safety</h1>

      <div className="rounded-lg border bg-white p-6 text-sm leading-6">
        <p className="font-semibold">If you smell gas:</p>
        <ol className="mt-2 list-decimal pl-6">
          <li>Leave the area immediately—do not use lights, phones, or switches.</li>
          <li>From a safe location, call 911.</li>
          <li>Then call our 24/7 emergency line at <a className="underline" href="tel:8770000000">(877) 000-0000</a>.</li>
        </ol>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 text-sm">
          <p className="font-semibold">Recognize a leak</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Smell of sulfur/rotten eggs</li>
            <li>Hissing sound near pipes/meters</li>
            <li>Dead vegetation over buried lines</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-white p-6 text-sm">
          <p className="font-semibold">Call before you dig</p>
          <p className="mt-2">
            Contact 811 at least two business days before you dig to have underground utilities marked.
          </p>
        </div>
      </div>
    </div>
  );
}
