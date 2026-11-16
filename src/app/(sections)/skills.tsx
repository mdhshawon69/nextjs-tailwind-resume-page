import Reveal from "@/components/reveal";
import { skillGroups } from "@/lib/resume-data";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-t border-stone-200 py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Tools of the trade
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={Math.min(i, 6) * 50}>
              <div className="group h-full rounded-2xl border border-stone-200/80 bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200">
                <h3 className="flex items-center gap-2.5 font-semibold text-stone-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-600 transition group-hover:scale-125" />
                  {group.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-500">{group.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-600 transition group-hover:border-stone-300"
                    >
                      {skill.slug ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`/icons/${skill.slug}.svg`}
                          alt={`${skill.name} logo`}
                          width={14}
                          height={14}
                          loading="lazy"
                          className="h-3.5 w-3.5"
                        />
                      ) : (
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent-600" />
                      )}
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
