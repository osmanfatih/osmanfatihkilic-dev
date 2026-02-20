"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="flex items-center justify-between py-8 border-b border-stone-200">
      <Link
        href="/"
        className="text-sm font-medium text-stone-900 hover:text-stone-500 transition-colors duration-200"
      >
        Osman Fatih Kilic
      </Link>
      <div className="flex gap-6 text-sm">
        <Link
          href="/"
          className={`transition-colors duration-200 ${
            path === "/" ? "text-stone-900 font-medium" : "text-stone-400 hover:text-stone-700"
          }`}
        >
          CV
        </Link>
        <Link
          href="/blog"
          className={`transition-colors duration-200 ${
            path.startsWith("/blog") ? "text-stone-900 font-medium" : "text-stone-400 hover:text-stone-700"
          }`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
