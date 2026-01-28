import { formatDate } from "@/lib/utils";
import { compareDesc } from "date-fns";
import { getBlogPosts } from "@/lib/mdx";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default async function BlogSection() {
  const posts = (await getBlogPosts()).sort((a, b) =>
    compareDesc(new Date(a.frontmatter.date), new Date(b.frontmatter.date)),
  );

  // Show only first 4 posts on homepage
  const displayPosts = posts.slice(0, 4);
  const hasMorePosts = posts.length > 4;

  return (
    <section id="blog" className="py-8 px-4 sm:px-0">
      <h2 className="text-2xl font-bold mb-6">Blog</h2>

      <div className="space-y-3">
        {displayPosts.map((post) => (
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
        href="/blog"
        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-link-bg hover:underline"
      >
        View all posts <MdOutlineArrowOutward className="w-4 h-4" />
      </Link>
    </section>
  );
}
