import { TweetArticle } from "@/components/common/Article";
import {
  AuthorInfo,
  Content,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
} from "@/components/common/Post";
import MdxComponent from "@/components/mdx";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import FeatureImg from "@/components/common/FeatureImg";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCraft, getCraftSlugs } from "@/lib/mdx";

export default async function CraftDetail({
  params,
}: {
  params: { slug: string };
}) {
  const craft = await getCraft(params.slug);

  if (!craft) notFound();

  const { frontmatter } = craft;

  return (
    <TweetArticle>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo
          author={"Himanshu"}
          date={frontmatter.date ? formatDate(frontmatter.date) : undefined}
        />
        <Mood MoodEmoji={"🎨"} MoodText={"Feelin' artsy"} />
        <Title className={"text-center"}>{frontmatter.title}</Title>

        {frontmatter.technologies && frontmatter.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center my-4">
            {frontmatter.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-[#f1f3f5] dark:bg-[#212529] text-[#495057] dark:text-[#ced4da]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {frontmatter.thumbnail && (
          <div className="w-full my-4 flex justify-center">
            <FeatureImg
              image={frontmatter.thumbnail}
              width={600}
              height={400}
              className="rounded-lg w-full"
              quality={100}
            />
          </div>
        )}

        <Content
          className={
            "prose prose-light dark:prose-dark prose-a:decoration-2 prose-img:blog-article-img prose-blockquote:bg-[#f1f3f5] dark:prose-blockquote:bg-[#212529] dark:text-white"
          }
        >
          {(frontmatter.link ||
            frontmatter.appStoreLink ||
            frontmatter.playStoreLink) && (
            <div className="mt-8 flex flex-wrap gap-2">
              {frontmatter.link && (
                <Link
                  href={frontmatter.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-md bg-link-bg text-white hover:bg-opacity-90 transition-all dark:text-white"
                >
                  Visit Website
                </Link>
              )}
              {frontmatter.appStoreLink && (
                <Link
                  href={frontmatter.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-md bg-link-bg text-white hover:bg-opacity-90 transition-all dark:text-white"
                >
                  App Store
                </Link>
              )}
              {frontmatter.playStoreLink && (
                <Link
                  href={frontmatter.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-md bg-link-bg text-white hover:bg-opacity-90 transition-all dark:text-white"
                >
                  Play Store
                </Link>
              )}
            </div>
          )}

          <MDXRemote source={craft.content} components={MdxComponent} />
        </Content>
      </ContentContainer>
    </TweetArticle>
  );
}

export const generateStaticParams = async () => {
  const slugs = await getCraftSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const craft = await getCraft(params.slug);

  if (!craft) notFound();

  return {
    title: craft.frontmatter.title,
  };
};
