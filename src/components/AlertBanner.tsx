export default function AlertBanner() {
  return (
    <div className="mb-6 rounded-md border bg-white p-4">
      <p className="font-semibold">Smell gas or suspect a leak?</p>
      <p>
        Leave the area immediately and call 911, then call YourGas at{" "}
        <a href="tel:8770000000" className="underline">(877) 000-0000</a>.
      </p>
    </div>
  );
}
