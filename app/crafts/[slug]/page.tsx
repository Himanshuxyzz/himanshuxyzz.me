import { allCrafts } from "@/.contentlayer/generated";
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
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import Image from "next/image";

export default function CraftDetail({ params }: { params: { slug: string } }) {
  const craft = allCrafts.find(
    (craft) => craft._raw.sourceFileName.replace(".mdx", "") === params.slug
  );

  if (!craft) notFound();

  const MdxContent = useMDXComponent(craft.body.code);

  return (
    <TweetArticle>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} date={formatDate(craft.date)} />
        <Mood MoodEmoji={"🎨"} MoodText={"Feelin' artsy"} />
        <Title className={"text-center"}>{craft.title}</Title>

        {craft.technologies && craft.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center my-4">
            {craft.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-[#f1f3f5] dark:bg-[#212529] text-[#495057] dark:text-[#ced4da]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {craft.thumbnail && (
          <div className="w-full my-4 flex justify-center">
            <Image
              src={craft.thumbnail}
              alt={craft.title}
              width={600}
              height={400}
              className="rounded-lg"
              quality={100}
            />
          </div>
        )}

        <Content
          className={
            "prose prose-light dark:prose-dark prose-a:decoration-2 prose-img:blog-article-img prose-blockquote:bg-[#f1f3f5] dark:prose-blockquote:bg-[#212529] dark:text-white"
          }
        >
          {(craft.link || craft.appStoreLink || craft.playStoreLink) && (
            <div className="mt-8 flex flex-wrap gap-2">
              {craft.link && (
                <Link
                  href={craft.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-md bg-link-bg text-white hover:bg-opacity-90 transition-all dark:text-white"
                >
                  Visit Website
                </Link>
              )}
              {craft.appStoreLink && (
                <Link
                  href={craft.appStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-md bg-link-bg text-white hover:bg-opacity-90 transition-all dark:text-white"
                >
                  App Store
                </Link>
              )}
              {craft.playStoreLink && (
                <Link
                  href={craft.playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-md bg-link-bg text-white hover:bg-opacity-90 transition-all dark:text-white"
                >
                  Play Store
                </Link>
              )}
            </div>
          )}

          <MdxContent components={MdxComponent} />
        </Content>
      </ContentContainer>
    </TweetArticle>
  );
}

export const generateStaticParams = async () =>
  allCrafts.map((craft) => ({
    slug: craft._raw.sourceFileName.replace(".mdx", ""),
  }));

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const craft = allCrafts.find(
    (craft) => craft._raw.sourceFileName.replace(".mdx", "") === params.slug
  );

  if (!craft) notFound();

  return {
    title: craft?.title,
  };
};
