import { useState } from 'react';
import { site } from '../data/site.js';
import Button from './ui/Button.jsx';

/**
 * Contact form.
 * On Vercel: form submission falls back to mailto (Netlify Forms not available).
 * - Fields: name, email, message + honeypot
 * - Client-side validation
 * - Disabled button while submitting
 * - Success / error messages in aria-live region
 * - Visible mailto fallback
 */
export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  function validate(formData) {
    const next = {};
    const name = formData.get('name')?.trim();
    const email = formData.get('email')?.trim();
    const message = formData.get('message')?.trim();

    if (!name) next.name = 'Name is required.';
    if (!email) {
      next.email = 'Email is required.';
    } else if (!/^[\s@]+@[\s@]+\.[\s@]+$/.test(email) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Enter a valid email.';
    }
    if (!message) next.message = 'Message is required.';

    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const validationErrors = validate(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');

    try {
      const body = new URLSearchParams(formData).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-colors duration-300"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="contact-heading"
          className="text-2xl font-bold tracking-tight text-[var(--color-text)] sm:text-3xl"
        >
          {site.contact.heading}
        </h2>
        <p className="mt-2 max-w-xl text-[var(--color-text-muted)]">
          {site.contact.subheading}
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            <input type="hidden" name="form-name" value="contact" />

            <p className="hidden" aria-hidden="true">
              <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" tabIndex={-1} autoComplete="off" />
              </label>
            </p>

            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text)]">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-1 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] transition-colors duration-300 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text)]">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 w-full rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] transition-colors duration-300 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text)]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className="mt-1 w-full resize-y rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-[var(--color-text)] transition-colors duration-300 focus:border-[var(--color-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
                aria-invalid={errors.message ? 'true' : undefined}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
              )}
            </div>

            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </Button>

            <div aria-live="polite" aria-atomic="true" className="min-h-[1.5rem]">
              {status === 'success' && (
                <p className="text-sm text-green-700 dark:text-green-400">
                  Message sent. I’ll get back to you soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or use the email link.
                </p>
              )}
            </div>
          </form>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-[var(--color-text-muted)]">
              Prefer email? Reach me directly at:
            </p>
            <a
              href={`mailto:${site.contact.mailtoFallback}`}
              className="mt-2 text-lg font-medium text-[var(--color-accent)] hover:underline"
            >
              {site.contact.mailtoFallback}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
