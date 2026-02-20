import { getAllPosts, getPostContent } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Osman Fatih Kilic`,
    description: post.meta.description,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) notFound();

  return (
    <>
      <header className="pt-20 pb-8">
        <Link
          href="/blog"
          className="text-[13px] text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-8 inline-block"
        >
          ← Blog
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          {post.meta.title}
        </h1>
        <div className="flex gap-3 items-center text-[13px] text-[var(--muted)]">
          <span>{post.meta.date}</span>
          {post.meta.tags && post.meta.tags.length > 0 && (
            <>
              <span>·</span>
              <div className="flex gap-2">
                {post.meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-[var(--tag-bg)] rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <article className="prose prose-stone max-w-none pb-20
        prose-headings:font-semibold prose-headings:tracking-tight
        prose-p:text-[var(--text)] prose-p:leading-relaxed
        prose-a:text-[var(--text)] prose-a:underline prose-a:underline-offset-2
        prose-code:text-[var(--text)] prose-code:bg-[var(--tag-bg)] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[13px]
        prose-pre:bg-[#1c1917] prose-pre:text-[var(--bg)]
        prose-blockquote:border-[var(--border)] prose-blockquote:text-[var(--muted)]">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </>
  );
}
