import React from "react";

const Article = ({ children }) => {
  return (
    <article
      className={` grid grid-cols-[auto_1fr] p-4 gap-2 rounded-lg max-w-full w-full dark:hover:bg-[#212529] hover:bg-[#f1f3f5] card-transition`}
    >
      {children}
    </article>
  );
};

export default Article;
