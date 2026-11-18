import { profile } from "@/lib/resume-data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-52 sm:pb-24">
      {/* DeepSeek-style gradient backdrop: soft blue→indigo wash fading to white */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,#dfe7ff_0%,#e9efff_28%,#f5f8ff_55%,#fafaf9_100%)]" />
        <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(122,148,250,0.35),rgba(122,148,250,0)_100%)] blur-2xl" />
        <div className="absolute top-24 right-[-8%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(closest-side,rgba(77,107,254,0.14),rgba(77,107,254,0)_100%)] blur-3xl" />
        <div className="absolute top-32 left-[-8%] h-[260px] w-[260px] rounded-full bg-[radial-gradient(closest-side,rgba(167,139,250,0.12),rgba(167,139,250,0)_100%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-5">
        <h1
          className="animate-fade-up mt-7 text-3xl font-bold leading-[1.15] tracking-tight text-stone-900 sm:text-5xl sm:leading-[1.12] lg:text-6xl"
          style={{ animationDelay: "80ms" }}>
          Hey, I&apos;m Mahmudul. I build{" "}
          <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
            scalable products
          </span>{" "}
          for web, mobile &amp;{" "}
          <span className="bg-gradient-to-r from-accent-500 to-accent-600 bg-clip-text text-transparent">
            AI
          </span>
          .
        </h1>

        <p
          className="animate-fade-up mt-7 max-w-2xl text-lg leading-relaxed text-stone-500 sm:text-xl sm:leading-relaxed"
          style={{ animationDelay: "160ms" }}>
          Full-Stack Software &amp; AI Engineer — 5+ years shipping
          high-performance web &amp; mobile applications, now specialising in
          LLM-powered products. Sometimes for the teams I work with, always with
          production quality in mind.
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}>
          <a
            href="#work"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-stone-700 hover:shadow-md">
            See my work ↓
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 transition hover:-translate-y-0.5 hover:border-stone-400 hover:shadow-sm">
            Get in touch
          </a>
        </div>

        {/* facts */}
        <dl
          className="animate-fade-up mt-16 space-y-7 border-t border-stone-200 pt-12"
          style={{ animationDelay: "320ms" }}>
          {profile.facts.map((fact) => (
            <div
              key={fact.term}
              className="grid gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
              <dt className="text-sm font-medium text-stone-400">
                {fact.term}
              </dt>
              <dd className="text-base leading-relaxed text-stone-700">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>

        <dl
          className="animate-fade-up mt-14 grid grid-cols-2 gap-8 border-t border-stone-200 pt-12 sm:grid-cols-4"
          style={{ animationDelay: "400ms" }}>
          {profile.highlights.map((h) => (
            <div key={h.label}>
              <dd className="bg-gradient-to-br from-accent-600 via-accent-500 to-accent-700 bg-clip-text text-4xl font-extrabold text-transparent">
                {h.value}
              </dd>
              <dt className="mt-1.5 text-[11px] sm:text-xs leading-snug text-stone-400">
                {h.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
