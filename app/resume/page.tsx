"use client";
import { TweetArticle } from "@/components/common/Article";
import React from "react";
import {
  AuthorInfo,
  Content,
  ContentContainer,
  Mood,
  Title,
  UserProfile,
} from "@/components/common/Post";
import Image from "next/image";
import resume from "@/public/resume.webp";
import { cn } from "@/lib/utils";

export default function Resume() {
  return (
    <TweetArticle className={"dark:hover:bg-[#212529] hover:bg-[#f1f3f5]"}>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} />
        <Mood MoodEmoji={"🤓"} MoodText={"Feelin' nerdy"} />
        <Title className={"text-center"}>Resume</Title>
        <Content>
          <ResumeContainer className={"w-full mx-auto"} />
        </Content>
      </ContentContainer>
    </TweetArticle>
  );
}

type ResumeProps = {
  className?: string;
};

const ResumeContainer: React.FC<ResumeProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <picture className="relative">
        <Image
          className="h-full transition-opacity opacity-0 duration-[2s] rounded-lg mx-auto border shadow-lg"
          src={resume}
          alt="Resume"
          width={360}
          height={500}
          priority={true}
          quality={100}
          onLoad={(e) =>
            (e.target as HTMLImageElement).classList.remove("opacity-0")
          }
        />
      </picture>
      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          className="px-3 py-1.5 bg-zinc-800 text-zinc-50 border-2 border-transparent truncate rounded hover:brightness-150 active:brightness-125 disabled:cursor-default disabled:bg-zinc-200 disabled:text-zinc-900"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1_aH9HiMx6tUtj2gY460sLia-AHjfV2eh/view?usp=sharing"
            )
          }
        >
          Resume on Drive
        </button>
        <button
          className="px-3 py-1.5 bg-zinc-800 text-zinc-50 border-2 border-transparent truncate rounded hover:brightness-150 active:brightness-125 disabled:cursor-default disabled:bg-zinc-200 disabled:text-zinc-900"
          onClick={() => (window.location.href = "/resume-latest.pdf")}
        >
          Resume as PDF
        </button>
      </div>
    </div>
  );
};
