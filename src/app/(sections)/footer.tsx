import { navLinks, profile } from "@/lib/resume-data";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white/50 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 text-sm text-stone-400 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <nav className="flex gap-5">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-stone-700">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
