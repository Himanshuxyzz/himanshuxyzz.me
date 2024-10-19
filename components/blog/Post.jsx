import Image from "next/image";
import avatar from "@/public/avatar.webp";
import TweetArticle from "@/components/common/TweetArticle";
import { formatDate } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import MdxComponent from "@/components/mdx";
import {
  UserProfile,
  Title,
  AuthorInfo,
  Mood,
  ContentContainer,
  Content,
} from "@/components/blog/PostComponents";

const Post = ({ post }) => {
  const MdxContent = useMDXComponent(post?.body?.code);

  return (
    <TweetArticle
      className={"dark:hover:bg-[#212529] hover:bg-[#f1f3f5]"}
      key={post.url}
    >
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} date={formatDate(post.date)} />
        <Mood MoodEmoji={"🌴"} MoodText={"Feelin' fresh"} />
        <Title>{post.title}</Title>
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

export default Post;
