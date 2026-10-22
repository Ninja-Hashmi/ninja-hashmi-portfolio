/**
 * Simple reusable button. Supports primary (accent) and secondary styles.
 * Renders as <a> when href is provided, otherwise <button>.
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  onClick,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] focus-visible:outline-[var(--color-accent)]',
    secondary:
      'border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:bg-[var(--color-border)] focus-visible:outline-[var(--color-accent)]',
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
