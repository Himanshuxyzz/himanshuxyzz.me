import { formatDate } from "@/lib/utils";
import { compareDesc } from "date-fns";
import { getBlogPosts } from "@/lib/mdx";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read my latest thoughts on software development, design, and engineering.",
};

export default async function Blog() {
  const posts = (await getBlogPosts()).sort((a, b) =>
    compareDesc(new Date(a.frontmatter.date), new Date(b.frontmatter.date)),
  );

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-8">All Blog Posts</h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={post.url}
            className="group flex items-center justify-between p-4 border dark:border-neutral-800 border-neutral-200 rounded-lg hover:bg-[#f8f9fa] dark:hover:bg-[#212529] transition-colors"
          >
            <div>
              <h3 className="font-semibold group-hover:text-link-bg transition-colors">
                {post.frontmatter.title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                {formatDate(post.frontmatter.date)}
              </p>
            </div>
            <MdOutlineArrowOutward className="w-5 h-5 text-neutral-400 group-hover:text-link-bg transition-colors shrink-0" />
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-link-bg hover:underline"
      >
        ← Back to home
      </Link>
    </div>
  );
}
