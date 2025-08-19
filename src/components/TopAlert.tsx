"use client";

import { useEffect, useState } from "react";

const LS_KEY = "yg_top_alert_dismissed_v1";

export default function TopAlert() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem(LS_KEY) === "1";
    setHidden(dismissed);
  }, []);

  if (hidden) return null;

  return (
    <div className="sticky top-0 z-50 bg-red-600 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm">
        <p className="pr-4">
          <strong className="font-semibold">Emergency:</strong>{" "}
          Smell gas? Leave immediately, call 911, then call us at{" "}
          <a href="tel:8770000000" className="underline">(877) 000-0000</a>.
        </p>
        <button
          className="rounded bg-white/20 px-2 py-1 hover:bg-white/30"
          onClick={() => {
            localStorage.setItem(LS_KEY, "1");
            setHidden(true);
          }}
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
