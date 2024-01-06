import { cn } from "@/lib/utils";
import React from "react";

const ContentWrapper = ({ className, children }) => {
  return <div className={cn("mx-auto max-w-full", className)}>{children}</div>;
};

export default ContentWrapper;
