import { cn } from "@/lib/utils";
import React from "react";

const TweetArticle = ({ children, className }) => {
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

export default TweetArticle;
