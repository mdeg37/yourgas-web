"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { forgotAction } from "../actions";

export default function ForgotPage() {
  const [msg, setMsg] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-xl font-semibold">Forgot username or password</h1>

      <form
        action={(fd) => {
          setError(null);
          setMsg(null);
          startTransition(async () => {
            const res = await forgotAction(fd);

            // Safe narrowing: only set a string or null
            if (res && "ok" in res) {
              if (res.ok && "message" in res) {
                setMsg(res.message ?? null);
              } else if (!res.ok && "error" in res) {
                setError(res.error ?? "Something went wrong");
              } else {
                setError("Unexpected response");
              }
            } else {
              setError("Unexpected response");
            }
          });
        }}
        className="max-w-md space-y-4 rounded-xl border bg-white p-6"
      >
        {msg && (
          <div className="rounded border border-green-300 bg-green-50 p-3 text-sm text-green-700">
            {msg}
          </div>
        )}
        {error && (
          <div className="rounded border border-red-300 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium">Email on the account</label>
          <input
            name="email"
            type="email"
            className="mt-1 w-full rounded border p-2"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 disabled:opacity-60"
        >
          {isPending ? "Sending…" : "Send reset link"}
        </button>

        <div className="text-sm text-neutral-700">
          <Link className="underline" href="/myaccount/login">
            Back to sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
