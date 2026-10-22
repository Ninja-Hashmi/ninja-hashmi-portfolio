import { processSteps } from '../data/process.js';

/**
 * How I Work section.
 * Only rendered when processSteps has content.
 * Content is DRAFT – review in data/process.js.
 */
export default function Process() {
  if (!processSteps?.length) return null;

  return (
    <section
      id="process"
      className="border-t border-[var(--color-border)] transition-colors duration-300"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="process-heading"
          className="text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl"
        >
          How I Work
        </h2>
        <p className="mt-2 text-[var(--color-text-muted)]">
          A simple process I follow on every project.
        </p>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors duration-300"
            >
              <span className="text-sm font-bold text-[var(--color-accent)]">
                {step.number}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
