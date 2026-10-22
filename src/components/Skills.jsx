import { skills } from '../data/skills.js';

/**
 * Skills section – grouped tags only.
 * No bars, percentages, or self-ratings.
 */
export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-colors duration-300"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="skills-heading"
          className="text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl"
        >
          Skills
        </h2>

        <div className="mt-10 space-y-8">
          {skills.comfortable?.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Comfortable with
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.comfortable.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm text-[var(--color-text)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {skills.learning?.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Currently learning
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {skills.learning.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--color-accent-soft)]/40 bg-[var(--color-accent-soft)]/10 px-3 py-1.5 text-sm text-[var(--color-accent)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
