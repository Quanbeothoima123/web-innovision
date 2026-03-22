"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { apiUrl } from "@/lib/api/client";

export default function AdminLoginClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/admin/manage/blogs";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(apiUrl("/api/admin/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data?.message || "Login failed");
        setLoading(false);
        return;
      }

      router.replace(nextPath);
      router.refresh();
    } catch {
      setError("Cannot connect to server");
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#eaf8ff_0%,#f8fcff_35%,#ffffff_100%)] pb-16 pt-24 sm:pt-28">
      <section className="mx-auto max-w-md px-4 sm:px-6">
        <div className="rounded-[30px] border border-white/80 bg-white/90 p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] sm:p-8">
          <h1 className="text-2xl font-semibold tracking-[-0.02em] text-slate-900">
            Admin Login
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Sign in to manage blog content.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-3">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm text-slate-700 outline-none"
              autoComplete="username"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="h-10 w-full rounded-xl border border-slate-200 px-3 text-sm text-slate-700 outline-none"
              autoComplete="current-password"
            />

            {error ? <p className="text-sm text-rose-600">{error}</p> : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-10 w-full items-center justify-center rounded-xl bg-slate-900 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
