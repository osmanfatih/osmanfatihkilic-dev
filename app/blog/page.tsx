import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "Blog — Osman Fatih Kilic",
  description: "Writing on ML, systems, and engineering.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <header className="pt-24 pb-10">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Blog</h1>
        <p className="text-[var(--muted)] text-[17px]">
          Writing on ML, systems, and engineering.
        </p>
      </header>

      <section className="pb-20">
        {posts.length === 0 ? (
          <p className="text-[var(--muted)] text-[15px]">No posts yet. Check back soon.</p>
        ) : (
          <div className="divide-y divide-[var(--border)]">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex justify-between items-baseline py-5 gap-4 group"
              >
                <div>
                  <div className="text-[15px] font-medium group-hover:text-[var(--muted)] transition-colors">
                    {post.title}
                  </div>
                  {post.description && (
                    <div className="text-[13px] text-[var(--muted)] mt-0.5">
                      {post.description}
                    </div>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-0.5 bg-[var(--tag-bg)] rounded-full text-[var(--muted)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[13px] text-[var(--accent)] whitespace-nowrap shrink-0">
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
