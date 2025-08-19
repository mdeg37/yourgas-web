import { cookies } from "next/headers";
import crypto from "node:crypto";

type User = {
  username: string;      // unique
  email: string;
  passwordHash: string;  // sha256 for demo only (use bcrypt in production)
  createdAt: string;
};

// In-memory user store (demo)
// NOTE: resets on server restart / redeploy
const users = new Map<string, User>(); // key = username.toLowerCase()

function hash(pw: string) {
  return crypto.createHash("sha256").update(pw).digest("hex");
}

export function registerUser(username: string, email: string, password: string) {
  const key = username.trim().toLowerCase();
  if (users.has(key)) {
    return { ok: false, error: "Username already exists." } as const;
  }
  const u: User = {
    username: username.trim(),
    email: email.trim(),
    passwordHash: hash(password),
    createdAt: new Date().toISOString(),
  };
  users.set(key, u);
  return { ok: true, user: u } as const;
}

export function verifyLogin(username: string, password: string) {
  const key = username.trim().toLowerCase();
  const u = users.get(key);
  if (!u) return { ok: false, error: "Invalid username or password." } as const;
  if (u.passwordHash !== hash(password)) return { ok: false, error: "Invalid username or password." } as const;
  return { ok: true, user: u } as const;
}

const SESSION_COOKIE = "yg_session";

export function createSession(username: string) {
  // DEMO cookie (plain). For production: sign + httpOnly + secure + short TTL.
  cookies().set(SESSION_COOKIE, username, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    // secure: true, // enable in production behind HTTPS
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export function destroySession() {
  cookies().delete(SESSION_COOKIE);
}

export function getSessionUser() {
  const c = cookies().get(SESSION_COOKIE)?.value;
  if (!c) return null;
  const key = c.toLowerCase();
  const u = users.get(key);
  return u ?? null;
}
