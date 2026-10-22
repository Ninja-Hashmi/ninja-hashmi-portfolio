import { site } from '../data/site.js';

/**
 * About section with short bio and a photo placeholder.
 * All copy comes from site.js.
 */
export default function About() {
  const { about } = site;

  return (
    <section
      id="about"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-colors duration-300"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-[1fr_200px] md:items-start">
        <div>
          <h2
            id="about-heading"
            className="text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl"
          >
            {about.heading}
          </h2>

          <div className="mt-6 space-y-4 text-[var(--color-text-muted)]">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div
          className="flex aspect-square w-full max-w-[200px] items-center justify-center rounded-xl border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg)] text-center text-sm text-[var(--color-text-muted)]"
          role="img"
          aria-label="Profile photo placeholder – replace with photo"
        >
          Replace with
          <br />
          photo
        </div>
      </div>
    </section>
  );
}
