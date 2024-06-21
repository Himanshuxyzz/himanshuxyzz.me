import React from "react";
import { allBlogs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import TweetArticle from "@/components/common/TweetArticle";
import {
  AuthorInfo,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
  Content,
} from "@/app/(home)/page";
import { formatDate } from "@/lib/utils";
import MdxComponent from "@/components/mdx";

const Blog = ({ params }) => {
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
};

export default Blog;

export const generateStaticParams = async () =>
  allBlogs.map((article) => ({ slug: article._raw.flattenedPath }));

export const generateMetadata = async ({ params }) => {
  const blog = allBlogs.find(
    (blog) => blog._raw.sourceFileName.replace(".mdx", "") === params.slug
  );
  if (!blog) notFound();
  return {
    title: blog?.title,
  };
};
