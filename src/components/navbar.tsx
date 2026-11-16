"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/resume-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-stone-100 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-5">
        <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent-600 text-[11px] font-bold text-white">
            MH
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-stone-900">
            {profile.name}
          </span>
        </a>

        {/* desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-stone-500 transition hover:text-stone-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-accent-600 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-accent-700"
          >
            Hire me
          </a>
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="grid h-9 w-9 place-items-center rounded-lg text-stone-700 transition hover:bg-stone-100 md:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-stone-100 bg-white px-4 pb-6 pt-2 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-[15px] text-stone-600 transition hover:bg-stone-50 hover:text-stone-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center rounded-lg bg-accent-600 px-4 py-3 text-sm font-medium text-white"
          >
            Hire me
          </a>
        </div>
      )}
    </header>
  );
}
