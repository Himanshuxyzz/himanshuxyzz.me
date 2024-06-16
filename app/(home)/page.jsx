import Image from "next/image";
import avatar from "@/public/avatar.webp";
import feature from "@/public/feature-img.webp";
import Article from "@/components/common/Article";
import FeatureImg from "@/components/common/FeatureImg";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";

export const UserProfile = () => {
  return (
    <>
      <div className="w-10 h-10">
        <Image
          className="rounded-full w-10 h-10 object-cover"
          src={avatar}
          alt="user-profile"
        />
      </div>
    </>
  );
};

export const Title = ({ className, children }) => {
  return (
    <>
      <h1 className={cn("mb-2 font-bold text-heading-fluid-1", className)}>
        {children}
      </h1>
    </>
  );
};

export const AuthorInfo = ({ author, date }) => {
  return (
    <div className="flex gap-x-2 text-fluid--1 items-center dark:text-[#868e96] text-[#495057] mb-2">
      <Link
        href="#"
        className="hover:underline font-bold text-[#030507] dark:text-[#f1f3f5]"
        scroll={false}
      >
        {author}
      </Link>
      <span>.</span>
      <p className="font-bold">{date || Date.now()}</p>
    </div>
  );
};

export const Mood = ({ MoodEmoji, MoodText }) => {
  return (
    <div className="mb-2">
      <div className="py-1 px-3 inline-flex items-center gap-1 bg-[#dee2e6] dark:bg-[#495057] rounded-full">
        <span>{MoodEmoji}</span>
        <span className="text-fluid--2 font-bold">{MoodText}</span>
      </div>
    </div>
  );
};

export const ContentContainer = ({ children }) => {
  return <div className="flex flex-col gap-y-1 leading-tight">{children}</div>;
};

export const Content = ({ children, className }) => {
  return <div className={cn("mb-4", className)}>{children}</div>;
};

const About = () => {
  return (
    <Article className={"dark:hover:bg-[#212529] hover:bg-[#f1f3f5]"}>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo
          author={"Himanshu"}
          date={formatDate(new Date().toISOString())}
        />
        <Mood MoodEmoji={"🌴"} MoodText={"Feelin' fresh"} />
        <Title>Hello World 👋</Title>
        <Content>
          I am{" "}
          <span className=" font-bold text-link-bg decoration-4 underline-offset-2">
            Himanshu Toppo
          </span>
          , based in india 🇮🇳 , i am a developer who loves to bring ideas to
          life using modern web technologies, i enjoy learning new tools and
          technologies , and currently into learning backend and databases while
          also solidifying my knowledge of front-end development.
        </Content>
        <FeatureImg image={feature} />
      </ContentContainer>
    </Article>
  );
};

export default About;
