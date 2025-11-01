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
import { getBlogPosts } from "@/lib/mdx";

export default async function Blog() {
  const posts = (await getBlogPosts()).sort((a, b) =>
    compareDesc(new Date(a.frontmatter.date), new Date(b.frontmatter.date))
  );
  return (
    <TweetArticle>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} />
        <Mood MoodEmoji={"⚡️"} MoodText={"Feelin' electric"} />
        <ArticleList title={"Blog"}>
          {posts.map((post) => (
            <ArticleItem
              key={post.slug}
              text={post.frontmatter.title}
              href={post.url}
              date={formatDate(post.frontmatter.date)}
            />
          ))}
        </ArticleList>
      </ContentContainer>
    </TweetArticle>
  );
}
