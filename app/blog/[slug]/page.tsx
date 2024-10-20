import { allBlogs } from "@/.contentlayer/generated";
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
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const blog = allBlogs.find(
    (blog) => blog._raw.sourceFileName.replace(".mdx", "") === params.slug
  );
  if (!blog) notFound();
  const MdxContent = useMDXComponent(blog.body.code);
  return (
    <TweetArticle>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} date={formatDate(blog.date)} />
        <Mood MoodEmoji={"🌴"} MoodText={"Feelin' fresh"} />
        <Title className={"text-center"}>{blog.title}</Title>
        <Content
          className={
            "prose prose-light dark:prose-dark prose-a:decoration-2 prose-img:blog-article-img prose-blockquote:bg-[#f1f3f5] dark:prose-blockquote:bg-[#212529]"
          }
        >
          <MdxContent components={MdxComponent} />
        </Content>
      </ContentContainer>
    </TweetArticle>
  );
}

export const generateStaticParams = async () =>
  allBlogs.map((article) => ({ slug: article._raw.flattenedPath }));

export const generateMetadata = async ({ params }: { params: any }) => {
  const blog = allBlogs.find(
    (blog) => blog._raw.sourceFileName.replace(".mdx", "") === params.slug
  );
  if (!blog) notFound();
  return {
    title: blog?.title,
  };
};
