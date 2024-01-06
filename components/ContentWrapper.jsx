import { cn } from "@/lib/utils";
import React from "react";

const ContentWrapper = ({ className, children }) => {
  return <div className={cn("w-feature", className)}>{children}</div>;
};

export default ContentWrapper;
