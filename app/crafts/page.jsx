import Article from "@/components/common/Article";
import React from "react";
import {
  AuthorInfo,
  Content,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
} from "../(home)/page";

const page = () => {
  return (
    <Article className={"dark:hover:bg-[#212529] hover:bg-[#f1f3f5]"}>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} />
        <Mood MoodEmoji={"🎨"} MoodText={"Feelin' artsy"} />
        <Title>Crafts</Title>
        <Content
          className={
            "prose prose-light dark:prose-dark prose-a:decoration-2 prose-img:blog-article-img prose-blockquote:bg-[#f1f3f5] dark:prose-blockquote:bg-[#212529]"
          }
        ></Content>
      </ContentContainer>
    </Article>
  );
};

export default page;
