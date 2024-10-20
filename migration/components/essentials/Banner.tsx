"use client";
import Image from "next/image";
import React from "react";
// import banner from "@/public/banner.svg";
import banner from "@/public/banner-test.webp";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full aspect-[3/1] ">
      <picture className="relative">
        <Image
          className="saturate-200 transition-opacity opacity-0 duration-[2s]"
          height={300}
          src={banner}
          alt="Banner"
          priority={true}
          placeholder="blur"
          onLoad={(e) =>
            (e.target as HTMLImageElement).classList.remove("opacity-0")
          }
        />
      </picture>
    </div>
  );
};

export default Banner;
