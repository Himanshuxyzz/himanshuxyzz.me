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
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

const page = () => {
  return (
    <TweetArticle>
      <UserProfile />
      <ContentContainer>
        <AuthorInfo author={"Himanshu"} />
        <Mood MoodEmoji={"🚀"} MoodText={"Feelin' fired up"} />
        <Title>Experiences</Title>
        <Content
          className={
            "prose prose-light dark:prose-dark prose-a:decoration-2 prose-img:blog-article-img prose-blockquote:bg-[#f1f3f5] dark:prose-blockquote:bg-[#212529]"
          }
        >
          <div className="text-center dark:text-white text-black font-bold">
            ⚠️ Under Construction
          </div>
        </Content>
        {/* <WorkTimeline /> */}
      </ContentContainer>
    </TweetArticle>
  );
};

const WorkTimeline = () => {
  return (
    <div className="w-full border dark:border-neutral-700 border-black  border-dashed p-3.5 sm:p-5 rounded-md">
      <div className="w-full border-b dark:border-neutral-700 border-black  border-dashed pb-2.5 flex items-center justify-between flex-wrap">
        <p className="font-semibold">Web developer intern</p>
        <div>
          <Link href={"https://hackshade.in/"}>
            <p className="font-semibold text-start sm:text-end cursor-pointer flex items-center gap-0.5 hover:gap-1">
              Hackshade <MdOutlineArrowOutward width={20} height={20} />
            </p>
          </Link>

          <p className="text-neutral-400 font-semibold text-xs sm:text-sm sm:text-end">
            jan 2023 - jun 2023
          </p>
        </div>
      </div>

      <ul className="flex flex-col items-start justify-start gap-2.5 pl-3 mt-5 list-disc list-outside">
        <li className="md:text-xl text-neutral-500 font-semibold">
          Increased website performance by 30% by optimizing web application
          pages using PHP, MySQL, HTML, Bootstrap, and JavaScript, resulting in
          improved user retention and engagement.
        </li>
        <li className="md:text-xl text-neutral-500 font-semibold">
          Enhanced user interaction and content management capabilities through
          the implementation of CRUD (Create, Read, Update, Delete)
          functionality within the web application.
        </li>
        <li className="md:text-xl text-neutral-500 font-semibold">
          Designed and developed a responsive website that adapts seamlessly to
          various screen sizes, improving accessibility and user experience
          across devices.
        </li>
      </ul>
    </div>
  );
};

export default page;
