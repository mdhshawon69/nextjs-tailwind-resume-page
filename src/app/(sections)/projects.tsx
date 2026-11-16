import Reveal from "@/components/reveal";
import { projects, techSlugMap } from "@/lib/resume-data";

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-stone-200 py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <p className="section-label">Work</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Things I&apos;ve built
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-stone-500">
            Mobile apps, websites and platforms I&apos;ve shipped — from nationwide logistics
            apps to social-business websites.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:gap-8 sm:grid-cols-2">
          {projects.map((project, i) => {
            const inner = (
              <div className="group relative flex gap-5 rounded-2xl border border-stone-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 sm:p-8">
                {/* index */}
                <span
                  aria-hidden
                  className="hidden text-sm font-semibold tabular-nums text-stone-300 transition group-hover:text-accent-500 sm:block"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-stone-900 transition group-hover:text-accent-700">
                        {project.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-stone-400">{project.type}</p>
                    </div>
                    {project.link && (
                      <span
                        aria-hidden
                        className="mt-1 flex-none text-stone-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <path d="M7 17 17 7M7 7h10v10" />
                        </svg>
                      </span>
                    )}
                  </div>

                  <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
                    {project.description}
                  </p>

                  {project.stack.length > 0 && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => {
                        const slug = techSlugMap[tech];
                        return (
                          <li
                            key={tech}
                            className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[11px] font-medium text-stone-500"
                          >
                            {slug ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                src={`/icons/${slug}.svg`}
                                alt={`${tech} logo`}
                                width={12}
                                height={12}
                                loading="lazy"
                                className="h-3 w-3"
                              />
                            ) : (
                              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-400" />
                            )}
                            {tech}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            );

            return (
              <Reveal key={project.title} delay={Math.min(i, 6) * 50}>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
