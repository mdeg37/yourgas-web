export default function Page() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-xl font-semibold">Contact Us</h1>

      <div className="rounded-lg border bg-white p-6 text-sm">
        <p className="font-semibold">Emergency (24/7)</p>
        <p className="mt-1">
          If you smell gas or suspect a leak, leave the area and call 911, then call us at{" "}
          <a href="tel:8770000000" className="underline">(877) 000-0000</a>.
        </p>
      </div>

      <div className="rounded-lg border bg-white p-6 text-sm">
        <p className="font-semibold">Customer Care</p>
        <p className="mt-1">Weekdays 8am–6pm (local): <a href="tel:8880000000" className="underline">(888) 000-0000</a></p>
        <p className="mt-1">Email: <a href="mailto:support@yourgas.example" className="underline">support@yourgas.example</a></p>
      </div>

      <form className="rounded-lg border bg-white p-6 text-sm space-y-4">
        <p className="font-semibold">Send us a message</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="name" placeholder="Your name" className="w-full rounded border p-2" />
          <input name="email" placeholder="Your email" className="w-full rounded border p-2" />
          <input name="account" placeholder="Account # (optional)" className="w-full rounded border p-2 sm:col-span-2" />
          <textarea name="message" placeholder="How can we help?" className="w-full rounded border p-2 sm:col-span-2" rows={5} />
        </div>
        <button type="submit" className="rounded border px-4 py-2">Send</button>
      </form>
    </div>
  );
}
