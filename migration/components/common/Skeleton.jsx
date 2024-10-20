import { cn } from "@/lib/utils";
import React from "react";

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn("animate-pulse dark:bg-[#212529] bg-[#f1f3f5] ", className)}
    ></div>
  );
};

export default Skeleton;
