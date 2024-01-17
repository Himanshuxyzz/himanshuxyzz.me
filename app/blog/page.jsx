import React from "react";
import {
  AuthorInfo,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
} from "@/app/(home)/_components/About";
import Article from "@/components/common/Article";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { allBlogs } from "@/.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

export const ArticleItem = ({ text, href, date, className }) => {
  return (
    <div
      className={cn("hover:bg-[#f1f3f5] dark:hover:bg-[#212529]", className)}
    >
      <Link href={href}>
        <div className=" border-b-2 border-b-link-bg w-full flex justify-between py-3 md:py-[8px] flex-col md:flex-row">
          <h2 className="font-semibold text-md">
            <span>{text}</span>
          </h2>
          <div className="text-sm font-medium dark:text-[#868e96] text-[#495057]">
            {!date ? "13.01.2024" : date}
          </div>
        </div>
      </Link>
    </div>
  );
};

export const ArticleList = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <div className="space-y-2">{children}</div>
    </>
  );
};

const page = () => {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  // console.log(posts);
  return (
    <Article>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} />
        <Mood MoodEmoji={"🌴"} MoodText={"Feelin' fresh"} />
        <ArticleList title={"Blog"}>
          <ArticleItem text={"Article - 1"} href={"#"} />
          {posts.map((post, idx) => {
            return (
              <ArticleItem
                key={post._id}
                text={post.title}
                href={post.url}
                date={format(parseISO(post.date), "LLLL d, yyyy")}
              />
            );
          })}
        </ArticleList>
      </ContentContainer>
    </Article>
  );
};

export default page;
