import Breadcrumbs from "@/components/Breadcrumbs";

export default function Page() {
  return (
    <div className="py-6 space-y-6">
      <Breadcrumbs />
      <h1 className="text-xl font-semibold">MyAccount</h1>
      <p className="text-sm text-neutral-700">Manage billing, payments, service requests, and notifications.</p>
      {/* ...rest... */}
    </div>
  );
}
