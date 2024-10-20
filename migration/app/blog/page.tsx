import { allBlogs } from "@/.contentlayer/generated";
import {
  ArticleItem,
  ArticleList,
  TweetArticle,
} from "@/components/common/Article";
import {
  AuthorInfo,
  ContentContainer,
  Mood,
  UserProfile,
} from "@/components/common/Post";
import { formatDate } from "@/lib/utils";
import { compareDesc } from "date-fns";

export default function Blog() {
  //   if (!allPosts) return null;
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
}
