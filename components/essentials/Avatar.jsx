import React from "react";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/avatar.webp";
import { RxArrowRight } from "react-icons/rx";
import { AiFillThunderbolt } from "react-icons/ai";

const Avatar = () => {
  return (
    <div className=" flex items-center justify-end relative py-3 min-h-half-avatar">
      <div className="absolute top-0 left-0 -translate-y-1/2 w-avatar h-avatar ">
        <Image
          className="object-cover aspect-square rounded-full border-4 border-[#030507] dark:border-[#f1f3f5] w-full h-full"
          src={avatar}
          fill
          alt="profile"
        />
      </div>
      <Link
        className="hover:no-underline border-transparent focus:border-text-1 focus-visible:border-text-1 hover:border-[#030507] dark:hover:border-[#f1f3f5] border-4 rounded-full text-fluid--1 flex gap-x-[2px] items-center text-white bg-link-bg px-2 font-bold text-center"
        href={"#"}
      >
        Resume <AiFillThunderbolt className="text-yellow-400 w-5 h-5" />
      </Link>
    </div>
  );
};

export default Avatar;
