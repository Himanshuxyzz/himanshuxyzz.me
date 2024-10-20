import { cn } from "@/lib/utils";
import React from "react";

type ContentWrapperProps = {
  className?: string;
  children: React.ReactNode;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  className,
  children,
}) => {
  return <div className={cn("mx-auto max-w-full", className)}>{children}</div>;
};

export default ContentWrapper;
