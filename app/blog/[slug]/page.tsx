import { getAllPosts, getPostContent } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} — Osman Fatih Kilic`,
    description: post.meta.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostContent(slug);
  if (!post) notFound();

  return (
    <div className="pb-24">
      <header className="pt-16 pb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-700 transition-colors duration-200 mb-10"
        >
          ← Back to blog
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900 leading-snug mb-4">
          {post.meta.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400">
          {post.meta.date && <span className="tabular-nums">{post.meta.date}</span>}
          {post.meta.tags && post.meta.tags.length > 0 && (
            <>
              <span>·</span>
              <div className="flex flex-wrap gap-1.5">
                {post.meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-stone-100 text-stone-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <article className="prose prose-stone prose-sm max-w-none
        prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-stone-900
        prose-p:text-stone-600 prose-p:leading-relaxed
        prose-a:text-stone-900 prose-a:underline prose-a:underline-offset-2 prose-a:decoration-stone-300 hover:prose-a:decoration-stone-600
        prose-strong:text-stone-800 prose-strong:font-semibold
        prose-code:text-stone-700 prose-code:bg-stone-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-[0.8em] prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-stone-900 prose-pre:text-stone-100 prose-pre:rounded-xl
        prose-blockquote:border-stone-200 prose-blockquote:text-stone-500 prose-blockquote:font-normal prose-blockquote:not-italic
        prose-hr:border-stone-100
        prose-li:text-stone-600">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
