import Image from "next/image";
import avatar from "@/public/avatar.webp";
import feature from "@/public/feature-img.webp";
import Article from "@/components/common/Article";
import FeatureImg from "@/components/common/FeatureImg";
import { cn } from "@/lib/utils";

const UserProfile = () => {
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

const Title = ({ className, children }) => {
  return (
    <>
      <h2 className={cn("mb-1 font-bold text-fluid--1", className)}>
        {children}
      </h2>
    </>
  );
};

const AuthorInfo = ({ author, date }) => {
  return (
    <div className="flex gap-x-2 text-fluid--1 items-center text-[#868e96]">
      <a className="hover:underline font-bold text-[#495057] dark:text-[#f1f3f5]">
        {author}
      </a>
      <span>.</span>
      <p className="font-bold">{date || Date.now()}</p>
    </div>
  );
};

const Mood = ({ MoodEmoji, MoodText }) => {
  return (
    <div className="mb-2">
      <div className="py-1 px-3 inline-flex items-center gap-1 bg-[#dee2e6] dark:bg-[#495057] rounded-full">
        <span>{MoodEmoji}</span>
        <span className="text-fluid--2 font-bold">{MoodText}</span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Article>
      <UserProfile />
      <div className="flex flex-col gap-y-1 leading-tight">
        <AuthorInfo author={"Himanshu"} date={"28.May.2023"} />
        <Mood MoodEmoji={"🌴"} MoodText={"Feelin' fresh"} />
        <Title>Hello World 👋</Title>
        <p className="mb-4">
          I am{" "}
          <span className=" font-bold text-link-bg decoration-4 underline-offset-2">
            Himanshu Toppo
          </span>
          , based in india 🇮🇳 , i am a developer who loves to bring ideas to
          life using modern web technologies, i enjoy learning new tools and
          technologies , and i am Currently looking into learning backend and
          databases while also solidifying my knowledge of front-end
          development.
        </p>
        <FeatureImg image={feature} />
      </div>
    </Article>
  );
};

export default About;
