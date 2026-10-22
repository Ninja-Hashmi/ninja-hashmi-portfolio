import { site } from '../data/site.js';
import Button from './ui/Button.jsx';

/**
 * Hero section: name, title, value statement, CTAs, open-to-work badge.
 * Content comes only from site.js.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-2xl">
        {site.openToWork && (
          <p className="mb-4 inline-flex items-center rounded-full border border-[var(--color-accent-soft)] bg-[var(--color-accent-soft)]/10 px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
            {site.openToWorkLabel}
          </p>
        )}

        <h1
          id="hero-heading"
          className="text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl"
        >
          {site.name}
        </h1>

        <p className="mt-2 text-xl font-medium text-[var(--color-accent)] sm:text-2xl">
          {site.title}
        </p>

        {/* DRAFT: review */}
        <p className="mt-6 text-lg text-[var(--color-text-muted)]">
          {site.heroLine}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#projects">View Work</Button>
          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
