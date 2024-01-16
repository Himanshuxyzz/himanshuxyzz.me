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
} from "@/app/(home)/_components/About";
import { Content } from "next/font/google";

const page = ({ params }) => {
  const blog = allBlogs.find(
    (blog) => blog._raw.sourceFileName.replace(".mdx", "") === params.slug
  );
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <Article>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} date={blog.date} />
        <Mood MoodEmoji={"🌴"} MoodText={"Feelin' fresh"} />
        <Title>{blog.title}</Title>
        <MDXContent />
      </ContentContainer>
    </Article>
  );
};

export default page;

export const generateStaticParams = async () =>
  allBlogs.map((article) => ({ slug: article._raw.flattenedPath }));

export const generateMetadata = async ({ params }) => {
  const blog = allBlogs.find(
    (blog) => blog._raw.sourceFileName.replace(".mdx", "") === params.slug
  );
  if (!blog) notFound();
  //   console.log(params.slug);
  return {
    title: blog?.title,
  };
};
