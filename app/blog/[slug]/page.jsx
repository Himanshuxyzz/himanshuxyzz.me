import React from "react";
import { allBlogs } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import Article from "@/components/common/Article";
import {
  AuthorInfo,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
  Content,
} from "@/app/(home)/_components/About";
import { formatDate } from "@/lib/utils";

const Blog = ({ params }) => {
  const blog = allBlogs.find(
    (blog) => blog._raw.sourceFileName.replace(".mdx", "") === params.slug
  );
  if (!blog) notFound();
  const MdxContent = useMDXComponent(blog.body.code);

  return (
    <Article>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} date={formatDate(blog.date)} />
        <Mood MoodEmoji={"🌴"} MoodText={"Feelin' fresh"} />
        <Title>{blog.title}</Title>
        <Content>
          <MdxContent />
        </Content>
      </ContentContainer>
    </Article>
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
