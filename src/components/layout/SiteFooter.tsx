export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-white/10 bg-brand-surface/40 py-8 text-center text-sm text-brand-muted">
      <div className="mx-auto max-w-6xl px-4">
        <p>
          &copy; {year} Ramil L. Kaharian. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
