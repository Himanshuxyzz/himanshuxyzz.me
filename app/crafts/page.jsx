import React from "react";
import {
  AuthorInfo,
  Content,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
} from "../(home)/page";
import TweetArticle from "@/components/common/TweetArticle";

const page = () => {
  return (
    <TweetArticle className={"dark:hover:bg-[#212529] hover:bg-[#f1f3f5]"}>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} />
        <Mood MoodEmoji={"🎨"} MoodText={"Feelin' artsy"} />
        <Title>Crafts</Title>
        <Content
          className={
            "prose prose-light dark:prose-dark prose-a:decoration-2 prose-img:blog-article-img prose-blockquote:bg-[#f1f3f5] dark:prose-blockquote:bg-[#212529]"
          }
        >
          <div className="text-center dark:text-white text-black font-bold">
            ⚠️ Under Construction
          </div>
        </Content>
      </ContentContainer>
    </TweetArticle>
  );
};

export default page;
