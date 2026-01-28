import { TweetArticle } from "@/components/common/Article";
import {
  AuthorInfo,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
  Content,
} from "@/components/common/Post";
import { getHomepagePosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import MdxComponent from "@/components/mdx/index";
import { MDXRemote } from "next-mdx-remote/rsc";
import { GiPin } from "react-icons/gi";
import GitHubCalendarWidget from "@/components/GitHubCalendarWidget";

export default async function HeroSection() {
  const posts = await getHomepagePosts();
  const pinnedPost = posts.find((post) => post.frontmatter.isPinned);

  if (!pinnedPost) return null;

  const { frontmatter, content } = pinnedPost;

  return (
    <section id="hero">
      <TweetArticle
      // className="dark:hover:bg-[#212529] hover:bg-[#f1f3f5]"
      >
        <UserProfile />
        <ContentContainer>
          <div className="flex justify-between items-center">
            <AuthorInfo author="Himanshu" date={formatDate(frontmatter.date)} />
            <div className="flex gap-x-2 items-center">
              <GiPin className="text-fluid--1 text-link-bg w-5 h-5 cursor-pointer font-bold" />
              <p className="font-bold text-fluid--1">Pinned</p>
            </div>
          </div>
          <Mood MoodEmoji="🌴" MoodText="Feelin' fresh" />
          <Title>{frontmatter.title}</Title>
          <Content className="prose prose-light dark:prose-dark prose-a:decoration-2 prose-img:blog-article-img prose-blockquote:bg-[#f1f3f5] dark:prose-blockquote:bg-[#212529]">
            <MDXRemote source={content} components={MdxComponent} />
          </Content>

          {/* GitHub Contributions */}
          <div className="mt-6 min-w-0 overflow-hidden">
            <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-3">
              My GitHub Contributions
            </p>
            <GitHubCalendarWidget />
          </div>
        </ContentContainer>
      </TweetArticle>
    </section>
  );
}
