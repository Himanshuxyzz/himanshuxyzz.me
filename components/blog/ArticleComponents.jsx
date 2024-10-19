import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Title } from "@/app/(home)/page";

export const ArticleItem = ({ text, href, date, className }) => {
  return (
    <div
      className={cn(" hover:bg-[#f1f3f5] dark:hover:bg-[#212529]", className)}
    >
      <Link href={href}>
        <div className=" border-b-2 border-b-link-bg w-full flex justify-between px-1 py-2 md:py-[8px] flex-col md:flex-row">
          <h2 className="font-semibold text-md ">
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

export const ArticleList = ({ title, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <div className="space-y-2">{children}</div>
    </>
  );
};
