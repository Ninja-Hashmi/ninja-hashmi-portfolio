import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ui/ThemeToggle.jsx';
import { site } from '../data/site.js';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#process', label: 'Process' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Sticky header with desktop nav, theme toggle, and accessible mobile menu.
 * - aria-expanded on the toggle
 * - Escape closes the menu
 * - Focus returns to the toggle when closed
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-sm transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#main" className="text-lg font-bold tracking-tight text-[var(--color-text)]">
          {site.name}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors duration-300"
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        hidden={!menuOpen}
        className="border-t border-[var(--color-border)] bg-[var(--color-bg)] md:hidden"
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="rounded-md px-3 py-2.5 text-base font-medium text-[var(--color-text)] hover:bg-[var(--color-border)] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
