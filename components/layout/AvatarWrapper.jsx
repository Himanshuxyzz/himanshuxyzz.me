import React from "react";
import Image from "next/image";
import Link from "next/link";
import avatar from "@/public/avatar.webp";
import bear from "@/public/bear.svg";
import { bioDetailsIcon } from "@/lib/constant";

export const Profile = ({ avatar }) => {
  return (
    <div className="absolute top-0 left-0 -translate-y-1/2 w-avatar h-avatar overflow-hidden">
      <picture>
        <Image
          className="object-cover aspect-square rounded-full border-4 border-[#030507] dark:border-[#f1f3f5] w-full h-full saturate-150 "
          src={avatar}
          fill
          alt="profile"
          loading="lazy"
          // priority="true"
          placeholder="blur"
        />
      </picture>
    </div>
  );
};

export const ResumeBtn = () => {
  return (
    <Link
      className="hover:no-underline border-transparent dark:focus:border-[#f1f3f5] focus:border-[#030507] dark:focus-visible:border-[#f1f3f5] focus-visible:border-[#030507] hover:border-[#030507] dark:hover:border-[#f1f3f5] border-2 rounded-full text-fluid--1 text-white bg-link-bg px-3 py-[3px] leading-none font-bold text-center"
      href={"/resume"}
    >
      Resume
    </Link>
  );
};

const Name = ({ children }) => {
  return (
    <h1 className="text-base sm:text-fluid--3 flex gap-x-2 items-center font-bold saturate-200 leading-none">
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
  return (
    <div className="mb-3 dark:bg-[#212529] bg-[#f1f3f5] py-4 rounded-lg text-center flex flex-wrap gap-x-2 justify-center font-extrabold border border-gray-300 dark:border-none shadow-outer dark:shadow-none">
      <span className="text-[#D68A94] text-lg font-bold shadow-custom-light dark:shadow-none">
        #Coding.
      </span>
      <span className="text-[#faa780] text-lg font-bold shadow-custom-light dark:shadow-none">
        #Anime.
      </span>
      <span className="text-[#C1C2FB] text-lg font-bold shadow-custom-light dark:shadow-none ">
        #Food.
      </span>
      <span className="text-[#F6C67E] text-lg font-bold shadow-custom-light dark:shadow-none">
        #Gaming.
      </span>
      <span className="text-[#F26F5D] text-lg font-bold shadow-custom-light dark:shadow-none">
        #Music
      </span>
    </div>
  );
};

const BioDetails = () => {
  return (
    <div className="flex gap-x-2 sm:gap-x-4 gap-y-1 items-center text-fluid--1 flex-wrap justify-center text-[#495057] dark:text-[#868E96] font-bold">
      {Object.keys(bioDetailsIcon).map((key) => {
        const detail = bioDetailsIcon[key];
        return (
          <React.Fragment key={key}>
            <span className="p-1 bio-detail flex justify-center items-center  gap-x-1 cursor-pointer">
              <detail.icon />
              <span className="whitespace-nowrap">
                <detail.text />
              </span>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const AvatarWrapper = ({ name, bio }) => {
  return (
    <div className="space-y-3">
      <div className=" flex items-center justify-end relative py-3 min-h-half-avatar">
        <Profile avatar={avatar} />
        <ResumeBtn />
      </div>
      <Name>{name}</Name>
      <Bio>{bio}</Bio>
      <Hobby />
      <BioDetails />
    </div>
  );
};

export default AvatarWrapper;
