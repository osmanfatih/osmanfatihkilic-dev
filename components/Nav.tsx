import Link from "next/link";

export default function Nav() {
  return (
    <nav className="max-w-[640px] mx-auto px-6 py-6 flex justify-between items-center">
      <Link
        href="/"
        className="text-sm font-medium text-[var(--text)] hover:opacity-70 transition-opacity"
      >
        Osman Fatih Kilic
      </Link>
      <div className="flex gap-6 text-sm">
        <Link
          href="/"
          className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          CV
        </Link>
        <Link
          href="/blog"
          className="text-[var(--muted)] hover:text-[var(--text)] transition-colors"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
