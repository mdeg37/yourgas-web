"use server";

import { redirect } from "next/navigation";
import {
  createSession,
  destroySession,
  getSessionUser,
  registerUser,
  verifyLogin,
} from "@/lib/auth";

// Login
export async function loginAction(formData: FormData) {
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  if (!username || !password) {
    return { ok: false, error: "Please enter your username and password." } as const;
  }

  const res = verifyLogin(username, password);
  if (!res.ok) {
    return { ok: false, error: res.error } as const;
  }

  await createSession(res.user.username);
  redirect("/myaccount");
}

// Register
export async function registerAction(formData: FormData) {
  const username = String(formData.get("username") || "");
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const confirm = String(formData.get("confirm") || "");

  if (!username || !email || !password || !confirm) {
    return { ok: false, error: "All fields are required." } as const;
  }
  if (password !== confirm) {
    return { ok: false, error: "Passwords do not match." } as const;
  }
  if (password.length < 8) {
    return { ok: false, error: "Password must be at least 8 characters." } as const;
  }

  const res = registerUser(username, email, password);
  if (!res.ok) {
    return { ok: false, error: res.error } as const;
  }

  await createSession(res.user.username);
  redirect("/myaccount");
}

// Forgot (mock)
export type ForgotResult =
  | { ok: true; message: string }
  | { ok: false; error: string };

export async function forgotAction(formData: FormData): Promise<ForgotResult> {
  const email = String(formData.get("email") || "");
  if (!email) {
    return { ok: false, error: "Enter the email on your account." };
  }
  // Demo: pretend we sent email
  return { ok: true, message: "If an account exists for that email, reset instructions have been sent." };
}

// Logout
export async function logoutAction() {
  await destroySession();
  redirect("/myaccount/login");
}

// Helper for server pages (must be async in a "use server" file)
export async function requireUser() {
  const user = await getSessionUser();
  return user ?? null;
}
