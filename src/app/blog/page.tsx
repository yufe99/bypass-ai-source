import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides and articles about AI text detection, GPTZero, and writing tools.",
};

export default function BlogListPage() {
  const posts = [
    {
      title: "How to Bypass GPTZero: What Actually Works in 2026",
      slug: "bypass-gptzero",
      date: "July 2026",
      excerpt:
        "Learn what GPTZero looks for, why AI-generated text gets flagged, and the specific rewriting techniques that consistently produce natural-sounding output.",
    },
  ];

  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px 120px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: 16, fontFamily: "var(--font-serif)" }}>
        Blog
      </h1>
      <p style={{ fontSize: "1.125rem", color: "var(--color-text-muted)", marginBottom: 40 }}>
        Guides, research, and tools for writing naturally with AI assistance.
      </p>

      {posts.map((post) => (
        <article key={post.slug} style={{ marginBottom: 32 }}>
          <time style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
            {post.date}
          </time>
          <h2 style={{ marginTop: 8, marginBottom: 8 }}>
            <Link
              href={`/blog/${post.slug}/`}
              style={{ color: "var(--color-text)", textDecoration: "none" }}
            >
              {post.title}
            </Link>
          </h2>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}