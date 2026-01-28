import { getCrafts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { compareDesc } from "date-fns";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BlurFade } from "@/components/layout/BlurFadeWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crafts",
  description: "A showcase of my projects, experiments, and digital crafts.",
};

const BLUR_FADE_DELAY = 0.05;

export default async function CraftsPage() {
  const crafts = (await getCrafts()).sort((a, b) => {
    const aDate = a.frontmatter.date ? new Date(a.frontmatter.date) : null;
    const bDate = b.frontmatter.date ? new Date(b.frontmatter.date) : null;

    if (aDate && bDate) {
      return compareDesc(aDate, bDate);
    }

    return 0;
  });

  return (
    <div className="pt-8 pb-16 px-4 sm:px-0">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-3xl font-bold mb-8 saturate-200">Crafts</h1>
      </BlurFade>

      <div className="space-y-4">
        {crafts.map((craft, idx) => (
          <BlurFade key={craft.slug} delay={BLUR_FADE_DELAY * (idx + 2)}>
            <Link
              href={craft.url}
              className="group flex items-center justify-between p-4 border dark:border-neutral-800 border-neutral-200 rounded-lg hover:bg-[#f8f9fa] dark:hover:bg-[#212529] transition-colors"
            >
              <div>
                <h3 className="font-semibold group-hover:text-link-bg transition-colors">
                  {craft.frontmatter.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                  {craft.frontmatter.date
                    ? formatDate(craft.frontmatter.date)
                    : "Recent Project"}
                </p>
              </div>
              <MdOutlineArrowOutward className="w-5 h-5 text-neutral-400 group-hover:text-link-bg transition-colors shrink-0" />
            </Link>
          </BlurFade>
        ))}
      </div>

      <div className="mt-12 border-t dark:border-neutral-800 border-neutral-200 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 hover:text-link-bg transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
