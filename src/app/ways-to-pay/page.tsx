export default function Page() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-xl font-semibold">Ways to Pay</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-white p-6 text-sm">
          <p className="font-semibold">Online (Card or Bank)</p>
          <p className="mt-2">
            Pay securely online and store a payment method for faster checkout. Autopay available.
          </p>
        </div>
        <div className="rounded-lg border bg-white p-6 text-sm">
          <p className="font-semibold">By Phone</p>
          <p className="mt-2">
            Call our automated system at <a href="tel:8770000000" className="underline">(877) 000-0000</a>.
          </p>
        </div>
        <div className="rounded-lg border bg-white p-6 text-sm">
          <p className="font-semibold">By Mail</p>
          <p className="mt-2">
            Send check or money order to: <br />
            YourGas Payments<br />
            PO Box 0000<br />
            Scottsdale, AZ 85200
          </p>
        </div>
        <div className="rounded-lg border bg-white p-6 text-sm">
          <p className="font-semibold">In Person</p>
          <p className="mt-2">
            Authorized payment locations available—bring your statement or account number.
          </p>
        </div>
      </div>

      <div className="rounded-lg border bg-white p-6 text-sm">
        <p className="font-semibold">Fees & Processing Times</p>
        <table className="mt-3 w-full text-left text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 pr-4">Method</th>
              <th className="py-2 pr-4">Fee</th>
              <th className="py-2">Typical Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 pr-4">Online (card/ACH)</td>
              <td className="py-2 pr-4">Varies / $0 for ACH*</td>
              <td className="py-2">Instant to 1 business day</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 pr-4">Phone</td>
              <td className="py-2 pr-4">Varies</td>
              <td className="py-2">Instant to 1 business day</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">Mail</td>
              <td className="py-2 pr-4">$0</td>
              <td className="py-2">3–7 business days</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2 text-neutral-600 text-xs">*Example only; set your actual policy here.</p>
      </div>
    </div>
  );
}
