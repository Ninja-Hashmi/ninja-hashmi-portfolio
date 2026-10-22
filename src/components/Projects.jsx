import { projects } from '../data/projects.js';
import Button from './ui/Button.jsx';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Projects section.
 * - Client projects first, then practice.
 * - Honest labels: "Client project", "Practice project", "Tutorial-based".
 * - Live Demo only if liveUrl exists.
 * - GitHub only if repoUrl exists; private clients show "Client project – source private".
 */
export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-[var(--color-border)] transition-colors duration-300"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="projects-heading"
          className="text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl"
        >
          Projects
        </h2>
        <p className="mt-2 text-[var(--color-text-muted)]">
          Client work and practice projects.
        </p>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.id}
              className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors duration-300"
            >
              <div
                className="mb-4 flex aspect-video w-full items-center justify-center rounded-lg border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] text-sm text-[var(--color-text-muted)]"
                role="img"
                aria-label={`Screenshot placeholder for ${project.name}`}
              >
                Replace with screenshot
              </div>

              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    project.type === 'client'
                      ? 'bg-[var(--color-accent-soft)]/15 text-[var(--color-accent)]'
                      : 'bg-[var(--color-border)] text-[var(--color-text-muted)]'
                  }`}
                >
                  {project.type === 'client' ? 'Client project' : 'Practice project'}
                </span>
                {project.isTutorial && (
                  <span className="rounded-full bg-[var(--color-border)] px-2.5 py-0.5 text-xs font-medium text-[var(--color-text-muted)]">
                    Tutorial-based
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-text)]">
                {project.name}
              </h3>

              <p className="mt-2 flex-1 text-sm text-[var(--color-text-muted)]">
                {project.description}
              </p>

              {project.features?.length > 0 && (
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[var(--color-text-muted)]">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}

              {project.tech?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded bg-[var(--color-bg)] px-2 py-0.5 text-xs text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap gap-2">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    variant="primary"
                    className="text-xs px-3 py-1.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    Live Demo
                  </Button>
                )}

                {project.repoUrl ? (
                  <Button
                    href={project.repoUrl}
                    variant="secondary"
                    className="text-xs px-3 py-1.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-3.5 w-3.5" aria-hidden="true" />
                    GitHub
                  </Button>
                ) : project.type === 'client' ? (
                  <span className="self-center text-xs text-[var(--color-text-muted)]">
                    Client project – source private
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
