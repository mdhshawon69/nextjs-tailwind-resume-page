import { profile } from "@/lib/resume-data";
import { GithubIcon, GlobeIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-stone-200 py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-10 shadow-sm sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent-200/25 blur-3xl"
          />
          <p className="section-label">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Let&apos;s work{" "}
            <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
              together
            </span>
          </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-stone-500">
          I&apos;m open to software &amp; AI engineering roles and interesting projects. The
          fastest way to reach me is email — I usually reply within a day.
        </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-md"
            >
              <MailIcon className="h-4 w-4" /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:-translate-y-0.5 hover:border-stone-400 hover:shadow-sm"
            >
              {profile.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-stone-100 pt-6 text-sm text-stone-500">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-stone-900"
            >
              <GithubIcon className="h-4 w-4" /> github.com/mdhshaown69
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-stone-900"
            >
              <LinkedinIcon className="h-4 w-4" /> linkedin.com/in/mahmudul-haque
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-stone-900"
            >
              <GlobeIcon className="h-4 w-4" /> Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
