"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ isScrolled = false }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isAdminArea = pathname?.startsWith("/admin");

  const navItems = isAdminArea
    ? [
        { label: "Manage Blogs", href: "/admin/manage/blogs" },
        { label: "Manage Portfolio", href: "/admin/manage/portfolio" },
        { label: "Manage Solutions", href: "/admin/manage/solutions" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "About", href: "/about-us" },
        { label: "Solutions", href: "/solutions" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Blog", href: "/blogs" },
      ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "relative rounded-[28px] border px-4 py-3 transition-all duration-300 sm:px-6",
            isScrolled
              ? "border-slate-200/80 bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.10)] backdrop-blur"
              : "border-white/60 bg-white/78 shadow-[0_12px_35px_rgba(15,23,42,0.07)] backdrop-blur",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <Link
              href={isAdminArea ? "/admin/manage/blogs" : "/"}
              className="flex items-center"
            >
              <Image
                src="/logo.svg"
                alt={isAdminArea ? "INNOVISION Admin" : "INNOVISION"}
                width={170}
                height={42}
                className="h-10 w-auto object-contain sm:h-11"
                priority
              />
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-[12px] font-semibold uppercase tracking-[0.14em] transition",
                    isActive(item.href)
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-900",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              {isAdminArea ? (
                <Link
                  href="/"
                  className="inline-flex h-10 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                >
                  View Website
                </Link>
              ) : (
                <Link
                  href="mailto:support@innovision.com"
                  className="inline-flex h-10 items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                >
                  Contact
                </Link>
              )}
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 text-slate-700 lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {mobileOpen ? (
            <div className="mt-3 grid gap-2 rounded-2xl border border-slate-200 bg-white p-3 lg:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-3 py-2 text-sm font-semibold transition",
                    isActive(item.href)
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-50",
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-1 grid grid-cols-2 gap-2">
                {isAdminArea ? (
                  <Link
                    href="/"
                    className="col-span-2 inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    View Website
                  </Link>
                ) : (
                  <>
                    <Link
                      href="mailto:support@innovision.com"
                      className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-200 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-700"
                      onClick={() => setMobileOpen(false)}
                    >
                      Contact
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-xl bg-slate-900 text-[11px] font-semibold uppercase tracking-[0.12em] text-white"
                      onClick={() => setMobileOpen(false)}
                    >
                      Free Audit
                    </Link>
                  </>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
