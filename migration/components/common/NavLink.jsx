"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const NavLink = ({ href, name, key }) => {
  const currentPath = usePathname();
  const isActive =
    currentPath.startsWith(href) &&
    (currentPath[href.length] === "/" || currentPath.length === href.length);
  return (
    <Link
      key={key}
      href={href}
      className="font-bold grid place-items-center w-full h-full text-[#030507] dark:text-[#868e96]  hover:no-underline focus-visible:outline-0 focus-visible:bg-[#f1f3f5]"
    >
      <span
        key={key}
        className={cn("p-2 px-4 border-b-4 border-transparent", {
          "border-b-link-bg dark:text-[#f1f3f5] text-[#030507]": isActive,
        })}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavLink;
