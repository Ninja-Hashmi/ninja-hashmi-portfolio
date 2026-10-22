import { site } from '../data/site.js';
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
} from './ui/BrandIcons.jsx';

/**
 * Footer with social links and dynamic year.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)] transition-colors duration-300">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-[var(--color-text-muted)]">
          © {year} {site.footer.text}
        </p>

        <nav aria-label="Social links" className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
            aria-label="GitHub"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
