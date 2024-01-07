import React from "react";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/avatar.webp";
import bear from "@/public/bear.svg";

export const Profile = ({ avatar }) => {
  return (
    <div className="absolute top-0 left-0 -translate-y-1/2 w-avatar h-avatar ">
      <Image
        className="object-cover aspect-square rounded-full border-4 border-[#030507] dark:border-[#f1f3f5] w-full h-full saturate-150"
        src={avatar}
        fill
        alt="profile"
      />
    </div>
  );
};

export const ResumeBtn = () => {
  return (
    <Link
      className="hover:no-underline border-transparent dark:focus:border-[#f1f3f5] focus:border-[#030507] dark:focus-visible:border-[#f1f3f5] focus-visible:border-[#030507] hover:border-[#030507] dark:hover:border-[#f1f3f5] border-4 rounded-full text-fluid--1 flex gap-x-[2px] items-center text-white bg-link-bg px-3 leading-tight font-bold text-center"
      href={"#"}
    >
      Resume
    </Link>
  );
};

const Name = ({ children }) => {
  return (
    <h1 className="text-fluid--3 flex gap-x-2 items-center font-bold saturate-200">
      {children}
      <span className="relative ml-1 aspect-square inline-block">
        <Image width={34} height={36} src={bear} alt="bear" />
      </span>
    </h1>
  );
};

const Bio = ({ children }) => {
  return (
    <>
      <p className="mb-1">{children}</p>
    </>
  );
};

const Hobby = () => {
  return <div>
    
  </div>;
};

const AvatarWrapper = () => {
  return (
    <div className="space-y-2">
      <div className=" flex items-center justify-end relative py-3 min-h-half-avatar">
        <Profile avatar={avatar} />
        <ResumeBtn />
      </div>
      <Name>Himanshu Toppo</Name>
      <Bio>I bring ideas to life with code! ✨</Bio>
      <Hobby />
    </div>
  );
};

export default AvatarWrapper;
