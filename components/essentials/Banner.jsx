"use client";
import Image from "next/image";
import React from "react";
// import banner from "@/public/banner.svg";
import banner from "@/public/banner-test.webp";

const Banner = () => {
  return (
    <div className="relative w-full aspect-[3/1] ">
      <picture>
        <source srcSet={banner} type="image/webp" />
        <Image
          className="saturate-200 transition-opacity opacity-0 duration-[2s]"
          fill
          src={banner}
          alt="Banner"
          loading="lazy"
          placeholder="blur"
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
      </picture>
    </div>
  );
};

export default Banner;
