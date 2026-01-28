import { formatDate } from "@/lib/utils";
import { compareDesc } from "date-fns";
import { getCrafts } from "@/lib/mdx";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default async function CraftsSection() {
  const crafts = (await getCrafts()).sort((a, b) => {
    const aDate = a.frontmatter.date ? new Date(a.frontmatter.date) : null;
    const bDate = b.frontmatter.date ? new Date(b.frontmatter.date) : null;

    if (aDate && bDate) {
      return compareDesc(aDate, bDate);
    }

    return 0;
  });

  return (
    <section id="crafts" className="py-8">
      <h2 className="text-2xl font-bold mb-6">Crafts</h2>

      {crafts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {crafts.map((craft) => (
            <Link
              key={craft.slug}
              href={craft.url}
              className="group block p-4 border dark:border-neutral-800 border-neutral-200 rounded-lg hover:bg-[#f8f9fa] dark:hover:bg-[#212529] transition-colors"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-link-bg transition-colors">
                    {craft.frontmatter.title}
                  </h3>
                  {craft.frontmatter.date && (
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                      {formatDate(craft.frontmatter.date)}
                    </p>
                  )}
                  {craft.frontmatter.technologies &&
                    craft.frontmatter.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {craft.frontmatter.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs font-medium bg-neutral-100 dark:bg-neutral-800 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                </div>
                <MdOutlineArrowOutward className="w-5 h-5 text-neutral-400 group-hover:text-link-bg transition-colors shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center border dark:border-neutral-800 border-neutral-200 rounded-lg">
          <div className="text-xl font-bold mb-2">🚧 Work in Progress 🚧</div>
          <p className="text-neutral-500 dark:text-neutral-400">
            Exciting crafts coming soon! Please check back later.
          </p>
        </div>
      )}
    </section>
  );
}
