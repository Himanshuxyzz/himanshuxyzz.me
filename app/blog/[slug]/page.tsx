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
import { getBlogPost, getBlogSlugs } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogPost(params.slug);

  if (!blog) notFound();

  const { frontmatter } = blog;
  return (
    <TweetArticle>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} date={formatDate(frontmatter.date)} />
        <Mood MoodEmoji={"🌴"} MoodText={"Feelin' fresh"} />
        <Title className={"text-center"}>{frontmatter.title}</Title>
        <Content
          className={
            "prose prose-light dark:prose-dark prose-a:decoration-2 prose-img:blog-article-img prose-blockquote:bg-[#f1f3f5] dark:prose-blockquote:bg-[#212529]"
          }
        >
          <MDXRemote source={blog.content} components={MdxComponent} />
        </Content>
      </ContentContainer>
    </TweetArticle>
  );
}

export const generateStaticParams = async () => {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: { params: any }) => {
  const blog = await getBlogPost(params.slug);
  if (!blog) notFound();
  return {
    title: blog.frontmatter.title,
  };
};
