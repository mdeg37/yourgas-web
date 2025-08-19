"use server";

import { redirect } from "next/navigation";
import { createSession, destroySession, getSessionUser, registerUser, verifyLogin } from "@/lib/auth";

// Login
export async function loginAction(formData: FormData) {
  const username = String(formData.get("username") || "");
  const password = String(formData.get("password") || "");

  if (!username || !password) {
    return { ok: false, error: "Please enter your username and password." };
  }

  const res = verifyLogin(username, password);
  if (!res.ok) {
    return { ok: false, error: res.error };
  }

  createSession(res.user.username);
  redirect("/myaccount");
}

// Register
export async function registerAction(formData: FormData) {
  const username = String(formData.get("username") || "");
  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");
  const confirm = String(formData.get("confirm") || "");

  if (!username || !email || !password || !confirm) {
    return { ok: false, error: "All fields are required." };
  }
  if (password !== confirm) {
    return { ok: false, error: "Passwords do not match." };
  }
  if (password.length < 8) {
    return { ok: false, error: "Password must be at least 8 characters." };
  }

  const res = registerUser(username, email, password);
  if (!res.ok) {
    return { ok: false, error: res.error };
  }

  createSession(res.user.username);
  redirect("/myaccount");
}

// Forgot (mock)
export async function forgotAction(formData: FormData) {
  const email = String(formData.get("email") || "");
  if (!email) {
    return { ok: false, error: "Enter the email on your account." };
  }
  // Demo: pretend we sent email
  return { ok: true, message: "If an account exists for that email, reset instructions have been sent." };
}

// Logout
export async function logoutAction() {
  destroySession();
  redirect("/myaccount/login");
}

// Helper for server pages
export async function requireUser() {
  // getSessionUser is sync, but wrapping it in an async fn satisfies Server Actions rule
  const user = getSessionUser();
  return user ?? null;
}
