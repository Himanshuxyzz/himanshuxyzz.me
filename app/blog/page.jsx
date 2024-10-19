import React from "react";
import {
  AuthorInfo,
  ContentContainer,
  Mood,
  UserProfile,
} from "@/app/(home)/page";
import { formatDate } from "@/lib/utils";
import { allBlogs } from "@/.contentlayer/generated";
import compareDesc from "date-fns/compareDesc";
import TweetArticle from "@/components/common/TweetArticle";
import { ArticleItem, ArticleList } from "@/components/blog/ArticleComponents";

const Page = () => {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  // console.log(posts);
  return (
    <TweetArticle>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} />
        <Mood MoodEmoji={"⚡️"} MoodText={"Feelin' electric"} />
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
    </TweetArticle>
  );
};

export default Page;
