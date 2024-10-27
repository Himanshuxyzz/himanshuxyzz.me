import { useMDXComponent } from "next-contentlayer/hooks";
import avatar from "@/public/avatar.webp";
import { cn, formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import MdxComponent from "@/components/mdx/index";
import { Posts } from "@/.contentlayer/generated";
import { TweetArticle } from "./Article";
import { GiPin } from "react-icons/gi";

export const Post = ({ post }: { post: Posts }) => {
  const MdxContent = useMDXComponent(post?.body?.code);

  return (
    <TweetArticle
      className={"dark:hover:bg-[#212529] hover:bg-[#f1f3f5]"}
      key={post.url}
    >
      <UserProfile />
      <ContentContainer>
        <div className="flex justify-between items-center">
          <AuthorInfo author={"Himanshu"} date={formatDate(post.date)} />
          {post.isPinned && (
            <div className="flex gap-x-2 items-center">
              <GiPin className="text-fluid--1 text-link-bg w-5 h-5 cursor-pointer font-bold" />
              <p className="font-bold text-fluid--1">
                {post.isPinned && "Pinned"}
              </p>
            </div>
          )}
        </div>
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

type ContentContainerProps = {
  children: React.ReactNode;
};

export const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
}) => {
  return <div className="flex flex-col gap-y-1 leading-tight">{children}</div>;
};

type ContentProps = {
  children: React.ReactNode;
  className?: string;
};

export const Content: React.FC<ContentProps> = ({ children, className }) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};

type MoodProps = {
  MoodEmoji: string;
  MoodText: string;
};

export const Mood: React.FC<MoodProps> = ({ MoodEmoji, MoodText }) => {
  return (
    <div className="mb-2">
      <div className="py-1.5 px-3 inline-flex items-center gap-1 bg-[#dee2e6] dark:bg-[#495057] rounded-full">
        <span>{MoodEmoji}</span>
        <span className="text-fluid--2 font-bold">{MoodText}</span>
      </div>
    </div>
  );
};

type AuthorInfoProps = {
  author: string;
  date?: string;
};

export const AuthorInfo: React.FC<AuthorInfoProps> = ({ author, date }) => {
  return (
    <div className="flex gap-x-2 text-fluid--1 items-center dark:text-[#868e96] text-[#495057] mb-2">
      <Link
        href="#"
        className="hover:underline font-bold text-[#030507] dark:text-[#f1f3f5]"
        scroll={false}
      >
        {author}
      </Link>
      {date && (
        <>
          <span>.</span>
          <p className="font-bold">{date || Date.now()}</p>
        </>
      )}
    </div>
  );
};

type TitleProps = {
  className?: string;
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ className, children }) => {
  return (
    <>
      <h1 className={cn("mb-2 font-bold text-heading-fluid-1", className)}>
        {children}
      </h1>
    </>
  );
};

export const UserProfile: React.FC = () => {
  return (
    <>
      <div className="w-10 h-10">
        <Image
          className="rounded-full w-10 h-10 object-cover"
          src={avatar}
          alt="user-profile"
          placeholder="blur"
        />
      </div>
    </>
  );
};
