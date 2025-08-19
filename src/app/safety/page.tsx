import Accordion from "@/components/Accordion";

export default function Page() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-xl font-semibold">Gas Safety</h1>

      <div className="rounded-xl border bg-white p-6 text-sm leading-6">
        <p className="font-semibold">If you smell gas:</p>
        <ol className="mt-2 list-decimal pl-6">
          <li>Leave the area immediately—do not use lights, phones, or switches.</li>
          <li>From a safe location, call 911.</li>
          <li>Then call our 24/7 emergency line at <a className="underline" href="tel:8770000000">(877) 000-0000</a>.</li>
        </ol>
      </div>

      <Accordion
        items={[
          {
            q: "How do I recognize a natural gas leak?",
            a: (
              <ul className="list-disc pl-6">
                <li>Smell of sulfur/rotten eggs</li>
                <li>Hissing sound near pipes/meters</li>
                <li>Dead vegetation over buried lines</li>
              </ul>
            ),
          },
          {
            q: "What should I do before digging?",
            a: (
              <p>
                Contact <strong>811</strong> at least two business days before you dig to have underground utilities marked.
              </p>
            ),
          },
          {
            q: "What if I smell gas indoors?",
            a: (
              <p>
                Do <em>not</em> use switches or phones. Leave immediately, call 911, then call us.
              </p>
            ),
          },
        ]}
      />
    </div>
  );
}
