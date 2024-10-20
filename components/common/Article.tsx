import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Title } from "./Post";

type ArticleProps = {
  children: React.ReactNode;
  className?: string;
};
export const TweetArticle: React.FC<ArticleProps> = ({
  children,
  className,
}) => {
  return (
    <article
      className={cn(
        "grid grid-cols-[auto_1fr] p-4 gap-2 rounded-lg max-w-full w-full mb-3",
        className
      )}
    >
      {children}
    </article>
  );
};

type ArticleItemProps = {
  text: string;
  href: string;
  date: string;
  className?: string;
};

export const ArticleItem: React.FC<ArticleItemProps> = ({
  text,
  href,
  date,
  className,
}) => {
  return (
    <div
      className={cn(" hover:bg-[#f1f3f5] dark:hover:bg-[#212529]", className)}
    >
      <Link href={href}>
        <div className=" border-b-2 border-b-link-bg w-full flex justify-between px-1 py-2 md:py-[8px] flex-col md:flex-row">
          <h2 className="font-semibold text-md">
            <span>{text}</span>
          </h2>
          <div className="text-sm font-medium dark:text-[#868e96] text-[#495057]">
            {date}
          </div>
        </div>
      </Link>
    </div>
  );
};

type TitleProps = {
  title: string;
  children: React.ReactNode;
};

export const ArticleList: React.FC<TitleProps> = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <div className="space-y-2">{children}</div>
    </>
  );
};
