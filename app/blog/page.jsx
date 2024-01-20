import React from "react";
import {
  AuthorInfo,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
} from "@/app/(home)/page";
import Article from "@/components/common/Article";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import { allBlogs } from "@/.contentlayer/generated";
import compareDesc from "date-fns/compareDesc";

export const ArticleItem = ({ text, href, date, className }) => {
  return (
    <div
      className={cn(" hover:bg-[#f1f3f5] dark:hover:bg-[#212529]", className)}
    >
      <Link href={href}>
        <div className=" border-b-2 border-b-link-bg w-full flex justify-between px-1 py-2 md:py-[8px] flex-col md:flex-row">
          <h2 className="font-semibold text-md">
            <span>{text}</span>
          </h2>
          <div className="text-sm font-medium dark:text-[#868e96] text-[#495057]">
            {date}
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
        <AuthorInfo
          author={"Himanshu"}
          date={formatDate(new Date().toISOString())}
        />
        <Mood MoodEmoji={"🌴"} MoodText={"Feelin' fresh"} />
        <ArticleList title={"Blog"}>
          {posts.map((post, idx) => {
            return (
              <ArticleItem
                key={post._id}
                text={post.title}
                href={post.url}
                date={formatDate(post.date)}
              />
            );
          })}
        </ArticleList>
      </ContentContainer>
    </Article>
  );
};

export default page;
