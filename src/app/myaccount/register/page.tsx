"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { registerAction } from "../actions";

export default function RegisterPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-xl font-semibold">Create Your Account</h1>

      <form
        action={(fd) => {
          setError(null);
          startTransition(async () => {
            const res = await registerAction(fd);
            if (res && "ok" in res && !res.ok) setError(res.error);
          });
        }}
        className="max-w-md space-y-4 rounded-xl border bg-white p-6"
      >
        {error && <div className="rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">{error}</div>}

        <div>
          <label className="block text-sm font-medium">Username</label>
          <input name="username" className="mt-1 w-full rounded border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input name="email" type="email" className="mt-1 w-full rounded border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input name="password" type="password" className="mt-1 w-full rounded border p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Confirm password</label>
          <input name="confirm" type="password" className="mt-1 w-full rounded border p-2" />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-60"
        >
          {isPending ? "Creating…" : "Create account"}
        </button>

        <div className="text-sm text-neutral-700">
          Already have an account? <Link className="underline" href="/myaccount/login">Sign in</Link>
        </div>
      </form>
    </div>
  );
}
