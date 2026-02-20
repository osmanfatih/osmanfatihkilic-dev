import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "Blog — Osman Fatih Kilic",
  description: "Writing on ML, systems, and engineering.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="pb-24">
      <header className="pt-20 pb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-stone-900 mb-2">
          Blog
        </h1>
        <p className="text-stone-500 text-lg font-light">
          Writing on ML, systems, and engineering.
        </p>
      </header>

      <section className="border-t border-stone-100">
        {posts.length === 0 ? (
          <p className="py-12 text-sm text-stone-400">No posts yet. Check back soon.</p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="flex items-start justify-between gap-6 py-6 border-b border-stone-100 group"
            >
              <div className="min-w-0">
                <div className="text-sm font-medium text-stone-800 group-hover:text-stone-500 transition-colors duration-200">
                  {post.title}
                </div>
                {post.description && (
                  <div className="text-sm text-stone-400 mt-1 leading-relaxed">
                    {post.description}
                  </div>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 bg-stone-100 text-stone-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <span className="text-xs text-stone-400 whitespace-nowrap shrink-0 tabular-nums pt-0.5">
                {post.date}
              </span>
            </Link>
          ))
        )}
      </section>
    </div>
  );
}
