import Reveal from "@/components/reveal";
import { education, experience } from "@/lib/resume-data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-stone-200 py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <p className="section-label">Career journey</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        <ol className="relative mt-16 space-y-16 border-l border-stone-200 pl-6">
          {experience.map((job, i) => (
            <li key={job.company} className="relative">
              <span
                className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-stone-50 ${
                  job.current ? "bg-accent-600" : "bg-stone-300"
                }`}
              />
              <Reveal delay={Math.min(i, 4) * 80}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-stone-900">
                    {job.role}
                    <span className="text-stone-400"> · {job.company}</span>
                  </h3>
                  <span className="flex items-center gap-2 text-sm text-stone-400">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-stone-400">{job.location}</p>
                <ul className="mt-3 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-[15px] leading-relaxed text-stone-600">
                      <span
                        aria-hidden
                        className="mt-2.5 h-1 w-1 flex-none rounded-full bg-stone-300"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <div className="mt-14 border-t border-stone-200 pt-10">
            <p className="section-label">Education</p>
            <ul className="mt-6 space-y-6">{educationList()}</ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function educationList() {
  return education.map((ed) => (
    <li key={ed.degree}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
        <h3 className="font-semibold text-stone-900">{ed.degree}</h3>
        <span className="text-sm text-stone-400">{ed.period}</span>
      </div>
      <p className="mt-1 text-[15px] leading-relaxed text-stone-600">
        {ed.detail}
      </p>
    </li>
  ));
}
